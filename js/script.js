let date = new Date();
let hour = date.getHours();
let birthDay = new Date(1990, 6, 28);

// Multilanguage

let language = {
  language: `${navigator.language === 'ru' ? 'ru' : 'en'}`
}

function saveLangInLocal() {
  localStorage.setItem('lang', language.language);
}

function getLangFromLocal() {
  return localStorage.getItem('lang') ? localStorage.getItem('lang') : language.language;
}

const translate = {
  ru: {
    nav: [
      'Навыки',
      'Дипломы',
      'Мои работы',
      'Контакты',
      'О себе'
    ],
    greeting: {
      morning: 'Доброе утро!',
      day: 'Добрый день!',
      evening: 'Добрый вечер!',
      night: 'Доброй ночи!',
    },
    resume: {
      link: 'Резюме в PDF'
    },
    hero: {
      title: 'Меня зовут Дмитрий, <br> и я начинающий web&#8209;разработчик'
    },
    sectionTitles: [
      'Мои навыки',
      'Дипломы',
      'Мои работы'
    ],
    skills: {
      text: 'Верстка макетов из Figma, Photoshop.<br>Реализация Pixel Perfect.<br>Адаптивная и кроссбраузерная верстка. Доступность.<br>'
    },
    projects: {
      lookLink: 'Посмотреть',
      sourse: 'Исходники на Github',
      moreBtn: 'Подбробнее',
      moreInformation: {
        header: 'Название',
        techHeader: 'Технологии',
        projectsItem: [
          {
            title: 'Blanchard. Художественная галерея',
            technologies: [
              'Верстка по макету Figma',
              'CSS Flexbox',
              'CSS Flexbox',
              'Адаптивый дизайн',
              'Нативный JS с применением различных утилит'
            ]
          },
          {
            title: 'High Pass',
            technologies: [
              'Верстка по макету Figma',
              'CSS Grid. SCSS.',
              'Pixel perfect',
              'Адаптивый дизайн',
              'Нативный JS с применением различных утилит'
            ]
          },
          {
            title: 'ToDo list',
            technologies: [
              'Адаптивый дизайн Bootstrap',
              'Нативный JS',
              'Использование локального хранилища',
            ]
          },
          {
            title: 'Игра в пары',
            technologies: [
              'Нативный JS',
              'Использование модулей',
            ],
            note: '*только декстопная версия'
          },
          {
            title: 'Игра "Найди число"',
            technologies: [
              'Нативный JS',
              'JS modules',
              'Использование классов',
            ],
            note: '*только декстопная версия'
          },
          {
            title: 'Социальная сеть (demo)',
            technologies: [
              'React JS',
              'Redux',
              'API. Axios',
              'CSS modules',
            ],
            note: '*только декстопная версия <br>**email: free@samuraijs.com <br>***password: free'
          }
        ]
      }
    },
    about: {
      toMain: 'На главную',
      heading: 'Кратко обо мне',
      allAbout: `Как вы уже поняли, меня зовут Дмитрий, мне ${getAge()} года. Родом из славного города Бреста, что на юго-западе Беларуси.<br> Являюсь мужем прекрасной девушки, отцом трех веселых мальчишек, а также хозяином шерстяного кота (правда он считает иначе).<br>Своим главным хобби считаю минифутбол, также совсем непрочь порисовать и немного поиграть на гитаре.<br>В меру умен, ответственен, последователен. Я коммуникабелен, стрессоустойчив. Немного даже чувство юмора имеется. Умение работать в команде это тоже про меня.<br> По образованию я инженер-строитель, а это точная штука вроде как. Это такая работа результат которой виден, а я люблю видеть результат своей работы, именно по этой причине мне интересен и frontend.`
    },
    pdf: {
      href: 'resources/Мольков Дмитрий_Резюме.pdf',
      download: 'Мольков Дмитрий_Резюме.pdf'
    }
  },
  en: {
    nav: [
      'Skills',
      'Diplomas',
      'My projects',
      'Contacts',
      'About me'
    ],
    greeting: {
      morning: 'Good morning!',
      day: 'Good afternoon!',
      evening: 'Good evening!',
      night: 'Good night!',
    },
    resume: {
      link: 'Resume in PDF'
    },
    hero: {
      title: 'My name is Dmitry<br> and I am a beginner web&nbsp;developer'
    },
    sectionTitles: [
      'My skills',
      'Diplomas',
      'My projects'
    ],
    skills: {
      text: 'Layouts from Figma, Photoshop.<br>Pixel Perfect implementation.<br>Adaptive and cross-browser layout. Availability.<br>'
    },
    diplomas: {
      title: 'Diplomas',
    },
    projects: {
      lookLink: 'Look',
      sourse: 'Sourses on Github',
      moreBtn: 'More details',
      moreInformation: {
        header: 'Title',
        techHeader: 'Technologies',
        projectsItem: [
          {
            title: 'Blanchard. Art Gallery',
            technologies: [
              'Layout from Figma',
              'CSS Flexbox',
              'CSS Flexbox',
              'Responsive Design',
              'Vanilla JS with using various utilities'
            ]
          },
          {
            title: 'High Pass',
            technologies: [
              'Layout from Figma',
              'CSS Grid. SCSS.',
              'Pixel perfect',
              'Responsive Design',
              'Vanilla JS with using various utilities'
            ]
          },
          {
            title: 'ToDo list',
            technologies: [
              'Responsive Design Bootstrap',
              'Vanilla JS',
              'Using local storage',
            ]
          },
          {
            title: 'Pairs game',
            technologies: [
              'Vanilla JS',
              'Using modules',
            ],
            note: '*only desktop version'
          },
          {
            title: 'Game "Find a number"',
            technologies: [
              'Vanilla JS',
              'JS modules',
              'Using classes',
            ],
            note: '*only desktop version'
          },
          {
            title: 'Social network (demo)',
            technologies: [
              'React JS',
              'Redux',
              'API. Axios',
              'CSS modules',
            ],
            note: '*only desktop version <br>**email: free@samuraijs.com <br>***password: free'
          }
        ]
      }
    },
    about: {
      toMain: 'To main',
      heading: 'Shortly about me',
      allAbout: `As you already understood, my name is Dmitry, I am ${getAge()} years old. I come from the glorious city of Brest, in the south-west of Belarus.<br> I am the husband of a beautiful girl, the father of three cheerful boys, and also the owner of a woolly cat (although he thinks otherwise). draw and play the guitar a little.<br>Reasonably smart, responsible, consistent. I am sociable, stress-resistant. There is even a bit of a sense of humor. The ability to work in a team is also about me.<br> By education I am a civil engineer, and this is the exact thing, sort of. This is such work, the result of which is visible, and I like to see the result of my work, for this reason, the frontend is also interesting to me.`
    },
    pdf: {
      href: 'resources/Molkov Dmitry_Resume.pdf',
      download: 'Molkov Dmitry_Resume.pdf'
    }
  }
}

function checkTime(message) {
  if (hour >= 5 && hour < 12) return (message ? message.morning : 'Доброе утро!'); else {
    if (hour >= 12 && hour < 18) return (message ? message.day : 'Добрый день!'); else {
      if (hour >= 18 && hour < 24) return (message ? message.evening : 'Добрый вечер!'); else {
        if (hour >= 0 && hour < 5) return (message ? message.night : 'Доброй ночи!');
      }
    }
  }
}

function getAge() {
  if ((date.getMonth() < birthDay.getMonth()) || (date.getMonth() === birthDay.getMonth()) && (date.getDate() < birthDay.getDate())) {
    return date.getFullYear() - birthDay.getFullYear() - 1;
  } else {
    return date.getFullYear() - birthDay.getFullYear();
  }
}

function changeLanguage(language) {

  const anchor = language;

  // For main page

  if (!window.location.href.includes('about')) {
    document.getElementById('me').innerHTML = translate[anchor].hero.title;

    document.querySelectorAll('.nav-js').forEach((el, ind) => {
      el.textContent = translate[anchor].nav[ind];
    })

    document.querySelectorAll('.section-heading').forEach((el, ind) => {
      el.textContent = translate[anchor].sectionTitles[ind];
    })

    document.querySelector('.skills__paragraph').innerHTML = translate[anchor].skills.text;

    document.querySelectorAll('.projects__link').forEach((el) => {
      el.textContent = translate[anchor].projects.lookLink;
    })

    document.querySelectorAll('.sourse-btn').forEach((el) => {
      el.textContent = translate[anchor].projects.sourse;
    })

    document.querySelectorAll('.more-text').forEach((el) => {
      el.textContent = translate[anchor].projects.moreBtn;
    })

    document.querySelectorAll('.project-title').forEach((el) => {
      el.textContent = translate[anchor].projects.moreInformation.header;
    })

    document.querySelectorAll('.project-name').forEach((el, ind) => {
      el.textContent = translate[anchor].projects.moreInformation.projectsItem[ind].title;
    })

    document.querySelectorAll('.technologies').forEach((el) => {
      el.textContent = translate[anchor].projects.moreInformation.techHeader;
    })

    document.querySelectorAll('.more-description-list').forEach((el, ind) => {
      const items = el.getElementsByTagName('li');
      const arrays = Array.from(items);

      arrays.forEach((item, number) => {
        item.textContent = translate[anchor].projects.moreInformation.projectsItem[ind].technologies[number];
      })
    })

    const arrNotes = [];
    translate[anchor].projects.moreInformation.projectsItem.forEach((e) => {
      if (e.note) arrNotes.push(e.note);
    })

    document.querySelectorAll('.more-description-note').forEach((el, ind) => {
      el.innerHTML = arrNotes[ind];
    })

    document.getElementById('greeting').textContent = checkTime(translate[anchor].greeting);
  }

  // For about page
  if (window.location.href.includes('about')) {
    document.getElementById('to-main-js').textContent = translate[anchor].about.toMain;
    document.querySelector('.about__heading').textContent = translate[anchor].about.heading;
    document.querySelector('.about__paragraph').innerHTML = translate[anchor].about.allAbout;
  }

  // For two pages
  const resume = document.querySelector('.resume');
  resume.textContent = translate[anchor].resume.link;
  resume.setAttribute('href', `${translate[anchor].pdf.href}`);
  resume.setAttribute('download', `${translate[anchor].pdf.download}`);
}

const langBtns = document.querySelectorAll('.lang-btn');
console.log(langBtns);

langBtns.forEach((e) => {
  e.addEventListener('click', (el) => {
    language.language = el.target.textContent;
    changeLanguage(language.language);
    saveLangInLocal();
  })
})

// PROGRESS BARS

let tools = {
  color: 'white',
  strokeWidth: 0,
  trailWidth: 5,
  trailColor: 'black',
  easing: 'easeInOut',
  from: { color: '#2c6797', width: 2 },
  to: { color: '#2c6797', width: 4 },
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      color: '#2c6797',
      position: 'absolute',
      top: '45%',
      left: '42%',
      padding: 0,
      margin: 0,
      transform: null
    }
  },
  step: (state, shape) => {
    shape.path.setAttribute('stroke', state.color);
    shape.path.setAttribute('stroke-width', state.width);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
}

// functions for main page

function mainPageScript() {
  if (!window.location.href.includes('about')) {

    // HERO GREETING
    document.querySelector('#greeting').innerHTML = checkTime();

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
      autoplay: {
        delay:5000,
      },
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

    let htmlBar = new ProgressBar.Circle('#progHTML', tools);
    let cssBar = new ProgressBar.Circle('#progCSS', tools);
    let scssBar = new ProgressBar.Circle('#progSCSS', tools);
    let jsBar = new ProgressBar.Circle('#progJS', tools);
    let reactBar = new ProgressBar.Circle('#progREACT', tools);
    let gitBar = new ProgressBar.Circle('#progGIT', tools);

    htmlBar.animate(0.77, {
      duration: 3100
    });
    cssBar.animate(0.73, {
      duration: 2900
    });
    scssBar.animate(0.61, {
      duration: 2450
    });
    jsBar.animate(0.67, {
      duration: 1800
    });
    reactBar.animate(0.59, {
      duration: 1500
    });
    gitBar.animate(0.47, {
      duration: 2350
    });

  }
}

// function for about page

function aboutPageScript() {
  if (window.location.href.includes('about')) {
    document.querySelector('#age').innerHTML = getAge();

    document.querySelector('.photos__box').addEventListener('click', function (event) {
      if (event.target.classList.contains('photos__block')) {
        document.querySelectorAll('.photos__block').forEach(function (e) {
          e.classList.toggle('sub-act');
        })
        event.target.classList.toggle('block-act');
      }
    });
  }
}

mainPageScript();
aboutPageScript();
changeLanguage(getLangFromLocal());
