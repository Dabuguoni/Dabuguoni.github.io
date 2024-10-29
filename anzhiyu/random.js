var posts=["2024/10/29/JavaNote/","2024/10/29/Shentou/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };