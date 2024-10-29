var posts=["2024/10/29/hello-world/","2024/10/29/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };