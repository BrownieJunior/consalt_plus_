const reviews = [
  {
    name: "Игорь Рыбаков",
    date: "11.02.2022",
    text: "Работа с консалтинговым агентством оказалась весьма плодотворной. Их эксперты прекрасно разбираются в бизнес-процессах, и их рекомендации привели к заметному улучшению нашей работы. Сотрудничество с ними — это ценный ресурс для достижения успеха и развития компании.",
  },
  {
    name: "Анна Козлова",
    date: "25.06.2022",
    text: "Мы в восторге от консалтингового агентства. Их умение анализировать ситуацию и предлагать решения оказалось невероятно полезным. Они действительно понимают бизнес и помогли нам сделать важные шаги к улучшению. Рекомендуем их профессиональные услуги всем, кто стремится к успеху.",
  },

  {
    name: "Денис Васильев",
    date: "03.09.2022",
    text: "Сотрудничество с консалтинговым агентством превзошло наши ожидания. Их умение разбираться в деталях и предоставлять четкие рекомендации сделали наш бизнес более эффективным. Мы ценим их профессионализм и плодотворное партнерство, и с уверенностью рекомендуем их услуги.",
  },

  {
    name: "Екатерина Смирнова",
    date: "14.11.2022",
    text: "Отличное консалтинговое агентство! Их глубокое понимание бизнеса и аналитический подход принесли нам ощутимые результаты. С их помощью мы оптимизировали процессы и повысили эффективность работы. Рекомендуем их услуги как надежного партнера в достижении успеха.",
  },

  {
    name: "Максим Петров",
    date: "07.04.2023",
    text: "Консалтинговое агентство оказалось ключевым партнером в развитии нашего бизнеса. Их умение выявлять потенциал и предоставлять стратегии для его реализации было невероятно ценно. Мы благодарны за профессиональное сотрудничество и настоятельно рекомендуем их услуги.",
  },

  {
    name: "Ольга Иванова",
    date: "22.08.2023",
    text: "Сотрудничество с консалтинговым агентством оказалось источником новых перспектив для нашего бизнеса. Их экспертный взгляд на наши процессы привел к реальным улучшениям. Мы благодарны за их ценный вклад в наш успех и рекомендуем их услуги всем, кто стремится к развитию.",
  },

  {
    name: "Сергей Кузнецов",
    date: "09.06.2023",
    text: "Консалтинговое агентство превзошло наши ожидания. Их глубокое понимание нашего бизнеса и качественные рекомендации помогли нам добиться заметных результатов. Сотрудничество с ними — это важный шаг к улучшению и эффективности компании. Рекомендуем их профессиональные услуги для достижения успеха.",
  },

  {
    name: "Ирина Федорова",
    date: "18.03.2023",
    text: "Консалтинговое агентство принесло нам много ценной информации и рекомендаций. Их аналитический подход и опыт помогли нам лучше разбираться в наших процессах. Мы довольны результатами сотрудничества и уверенно рекомендуем их услуги для эффективного бизнес-развития.",
  },

  {
    name: "Александр Соколов",
    date: "30.01.2023",
    text: "Сотрудничество с консалтинговым агентством оказалось ключевым моментом для нашего роста. Их экспертиза и инновационные рекомендации привели к видимым улучшениям в нашей компании. Мы благодарны за их ценный вклад и рекомендуем их услуги как надежного партнера в бизнесе.",
  },

  {
    name: "Елена Морозова",
    date: "12.07.2022",
    text: "Консалтинговое агентство оказалось нашим надежным напарником в стратегическом развитии. Их профессиональные рекомендации и анализ помогли нам оптимизировать наши бизнес-процессы. Сотрудничество с ними дало нам новые инсайты и перспективы для успешного роста компании.",
  },

  {
    name: "Николай Лебедев",
    date: "04.11.2022",
    text: "Сотрудничество с консалтинговым агентством оказалось решающим шагом для нашего бизнеса. Их экспертиза и инновационный подход помогли нам преодолеть сложности и повысить эффективность. Мы ценим их профессионализм и готовность идти на встречу нашим потребностям. Благодарим за плодотворное сотрудничество.",
  },

  {
    name: "Мария Волкова",
    date: "27.09.2023",
    text: "Консалтинговое агентство принесло важный вклад в наш успех. Их аналитический подход и глубокое понимание наших задач сделали сотрудничество эффективным. Полученные рекомендации помогли нам оптимизировать бизнес-процессы и достичь лучших результатов. Рекомендуем их услуги всем предпринимателям.",
  },
];

const maxReviewsPerSlide = 4;
const swiperWrapper = document.querySelector(".swiper-wrapper");

function createReviewCard(review) {
  const reviewCard = document.createElement("li");
  reviewCard.classList.add("swiper__slide-item");

  const nameElement = document.createElement("p");
  nameElement.classList.add("swiper__item-name");
  nameElement.textContent = review.name;

  const dateElement = document.createElement("p");
  dateElement.classList.add("swiper__item-date");
  dateElement.textContent = `Отзыв оставлен ${review.date}`;

  const textElement = document.createElement("p");
  textElement.classList.add("swiper__item-text");
  textElement.textContent = review.text;

  reviewCard.appendChild(nameElement);
  reviewCard.appendChild(dateElement);
  reviewCard.appendChild(textElement);

  return reviewCard;
}

let currentSlide = document.createElement("div");
currentSlide.classList.add("swiper-slide");

let currentSlideList = document.createElement("ul");
currentSlideList.classList.add("swiper__slide-list");

reviews.forEach((review, index) => {
  if (index !== 0 && index % maxReviewsPerSlide === 0) {
    currentSlide.appendChild(currentSlideList);
    swiperWrapper.appendChild(currentSlide);

    currentSlide = document.createElement("div");
    currentSlide.classList.add("swiper-slide");
    currentSlideList = document.createElement("ul");
    currentSlideList.classList.add("swiper__slide-list");
  }

  const reviewCard = createReviewCard(review);
  currentSlideList.appendChild(reviewCard);
});

if (currentSlideList.hasChildNodes()) {
  currentSlide.appendChild(currentSlideList);
  swiperWrapper.appendChild(currentSlide);
}
