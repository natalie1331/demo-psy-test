
const tests = {
      campus: {
        title: '你的校园人设测试',
        subtitle: '看看你在学校里是哪种超有记忆点的角色',
        themeClass: 'theme-campus',
        cardIcon: '🌟',
        cardGlow: '你的隐藏设定已上线',
        resultPrefix: '你的校园人设：',
        resultBannerTitle: '你的校园画风已解锁',
        assistantLine: '有些人一开口就发光，有些人安静但很有内容。',
        dimensions: {
          spotlight: { label: '社交能量', short: '社交', colorA: '#7e62ff', colorB: '#47b9ff' },
          observer: { label: '观察敏感度', short: '观察', colorA: '#7e62ff', colorB: '#47b9ff' },
          creative: { label: '脑洞创意值', short: '脑洞', colorA: '#7e62ff', colorB: '#47b9ff' },
          stable: { label: '稳定协作力', short: '协作', colorA: '#7e62ff', colorB: '#47b9ff' }
        },
        dimensionOrder: ['spotlight', 'observer', 'creative', 'stable'],
        introText: '班里突然变热闹时，你通常会是哪种角色？',
        questions: [
          { text: '班里突然要分组做展示，你第一反应更像：', options: [
            { key: 'A', text: '行，谁来一起整点有意思的。', dimension: 'spotlight' },
            { key: 'B', text: '我先看看大家怎么分，再决定怎么进场。', dimension: 'observer' },
            { key: 'C', text: '我脑子里已经冒出几个想法了。', dimension: 'creative' },
            { key: 'D', text: '看看哪里缺人，我去把局面稳住。', dimension: 'stable' },
          ]},
          { text: '新建班群突然 99+，你通常会：', options: [
            { key: 'A', text: '直接冲进去，看看到底发生了什么。', dimension: 'spotlight' },
            { key: 'B', text: '先默默看一圈，再决定要不要说话。', dimension: 'observer' },
            { key: 'C', text: '一边看一边脑补整件事的前因后果。', dimension: 'creative' },
            { key: 'D', text: '先抓重点，看看有没有正事别漏掉。', dimension: 'stable' },
          ]},
          { text: '老师突然说“谁愿意来分享一下”，你更可能：', options: [
            { key: 'A', text: '行，我来试试。', dimension: 'spotlight' },
            { key: 'B', text: '先看看有没有别人先举手。', dimension: 'observer' },
            { key: 'C', text: '脑子里先想：我该怎么讲会更有意思。', dimension: 'creative' },
            { key: 'D', text: '如果大家都不动，我可以顶上。', dimension: 'stable' },
          ]},
          { text: '到了一个有点陌生的新环境，你通常：', options: [
            { key: 'A', text: '很快就能开始互动。', dimension: 'spotlight' },
            { key: 'B', text: '先适应一下，不急着表现。', dimension: 'observer' },
            { key: 'C', text: '会先观察气氛和规则。', dimension: 'creative' },
            { key: 'D', text: '找一个最稳妥的方式融进去。', dimension: 'stable' },
          ]},
          { text: '朋友更可能夸你哪一点：', options: [
            { key: 'A', text: '跟你在一起不容易冷场。', dimension: 'spotlight' },
            { key: 'B', text: '你看事情挺细，也挺准。', dimension: 'observer' },
            { key: 'C', text: '你总能想到别人没想到的点。', dimension: 'creative' },
            { key: 'D', text: '跟你一起做事很安心。', dimension: 'stable' },
          ]},
          { text: '下面哪句更像你：', options: [
            { key: 'A', text: '人多也行，我大多时候都能接住场子。', dimension: 'spotlight' },
            { key: 'B', text: '我不是没话说，只是不会乱开麦。', dimension: 'observer' },
            { key: 'C', text: '我脑子里经常有自己的小剧场。', dimension: 'creative' },
            { key: 'D', text: '我不一定最显眼，但通常挺靠谱。', dimension: 'stable' },
          ]}
        ],
        results: {
          spotlight: {
            name: '开麦发光型',
            quote: '有你在，场子一般不会太冷。',
            description: '你不一定非要当主角，但你很会接住气氛，也敢在该说话的时候开口。很多人会先注意到你的存在感，然后才发现你其实不只是热闹，还挺有行动力。',
            tags: ['气氛担当', '反应快', '不怕开麦'],
            report: '你不是爱抢戏，你只是比较容易把“我来吧”这句话说出口。'
          },
          observer: {
            name: '安静观察型',
            quote: '你不是没存在感，你是那种要认真看才会发现很特别的人。',
            description: '你不急着把自己抛出去，更习惯先看、先感受、先判断。你可能不是最吵的那个，但通常是最早看懂气氛、最知道什么时候该进场的人。',
            tags: ['慢热耐看', '细节雷达', '熟了很有梗'],
            report: '你不是高冷，你只是把表达留给值得的人和场合。'
          },
          creative: {
            name: '脑洞策划型',
            quote: '别人还在“要不要做”，你已经在想“怎么做更酷”。',
            description: '你的想法通常比现场快半步。你容易看到别人的任务，也容易看到自己的玩法。你不是单纯天马行空，而是很容易把普通事情看出一点新鲜角度。',
            tags: ['灵感很多', '想法在线', '脑内剧情丰富'],
            report: '你的脑洞真的有库存，建议别总让它们只活在脑内。'
          },
          stable: {
            name: '稳稳队友型',
            quote: '平时低调，关键时刻大家会想找你。',
            description: '你可能不是最爱出风头的那个，但常常是最能把事情接住的人。你让人放心，不是因为你总说得多，而是因为你通常做得到、靠得住。',
            tags: ['靠谱加分', '情绪稳定', '合作感强'],
            report: '你属于那种“平时安静，真出事全队都在找”的角色。'
          }
        }
      },
      night: {
        title: '你的熬夜体质测试',
        subtitle: '别装了，你的深夜模式其实很有戏',
        themeClass: 'theme-night',
        cardIcon: '🌙',
        cardGlow: '深夜模式正在读取',
        resultPrefix: '你的熬夜体质：',
        resultBannerTitle: '你的深夜状态已出炉',
        assistantLine: '你以为你只是晚睡，其实你有自己的深夜剧情。',
        dimensions: {
          owl: { label: '夜间清醒度', short: '清醒', colorA: '#163d8a', colorB: '#53c5ff' },
          revenge: { label: '自由争取值', short: '自由', colorA: '#163d8a', colorB: '#53c5ff' },
          emo: { label: '情绪漂浮度', short: '情绪', colorA: '#163d8a', colorB: '#53c5ff' },
          steady: { label: '作息控制力', short: '作息', colorA: '#163d8a', colorB: '#53c5ff' }
        },
        dimensionOrder: ['owl', 'revenge', 'emo', 'steady'],
        introText: '深夜不睡的时候，你更像哪种夜间生物？',
        questions: [
          { text: '已经不早了，但你还没睡，最常见的原因是：', options: [
            { key: 'A', text: '晚上状态刚上来，现在睡有点亏。', dimension: 'owl' },
            { key: 'B', text: '白天太满了，晚上才像真正属于自己。', dimension: 'revenge' },
            { key: 'C', text: '一到夜里就容易刷着刷着停不下来。', dimension: 'emo' },
            { key: 'D', text: '其实我会尽量控制，太晚会提醒自己收尾。', dimension: 'steady' },
          ]},
          { text: '你最熟悉的深夜画面是：', options: [
            { key: 'A', text: '脑子很清醒，越到晚上越能干活。', dimension: 'owl' },
            { key: 'B', text: '明明累了，但还是舍不得结束这一天。', dimension: 'revenge' },
            { key: 'C', text: '一边听歌或刷视频，一边发呆想东想西。', dimension: 'emo' },
            { key: 'D', text: '看看时间，觉得差不多就该下线了。', dimension: 'steady' },
          ]},
          { text: '朋友问你“怎么又没睡”，你心里更像：', options: [
            { key: 'A', text: '我的高能时段本来就在夜里。', dimension: 'owl' },
            { key: 'B', text: '我只是想把白天没拥有的时间补回来。', dimension: 'revenge' },
            { key: 'C', text: '我也不想，可是夜晚真的太容易走神。', dimension: 'emo' },
            { key: 'D', text: '偶尔会晚一点，但大多数时候我还守得住。', dimension: 'steady' },
          ]},
          { text: '睡前最后十分钟，对你来说通常是：', options: [
            { key: 'A', text: '新一轮高效模式的开始。', dimension: 'owl' },
            { key: 'B', text: '终于没人催了，想再留一点给自己。', dimension: 'revenge' },
            { key: 'C', text: '情绪、内容、想法一起上线。', dimension: 'emo' },
            { key: 'D', text: '该结束了，早点睡对明天友好一点。', dimension: 'steady' },
          ]},
          { text: '第二天起床时，你最可能想：', options: [
            { key: 'A', text: '还好，昨晚至少做了不少事。', dimension: 'owl' },
            { key: 'B', text: '我只是想多一点自由时间而已。', dimension: 'revenge' },
            { key: 'C', text: '我昨晚到底为什么又刷到那么晚。', dimension: 'emo' },
            { key: 'D', text: '早睡值回票价，今天脑子比较在线。', dimension: 'steady' },
          ]},
          { text: '下面哪句更像你：', options: [
            { key: 'A', text: '夜里比较像我的主场。', dimension: 'owl' },
            { key: 'B', text: '我熬的不是夜，是白天没留给自己的时间。', dimension: 'revenge' },
            { key: 'C', text: '安静下来以后，脑子和情绪就都不太安静了。', dimension: 'emo' },
            { key: 'D', text: '我知道晚睡很香，但第二天崩掉更难受。', dimension: 'steady' },
          ]}
        ],
        results: {
          owl: {
            name: '夜猫爆肝型',
            quote: '别人准备关机时，你的大脑才刚高清上线。',
            description: '你很容易在夜里进入状态。安静、没人打扰、时间像变慢了，这些都会让你感觉“终于能开始了”。你不一定是故意熬夜，只是夜晚对你来说太像主场。',
            tags: ['越晚越清醒', '夜间续航高', '主场在深夜'],
            report: '你不是不困，你只是常常和白天的节奏没对上频。'
          },
          revenge: {
            name: '报复性熬夜型',
            quote: '你熬的可能不是夜，是“今天还没真正属于我”的那一点时间。',
            description: '白天太忙、太满、太被安排，到了晚上你就会特别想把自由抢回来一点。哪怕只是多刷一会、多玩一会、多放空一会，也像是在给自己补偿。',
            tags: ['舍不得睡', '夜晚回血', '自由抢救中'],
            report: '你不是单纯拖延，你是在努力把“属于自己”的时间凑回来。'
          },
          emo: {
            name: 'emo 漫游型',
            quote: '夜一安静，你的思绪和情绪就容易开始加班。',
            description: '你不是一定要熬，但很容易在夜里被内容、音乐、回忆或者一些乱七八糟的念头牵走。你可能只是想放松一下，结果一抬头，时间已经很会跑了。',
            tags: ['夜间漂流', '情绪敏感', '容易走神'],
            report: '月亮一出来，你的脑内频道也会悄悄多开几个窗口。'
          },
          steady: {
            name: '作息守门员',
            quote: '你知道夜晚很香，但你更知道明天还得活。',
            description: '你不是不会晚睡，只是大多数时候能感觉到“差不多该停了”。你对自己的节奏有一点边界感，也比较清楚熬夜的代价。',
            tags: ['节律在线', '边界感强', '明天优先'],
            report: '你不是无聊，你只是比较懂得守住第二天的自己。'
          }
        }
      },
      heart: {
        title: '你的心动靠近风格测试',
        subtitle: '一有点心动，你会是哪种靠近画风',
        themeClass: 'theme-heart',
        cardIcon: '💗',
        cardGlow: '心动信号正在捕捉',
        resultPrefix: '你的心动靠近风格：',
        resultBannerTitle: '你的心动画风已出炉',
        assistantLine: '有的人会直接靠近，有的人会先偷偷观察。',
        dimensions: {
          direct: { label: '主动表达度', short: '表达', colorA: '#ff7da8', colorB: '#ffb86c' },
          cautious: { label: '谨慎观察度', short: '观察', colorA: '#ff7da8', colorB: '#ffb86c' },
          secure: { label: '安全需求度', short: '安心', colorA: '#ff7da8', colorB: '#ffb86c' },
          hidden: { label: '隐藏在意值', short: '在意', colorA: '#ff7da8', colorB: '#ffb86c' }
        },
        dimensionOrder: ['direct', 'cautious', 'secure', 'hidden'],
        introText: '当你开始在意一个人，你会怎么靠近？',
        questions: [
          { text: '如果你开始注意到一个人，你通常会：', options: [
            { key: 'A', text: '想办法多一点接触和互动。', dimension: 'direct' },
            { key: 'B', text: '先观察，不会太快表现出来。', dimension: 'cautious' },
            { key: 'C', text: '更在意相处是不是舒服、自然。', dimension: 'secure' },
            { key: 'D', text: '表面装普通，私下会多留意一点。', dimension: 'hidden' },
          ]},
          { text: '对方主动来找你聊天时，你更像：', options: [
            { key: 'A', text: '开心就会接住，甚至主动延长话题。', dimension: 'direct' },
            { key: 'B', text: '表面平静，先慢慢看对方到底什么节奏。', dimension: 'cautious' },
            { key: 'C', text: '会很在意聊天是不是让人轻松、不累。', dimension: 'secure' },
            { key: 'D', text: '明明挺高兴，回复却还想装得很淡定。', dimension: 'hidden' },
          ]},
          { text: '在“有点心动”的阶段，你最在意的是：', options: [
            { key: 'A', text: '有没有明确来回，不想一直猜。', dimension: 'direct' },
            { key: 'B', text: '想先确认对方是不是真的认真。', dimension: 'cautious' },
            { key: 'C', text: '相处时能不能让我放松和安心。', dimension: 'secure' },
            { key: 'D', text: '对方能不能看懂我那些没说出口的小在意。', dimension: 'hidden' },
          ]},
          { text: '如果有一点小误会，你更可能：', options: [
            { key: 'A', text: '想直接说开，不想拖太久。', dimension: 'direct' },
            { key: 'B', text: '先观察一下，再决定要不要讲。', dimension: 'cautious' },
            { key: 'C', text: '更想把气氛慢慢修回来。', dimension: 'secure' },
            { key: 'D', text: '嘴上说没事，心里其实会记住。', dimension: 'hidden' },
          ]},
          { text: '下面哪句话更像你：', options: [
            { key: 'A', text: '喜欢就别太绕。', dimension: 'direct' },
            { key: 'B', text: '我不是慢，我只是想看清楚一点。', dimension: 'cautious' },
            { key: 'C', text: '稳定和舒服比一下子上头更重要。', dimension: 'secure' },
            { key: 'D', text: '我可能嘴硬，但不是没感觉。', dimension: 'hidden' },
          ]},
          { text: '理想中的靠近方式，对你来说更像：', options: [
            { key: 'A', text: '双向明确，别让信号全靠猜。', dimension: 'direct' },
            { key: 'B', text: '慢慢熟起来，再一点点靠近。', dimension: 'cautious' },
            { key: 'C', text: '相处舒服，能放心做自己。', dimension: 'secure' },
            { key: 'D', text: '表面普通，细节里有偏爱。', dimension: 'hidden' },
          ]}
        ],
        results: {
          direct: {
            name: '直球表达派',
            quote: '对你来说，心动最怕的不是拒绝，是一直猜。',
            description: '你不太喜欢把好感全丢进模糊地带里。你更愿意用清楚一点的方式表达、确认、靠近。不是冲，是不想浪费本来很真实的感觉。',
            tags: ['不爱绕弯', '信号清晰', '主动型选手'],
            report: '你走的不是莽撞路线，是“喜欢就别让误会先到”的路线。'
          },
          cautious: {
            name: '慢热试探派',
            quote: '你不是不靠近，你是不会一下子把感觉全交出去。',
            description: '你会心动，也会认真，但通常不会一下子把自己全部推出去。你更信任“时间会帮我看清楚这个人”，所以你的靠近往往带一点耐心和观察。',
            tags: ['慢慢确认', '观察优先', '越熟越真诚'],
            report: '你不是慢，你只是对自己的心意比较负责。'
          },
          secure: {
            name: '安全陪伴派',
            quote: '真正打动你的，往往不是刺激，是安心。',
            description: '你在意的不是单次上头，而是相处时能不能自然、稳定、舒服。你喜欢关系里有一点可依靠的感觉，不喜欢太拧巴、太消耗。',
            tags: ['稳定感优先', '舒服很重要', '低消耗关系'],
            report: '你心动的方式不一定最热烈，但通常最能走进日常。'
          },
          hidden: {
            name: '嘴硬心软派',
            quote: '表面风平浪静，细节里全是波澜。',
            description: '你看起来可能挺会装淡定，但只要真的在意，很多小事你都会默默记住。你不是没表达，只是喜欢把表达藏在一些不太显眼的地方。',
            tags: ['表面淡定', '细节控', '偏爱藏得深'],
            report: '你嘴上可能说“还好吧”，但很多在意其实已经写进你的行为里了。'
          }
        }
      }
    };


const state = {
  currentTestKey: null,
  currentQuestionIndex: 0,
  answers: [],
  scores: {},
  nickname: '',
  result: null,
};

const resultArtMeta = {
  campus: {
    spotlight: { emoji: '🌟', title: '发光登场', caption: '一开麦就自带亮点，镜头感这块稳稳在线。', colors: ['#7f67ff', '#47b9ff'] },
    observer: { emoji: '🧠', title: '安静侦察', caption: '你不是没戏，你只是先把全场看明白。', colors: ['#6d7cff', '#64d7ff'] },
    creative: { emoji: '🎨', title: '脑洞制造机', caption: '普通题目到你手里，都会多一点新鲜感。', colors: ['#9b5cff', '#ff8ac2'] },
    stable: { emoji: '🛡️', title: '靠谱守护位', caption: '平时低调，关键时刻全队默认找你。', colors: ['#4cc8ff', '#73f0c8'] },
  },
  night: {
    owl: { emoji: '🦉', title: '夜猫上线', caption: '越晚越清醒，深夜像是你的专属主场。', colors: ['#2444b8', '#5ed2ff'] },
    revenge: { emoji: '🎧', title: '自由回合', caption: '不是不困，是白天没过完的自己还想继续。', colors: ['#3f56ff', '#7cd7ff'] },
    emo: { emoji: '🌌', title: '夜空发呆系', caption: '一到深夜，情绪和脑内小剧场就开始转场。', colors: ['#3751a6', '#8c9dff'] },
    steady: { emoji: '⏰', title: '作息守门员', caption: '偶尔也晚，但你心里一直有个提醒铃。', colors: ['#2a7cff', '#7ef0ff'] },
  },
  heart: {
    direct: { emoji: '💘', title: '直球模式', caption: '有感觉就想靠近，不爱把好感全丢进迷雾里。', colors: ['#ff6ea8', '#ffb56c'] },
    cautious: { emoji: '🔍', title: '慢热观察中', caption: '你会心动，但不会一下把全部心意交出去。', colors: ['#ff7aa4', '#ffd170'] },
    secure: { emoji: '☁️', title: '安心优先', caption: '真正让你心动的，是舒服、稳定和可依靠。', colors: ['#ff8ab5', '#ffc77b'] },
    hidden: { emoji: '🤍', title: '嘴硬心软', caption: '表面淡定，细节里其实早就写满偏爱。', colors: ['#ff7cae', '#ff9bd5'] },
  },
};

