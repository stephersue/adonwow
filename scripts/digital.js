var animateReviews = function() {

      var reviews = document.getElementsByClassName('review');

      var revealFirstReview = function() {
          reviews[0].style.opacity = 1;
          reviews[0].style.transform = "scaleX(1) translateY(0)";
          reviews[0].style.msTransform = "scaleX(1) translateY(0)";
          reviews[0].style.WebkitTransform = "scaleX(1) translateY(0)";
      };

      var revealSecondReview = function() {
          reviews[1].style.opacity = 1;
          reviews[1].style.transform = "scaleX(1) translateY(0)";
          reviews[1].style.msTransform = "scaleX(1) translateY(0)";
          reviews[1].style.WebkitTransform = "scaleX(1) translateY(0)";
        };

                 // var revealThirdReview = function() {
                 //     reviews[2].style.opacity = 1;
                 //     reviews[2].style.transform = "scaleX(1) translateY(0)";
                 //     reviews[2].style.msTransform = "scaleX(1) translateY(0)";
                 //     reviews[2].style.WebkitTransform = "scaleX(1) translateY(0)";
                 // };

        revealFirstReview();
        revealSecondReview();
                 // revealThirdReview();
};

  window.onload = function() {
    window.addEventListener('scroll', function(event) {
       console.log(event);
  }
