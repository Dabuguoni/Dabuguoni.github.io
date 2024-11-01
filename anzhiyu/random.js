var posts=["2024/10/29/Shentou/","2024/10/29/JavaNote/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };