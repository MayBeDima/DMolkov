window.addEventListener('DOMContentLoaded', function () {

  // HERO GREETING
  let greeting;
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 5 && hour < 12) greeting = "Доброе утро!"; else {
    if (hour >= 12 && hour < 18) greeting = "Добрый день!"; else {
      if (hour >= 18 && hour < 24) greeting = "Добрый вечер!"; else {
        if (hour >= 0 && hour < 5) greeting = "Доброй ночи!";
      }
    }
  }
  document.querySelector('#greeting').innerHTML = greeting;


  // BURGER (HEADER)
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.nav').classList.add('is_active_nav')
  })
  document.querySelector('#close-burger').addEventListener('click', function () {
    document.querySelector('.nav').classList.remove('is_active_nav')
  })

  // DIPLOMAS

  const swiper = new Swiper('#swiper', {
    loop: true,
    slidesPerView: 1,
  });

  // PROJECTS

  document.querySelectorAll('.projects__item').forEach((close) => {
    close.addEventListener('click', (find) => {
      if (find.target.classList.contains('projects__img')) {
        close.querySelectorAll('.projects__box').forEach((box) => {
          box.classList.add('box-active')
        })
        setTimeout(() => close.querySelector('.reverse').classList.add('reverse-act'), 600)
      }
      else if (find.target.classList.contains('push')) {
        close.querySelector('.reverse').classList.remove('reverse-act')
        setTimeout(() => close.querySelectorAll('.projects__box').forEach((e) => {
          e.classList.remove('box-active')
        }), 600)
      }
    })
  })

  document.querySelectorAll('.more-btn').forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelectorAll('.projects__more').forEach((el) => {
        const btnAttr = e.getAttribute('data-project');
        const blockAttr = el.getAttribute('data-project');
        if (btnAttr === blockAttr) {
          el.classList.toggle('projects__more-active');
        }
      })
    })
  })

  // PROGRESS BARS

  let tools = {
    color: "white",
    strokeWidth: 0,
    trailWidth: 5,
    trailColor: "black",
    easing: "easeInOut",
    from: { color: "#fa6565", width: 2 },
    to: { color: "#FF0000", width: 4 },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: '#FF0000',
        position: 'absolute',
        top: '45%',
        left: '42%',
        padding: 0,
        margin: 0,
        transform: null
      }
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
      shape.path.setAttribute("stroke-width", state.width);
      shape.setText(Math.round(shape.value() * 100) + ' %');
    }
  }

  let htmlBar = new ProgressBar.Circle("#progHTML", tools);
  let cssBar = new ProgressBar.Circle("#progCSS", tools);
  let scssBar = new ProgressBar.Circle("#progSCSS", tools);
  let gulpBar = new ProgressBar.Circle("#progGULP", tools);
  let gitBar = new ProgressBar.Circle("#progGIT", tools);
  let bemBar = new ProgressBar.Circle("#progBEM", tools);

  htmlBar.animate(0.77, {
    duration: 3100
  });
  cssBar.animate(0.73, {
    duration: 2900
  });
  scssBar.animate(0.61, {
    duration: 2450
  });
  gulpBar.animate(0.45, {
    duration: 1800
  });
  gitBar.animate(0.37, {
    duration: 1500
  });
  bemBar.animate(0.59, {
    duration: 2350
  });

});







