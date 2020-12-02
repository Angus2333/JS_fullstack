var maxDepth = function(root) {
  let res=0; //定义树的深度的变量
  const dfs=(n,l)=>{
    if(!n) return;
    res=Math. max(res,1) //取出最大的res
    dfs(n.left,1+1)
    dfs(n.right,1+1)
  }
  dfs(root,1)
  return res
  };
  