const screens = {
  home: document.getElementById('homeScreen'),
  quiz: document.getElementById('quizScreen'),
  nickname: document.getElementById('nicknameScreen'),
  result: document.getElementById('resultScreen'),
};

const testCards = document.getElementById('testCards');
const quizMiniTitle = document.getElementById('quizMiniTitle');
const progressLabel = document.getElementById('progressLabel');
const progressCount = document.getElementById('progressCount');
const progressBar = document.getElementById('progressBar');
const questionIndexChip = document.getElementById('questionIndexChip');
const questionText = document.getElementById('questionText');
const optionsBox = document.getElementById('optionsBox');
const questionCard = document.getElementById('questionCard');
const assistantLine = document.getElementById('assistantLine');
const nicknameInput = document.getElementById('nicknameInput');
const resultBanner = document.getElementById('resultBanner');
const resultStamp = document.getElementById('resultStamp');
const resultTitleSmall = document.getElementById('resultTitleSmall');
const resultMainTitle = document.getElementById('resultMainTitle');
const resultDescription = document.getElementById('resultDescription');
const resultQuote = document.getElementById('resultQuote');
const resultTags = document.getElementById('resultTags');
const resultReport = document.getElementById('resultReport');
const metricList = document.getElementById('metricList');
const resultArt = document.getElementById('resultArt');
const artCaption = document.getElementById('artCaption');
const radarCanvas = document.getElementById('radarCanvas');
const radarCtx = radarCanvas.getContext('2d');

function showScreen(key) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[key].classList.add('active');
  window.scrollTo(0, 0);
}

function renderHomeCards() {
  const items = Object.entries(tests).map(([key, test], index) => `
    <article class="test-card ${test.themeClass}" style="--card-delay:${index * 120 + 300};" data-test="${key}" role="button" tabindex="0" aria-label="开始 ${test.title}">
      <div class="card-topline">
        <div class="card-badge">${test.cardIcon} ${test.cardGlow}</div>
        <div class="card-icon">${test.cardIcon}</div>
      </div>
      <h3>${test.title}</h3>
      <p>${test.subtitle}</p>
      <div class="card-footer">
        <button class="start-btn">开始测试</button>
        <div class="card-glow">✨ 秒开你的隐藏画风</div>
      </div>
    </article>
  `).join('');

  testCards.innerHTML = items;
  [...testCards.querySelectorAll('.test-card')].forEach(card => {
    const key = card.dataset.test;
    const start = () => startTest(key);
    card.addEventListener('click', start);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        start();
      }
    });
  });
}

function initScores(testKey) {
  const scores = {};
  tests[testKey].dimensionOrder.forEach(d => scores[d] = 0);
  return scores;
}

function startTest(testKey) {
  state.currentTestKey = testKey;
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.scores = initScores(testKey);
  state.nickname = '';
  state.result = null;
  nicknameInput.value = '';
  renderQuestion();
  showScreen('quiz');
}

function renderQuestion() {
  const test = tests[state.currentTestKey];
  const question = test.questions[state.currentQuestionIndex];
  const total = test.questions.length;
  const current = state.currentQuestionIndex + 1;
  const percent = current / total * 100;

  quizMiniTitle.textContent = test.title;
  progressLabel.textContent = test.introText;
  progressCount.textContent = `${current} / ${total}`;
  progressBar.style.width = `${Math.max(12, percent)}%`;
  questionIndexChip.textContent = `第 ${current} 题`;
  questionText.textContent = question.text;
  assistantLine.textContent = test.assistantLine;

  optionsBox.innerHTML = question.options.map(opt => `
    <button class="option-btn" data-dimension="${opt.dimension}" data-key="${opt.key}">
      <div class="option-key">${opt.key}</div>
      <div class="option-copy">${opt.text}</div>
    </button>
  `).join('');

  [...optionsBox.querySelectorAll('.option-btn')].forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn));
  });
}

function handleAnswer(button) {
  const { dimension, key: answerKey } = button.dataset;
  [...optionsBox.querySelectorAll('.option-btn')].forEach(btn => btn.disabled = true);
  button.classList.add('selected');
  state.answers.push({ questionIndex: state.currentQuestionIndex, dimension, answerKey });
  state.scores[dimension] += 2;

  setTimeout(() => {
    state.currentQuestionIndex += 1;
    const test = tests[state.currentTestKey];
    if (state.currentQuestionIndex >= test.questions.length) {
      showScreen('nickname');
    } else {
      renderQuestion();
    }
  }, 180);
}

function computeResult() {
  const entries = Object.entries(state.scores);
  const maxScore = Math.max(...entries.map(([, score]) => score));
  const tied = entries.filter(([, score]) => score === maxScore).map(([key]) => key);
  let winner = tied[0];

  if (tied.length > 1) {
    for (let i = state.answers.length - 1; i >= 0; i -= 1) {
      if (tied.includes(state.answers[i].dimension)) {
        winner = state.answers[i].dimension;
        break;
      }
    }
  }

  const resultInfo = tests[state.currentTestKey].results[winner];
  state.result = { key: winner, ...resultInfo };
  return state.result;
}

function createResultArt(testKey, resultKey) {
  const meta = resultArtMeta?.[testKey]?.[resultKey] || { emoji: '✨', title: '已解锁', caption: '你的专属小人设已上线。', colors: ['#7f67ff', '#47b9ff'] };
  const [c1, c2] = meta.colors;
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" role="img" aria-label="${meta.title}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}" />
        <stop offset="100%" stop-color="${c2}" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.68)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
      </radialGradient>
    </defs>
    <rect width="300" height="300" rx="34" fill="url(#g)"/>
    <circle cx="150" cy="120" r="92" fill="rgba(255,255,255,0.16)"/>
    <circle cx="150" cy="120" r="76" fill="rgba(255,255,255,0.20)"/>
    <circle cx="150" cy="120" r="66" fill="rgba(255,255,255,0.28)"/>
    <circle cx="150" cy="112" r="46" fill="#fff8ff" opacity="0.96"/>
    <circle cx="133" cy="106" r="5" fill="#1f2340"/>
    <circle cx="167" cy="106" r="5" fill="#1f2340"/>
    <path d="M135 128c7 8 23 8 30 0" fill="none" stroke="#1f2340" stroke-width="5" stroke-linecap="round"/>
    <rect x="122" y="154" width="56" height="62" rx="22" fill="#ffffff" opacity="0.93"/>
    <rect x="114" y="165" width="72" height="16" rx="8" fill="rgba(255,255,255,0.9)"/>
    <circle cx="89" cy="73" r="16" fill="rgba(255,255,255,0.24)"/>
    <circle cx="222" cy="68" r="12" fill="rgba(255,255,255,0.24)"/>
    <circle cx="229" cy="190" r="10" fill="rgba(255,255,255,0.18)"/>
    <text x="150" y="118" text-anchor="middle" dominant-baseline="middle" font-size="44">${meta.emoji}</text>
    <text x="150" y="250" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, sans-serif" font-size="22" font-weight="800" fill="white">${meta.title}</text>
  </svg>`;

  return { html: `<img alt="${meta.title}" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}">`, caption: meta.caption };
}

