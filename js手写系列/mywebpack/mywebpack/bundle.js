const fs = require('fs');
const path = require('path')
const parse = require('@babel/parser');
const traverse = require('@babel/traverse').default
const babel = require('@babel/core');

const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8');
  const ast = parse.parse(body, {
    sourceType: 'module' // 表示我们要解析的是ES6语法
  })
  // 依赖收集
  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file); // index.js 的绝对路径
      const adspath = './' + path.join(dirname, node.source.value);
      // console.log(adspath.replace('\\','/'));
      // window,mac反斜杠的问题
      deps[node.source.value] = adspath.split(path.sep).join('/');
    }
  })

  //es6 -> es5 转换AST语法树
  const { code } =  babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  
  const moduleInfo = { file, deps, code };
  return moduleInfo;

  // console.log(ast.program.body);
  // console.log(deps);
  // console.log(code);
}

// 递归所有的模块
const parseModule = (file) => {
  const entry = getModuleInfo(file);
  const temp = [entry];
  const depsGraph = {};
  for (let i = 0; i < temp.length; i++){
    const deps = temp[i].deps;
    if (deps) {
      for (let key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))
        }
      }
    }
  }

  // 格式化数据
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      code: moduleInfo.code,
      deps: moduleInfo.deps
    }
  })


  // console.log(depsGraph); // '路径':{ code, deps }
  return depsGraph;
}

// 处理require 和 exports
const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModule(file));
  return `(function(graph) {
    function require(file) {
      function absRequire(relPath) { // 把相对路径弥补成绝对路径
        return require(graph[file].deps[relPath]);
      }
      var exports = {};
      (function(requrie, exports, code){
        eval(code)
      })(absRequire, graph[file].code)
      return exports;
    }
    require('${file}');
  })(${depsGraph})`
}

// getModuleInfo('./src/index.js')

// parseModule('./src/index.js');

const content = bundle('./src/index.js');
console.log(content);

fs.mkdirSync('./dist');
fs.writeFileSync('./dist/bundle.js', content);



(function(graph) {
  function require(file) {
    function absRequire(relPath) { // 把相对路径弥补成绝对路径
      return require(graph[file].deps[relPath]);
    }
    var exports = {};
    (function(requrie, exports, code){ // require 只不是是型参，代表的就是absRequire
      eval(code) // code 里面的require执行其实际上就是absRequire的执行
    })(absRequire, graph[file].code)
    return exports;
  }
  require(file);
})(depsGraph)
