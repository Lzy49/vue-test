export function diff(n1,n2){
  /* 
    n1 旧   
    n2 新
  */
  // 修改了tag
  if(n1.tag !== n2.tag){
    n1.el.replaceWith(document.createElement(n2.tag))
  }else{
    /* 因为新的vdom 没有 el */
    n2.el = n1.el
    // 修改了props
    const {props:newProps} = n2;
    const {props:oldProps} = n1;
    if(newProps && oldProps){
      Object.keys(newProps).forEach(key=>{
        const item = newProps[key]
        if(item !== oldProps[key]){
          n2.el.setAttribute(key,item)
        }
      })
    }
    if(oldProps){
      Object.keys(oldProps).forEach(key=>{
        if(!newProps[key]){
          n2.el.removeAttribute(key)
        }
      })
    }
    // 修改了children
    // 修改children 一共有4种情况
    /*
      1. new old 都为Array
      2. new old 都为String
      3. new 为 Array old  为string
      4. new 为 String old 为 Array
      */
    if(Array.isArray(n1.children)){
      // 1. new old 都为Array
      if(Array.isArray(n2.children)){
        let length = Math.max(n1.children.length,n2.children.length)
        for(let i = 0 ; i < length ; i ++){
          diff(n1.children[i],n2.children[i])
        }
        if(n1.children.length > n2.children.length){
          for(let i = n2.children.length ; i < n1.children.length ; i++){
            n1.el.parent.removeChild(n1.children[i].el)
          }
        }
        if(n1.children.length < n2.children.length){
          for(let i = n1.children.length ; i < n2.children.length ; i++){
            mountElement(n2.children[i],n1.el)
          }
        }
      }
    }else if(n1.children !== n2.children){
      n1.el.innerText = n2.children
    }
  }

}
// vdom -> dom
export function mountElement(vdom,container){
  const {tag,props,children}  = vdom
  //tag
  let element = document.createElement(tag)
  //props
  if(props){
    for (const k in props){
      element.setAttribute(k,props[k])
    }
  }
  vdom.el = element
  //children
  if(Array.isArray(children)){
    children.forEach(v => {
      mountElement(v,element)
    });
  }else{
    element.append(document.createTextNode(children))
  }
  
  container.append(element)
}