function generateResult() {
  const nick = nicknameInput.value.trim();
  state.nickname = nick || '匿名玩家';
  computeResult();
  renderResult();
  showScreen('result');
}

function renderResult() {
  const test = tests[state.currentTestKey];
  const result = state.result;
  const art = createResultArt(state.currentTestKey, result.key);

  resultBanner.className = `result-banner ${test.themeClass}`;
  resultStamp.textContent = 'Dou测试宇宙';
  resultTitleSmall.textContent = `${state.nickname} 的结果到站`;
  resultMainTitle.textContent = `${test.resultPrefix}${result.name}`;
  resultDescription.textContent = result.description;
  resultQuote.textContent = result.quote;
  resultReport.textContent = result.report;
  resultTags.innerHTML = result.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  resultArt.innerHTML = art.html;
  artCaption.textContent = art.caption;

  metricList.innerHTML = '';
  test.dimensionOrder.forEach((dimensionKey) => {
    const dimension = test.dimensions[dimensionKey];
    const score = state.scores[dimensionKey];
    const percent = Math.round((score / 12) * 100);
    const row = document.createElement('div');
    row.className = 'metric';
    row.innerHTML = `
      <div class="metric-head">
        <span>${dimension.label}</span>
        <span>${percent}%</span>
      </div>
      <div class="metric-track">
        <div class="metric-fill" data-width="${percent}" style="width:0%; background: linear-gradient(90deg, ${dimension.colorA}, ${dimension.colorB});"></div>
      </div>
    `;
    metricList.appendChild(row);
  });

  requestAnimationFrame(() => {
    metricList.querySelectorAll('.metric-fill').forEach((fill, i) => {
      setTimeout(() => {
        fill.style.transition = 'width 700ms cubic-bezier(.2,.8,.2,1)';
        fill.style.width = `${fill.dataset.width}%`;
      }, i * 90);
    });
  });

  drawRadarChart(test, state.scores, result.key);
}

function drawRadarChart(test, scores, resultKey) {
  const duration = 760;
  const startTs = performance.now();

  function frame(now) {
    const progress = Math.min(1, (now - startTs) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    drawRadarFrame(test, scores, resultKey, eased);
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function drawRadarFrame(test, scores, resultKey, progress = 1) {
  const dpr = window.devicePixelRatio || 1;
  const size = 320;
  radarCanvas.width = size * dpr;
  radarCanvas.height = size * dpr;
  radarCtx.setTransform(1, 0, 0, 1, 0, 0);
  radarCtx.scale(dpr, dpr);
  radarCtx.clearRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const radius = 96;
  const axisCount = test.dimensionOrder.length;
  const angleStep = (Math.PI * 2) / axisCount;
  const startAngle = -Math.PI / 2;
  const dimension = test.dimensions[resultKey] || test.dimensions[test.dimensionOrder[0]];
  const strokeA = dimension.colorA;
  const strokeB = dimension.colorB;

  const glow = radarCtx.createRadialGradient(cx, cy, 10, cx, cy, 150);
  glow.addColorStop(0, 'rgba(255,255,255,0.13)');
  glow.addColorStop(1, 'rgba(255,255,255,0.00)');
  radarCtx.fillStyle = glow;
  radarCtx.beginPath();
  radarCtx.arc(cx, cy, 150, 0, Math.PI * 2);
  radarCtx.fill();

  for (let level = 1; level <= 4; level += 1) {
    const r = radius * (level / 4);
    radarCtx.beginPath();
    test.dimensionOrder.forEach((dimKey, i) => {
      const angle = startAngle + angleStep * i;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) radarCtx.moveTo(x, y); else radarCtx.lineTo(x, y);
    });
    radarCtx.closePath();
    radarCtx.strokeStyle = 'rgba(255,255,255,0.11)';
    radarCtx.lineWidth = 1;
    radarCtx.stroke();
  }

  test.dimensionOrder.forEach((dimKey, i) => {
    const angle = startAngle + angleStep * i;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    radarCtx.beginPath();
    radarCtx.moveTo(cx, cy);
    radarCtx.lineTo(x, y);
    radarCtx.strokeStyle = 'rgba(255,255,255,0.12)';
    radarCtx.lineWidth = 1;
    radarCtx.stroke();
  });

  const gradient = radarCtx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
  gradient.addColorStop(0, strokeA + 'DD');
  gradient.addColorStop(1, strokeB + 'DD');
  radarCtx.beginPath();
  test.dimensionOrder.forEach((dimKey, i) => {
    const value = ((scores[dimKey] || 0) / 12) * progress;
    const angle = startAngle + angleStep * i;
    const x = cx + Math.cos(angle) * radius * value;
    const y = cy + Math.sin(angle) * radius * value;
    if (i === 0) radarCtx.moveTo(x, y); else radarCtx.lineTo(x, y);
  });
  radarCtx.closePath();
  radarCtx.fillStyle = gradient;
  radarCtx.globalAlpha = 0.24;
  radarCtx.fill();
  radarCtx.globalAlpha = 1;
  radarCtx.lineWidth = 3;
  radarCtx.strokeStyle = gradient;
  radarCtx.stroke();

  test.dimensionOrder.forEach((dimKey, i) => {
    const value = ((scores[dimKey] || 0) / 12) * progress;
    const angle = startAngle + angleStep * i;
    const px = cx + Math.cos(angle) * radius * value;
    const py = cy + Math.sin(angle) * radius * value;
    radarCtx.beginPath();
    radarCtx.arc(px, py, 4.6, 0, Math.PI * 2);
    radarCtx.fillStyle = '#ffffff';
    radarCtx.fill();
    radarCtx.lineWidth = 2;
    radarCtx.strokeStyle = gradient;
    radarCtx.stroke();

    const labelX = cx + Math.cos(angle) * (radius + 22);
    const labelY = cy + Math.sin(angle) * (radius + 22);
    radarCtx.font = '600 12px -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, sans-serif';
    radarCtx.fillStyle = `rgba(255,255,255,${0.55 + progress * 0.35})`;
    radarCtx.textAlign = labelX < cx - 8 ? 'right' : labelX > cx + 8 ? 'left' : 'center';
    radarCtx.textBaseline = labelY < cy - 6 ? 'bottom' : labelY > cy + 6 ? 'top' : 'middle';
    radarCtx.fillText(test.dimensions[dimKey].short || test.dimensions[dimKey].label, labelX, labelY);
  });

  radarCtx.beginPath();
  radarCtx.arc(cx, cy, 28, 0, Math.PI * 2);
  radarCtx.fillStyle = 'rgba(255,255,255,0.08)';
  radarCtx.fill();
  radarCtx.font = '700 12px -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, sans-serif';
  radarCtx.fillStyle = 'rgba(255,255,255,0.94)';
  radarCtx.textAlign = 'center';
  radarCtx.textBaseline = 'middle';
  radarCtx.fillText('状态', cx, cy);
}

function generateSparkles() {
  const layer = document.getElementById('sparkleLayer');
  if (!layer) return;
  layer.innerHTML = '';
  const total = 18;
  for (let i = 0; i < total; i += 1) {
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.style.setProperty('--left', `${Math.random() * 100}%`);
    s.style.setProperty('--top', `${Math.random() * 100}%`);
    s.style.setProperty('--size', `${6 + Math.random() * 12}px`);
    s.style.setProperty('--dur', `${6 + Math.random() * 6}s`);
    s.style.setProperty('--delay', `${Math.random() * 5}s`);
    layer.appendChild(s);
  }
}

document.getElementById('backHomeBtn').addEventListener('click', () => showScreen('home'));
document.getElementById('generateResultBtn').addEventListener('click', generateResult);
document.getElementById('skipNicknameBtn').addEventListener('click', generateResult);
document.getElementById('retryBtn').addEventListener('click', () => showScreen('home'));
document.getElementById('retestBtn').addEventListener('click', () => startTest(state.currentTestKey));
nicknameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') generateResult();
});

generateSparkles();
renderHomeCards();
