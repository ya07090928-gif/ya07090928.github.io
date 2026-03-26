// 占卜結果資料（集中整理，方便後續修改）
const fortunes = [
    {
        type: "✨ 超級大吉",
        desc: "宇宙的能量都在為你加持，今天是你的幸運日，心想事成的機率極高！",
        work: "貴人相助，計畫順利推進，甚至可能有意外的表揚或收穫。",
        study: "思緒清晰，學習效率翻倍，面對難題也能迎刃而解。",
        love: "魅力四射！單身者有浪漫邂逅，有伴者感情將大幅升溫。",
        money: "財神眷顧，投資精準，可能會有意想不到的偏財或獎勵。",
        ending: "盡情展現自己吧，世界都在為你閃耀！"
    },
    {
        type: "🌟 大吉",
        desc: "陽光普照的一天，做什麼都感覺順手，保持著微笑好運就會一直跟著你。",
        work: "表現亮眼受肯定，遇到小困難也能輕鬆化解。",
        study: "觸類旁通，昨天不懂的今天突然都明白了，靈感湧現。",
        love: "溫馨甜蜜，一個小驚喜或貼心舉動能讓彼此笑容滿面。",
        money: "正財穩定增長，之前的努力開始看到實質回報。",
        ending: "帶著自信的步伐，迎接美好的今天！"
    },
    {
        type: "☀️ 中吉",
        desc: "平穩向上，雖然沒有大起大落，但一切都在往好的方向慢慢發展。",
        work: "按部就班就能完成目標，適合處理累積的繁雜瑣事。",
        study: "適合溫故知新，紮實打好基礎，為未來鋪路的一天。",
        love: "平淡見真情，簡單的一句問候與陪伴勝過千言萬語。",
        money: "收支平衡，可以稍微給自己買個小禮物犒賞一下。",
        ending: "穩扎穩打，每一步都是邁向成功的基石。"
    },
    {
        type: "🍀 小吉",
        desc: "生活中藏著一些微小而確實的幸福，需要你放慢腳步去用心發現。",
        work: "可能有點忙碌，但中午喝杯好咖啡或與同事閒聊能為你充飽電。",
        study: "雖然進度不是很快速，但每天進步一點點也很棒。",
        love: "不經意的眼神交會或默契，能帶來會心一笑的溫暖。",
        money: "可能在舊外套口袋找到零錢，或是剛好買到打折的好物。",
        ending: "用心感受生活中的小確幸吧！"
    },
    {
        type: "🍃 平",
        desc: "風平浪靜的一天，沒有驚喜也沒有驚嚇，適合讓身心好好休息。",
        work: "例行公事為主，不宜做重大決定或開啟需耗費大量心力的計畫。",
        study: "照著原訂計畫走即可，不求快只求穩住基本盤。",
        love: "不需要特別安排活動，一起吃頓尋常的晚餐也很棒。",
        money: "沒有特別的額外進帳，但也安穩守得住錢包。",
        ending: "平凡就是福，享受這份寧靜吧。"
    },
    {
        type: "☁️ 隨緣",
        desc: "事情的發展可能跟你想的不太一樣，放寬心，順其自然會有最好的安排。",
        work: "計畫可能會有臨時變動，保持彈性與笑容是今天的生存法則。",
        study: "遇到瓶頸時，不如先換個科目或去散散步轉換心情。",
        love: "對方可能比較忙碌，給彼此一點個人空間會更好。",
        money: "不要衝動消費，把錢留在身邊比較安心。",
        ending: "深呼吸，放輕鬆，一切都會適得其所。"
    },
    {
        type: "🔮 神秘運",
        desc: "直覺特別敏銳的一天，你的潛意識會指引你走向正確的道路。",
        work: "相信你的第一直覺，它會幫你避開潛在的麻煩與雷區。",
        study: "極度適合探索新的領域，或平常常常忽略的偏門學科。",
        love: "神秘感是今天的最佳武器，保留一點讓人探索的空間。",
        money: "有機會發現新的理財方式，但建議先觀察再行動。",
        ending: "傾聽內心的聲音，你會找到解答。"
    },
    {
        type: "⚡ 挑戰運",
        desc: "考驗來臨，但這正是你展現硬實力、破繭而出的最佳時機！",
        work: "會遇到棘手的問題或難纏的客戶，打敗它你就能獲得升級經驗值。",
        study: "卡關在所難免，試著請教同學或老師，激盪後會有新突破。",
        love: "可能會有些小摩擦，但誠實溝通後能讓關係更加堅固。",
        money: "會有出乎意料的花費，當作是花錢消災或投資自己吧。",
        ending: "不要害怕挑戰，你是最閃亮的戰士！"
    },
    {
        type: "🌙 沉澱",
        desc: "能量稍微低落，今天適合把焦點放回自己身上，好好照顧內心世界。",
        work: "不要太勉強自己，盡力就好，做不完的事情明天再說。",
        study: "記憶力稍弱，整理筆記與思緒會比死背來得更有效率。",
        love: "比起陪伴別人，你今天更需要聆聽自己心裡的聲音。",
        money: "容易因為情緒低落而亂買東西，請暫時遠離購物網站。",
        ending: "休息是為了走更長遠的路，今晚早點休息吧。"
    },
    {
        type: "🔥 逆轉大吉",
        desc: "原本以為無望的事情，今天可能會迎來奇蹟般的大反轉！",
        work: "卡住很久的案子突然有了轉機，抓住這個機會大展身手。",
        study: "以為考砸的科目或沒望的比賽，結果出乎意料的好。",
        love: "一度冷卻的關係有機會破冰，主動釋出善意會有好結果。",
        money: "以為追不回的一筆小錢、借款或遺忘的紅利，突然回流了。",
        ending: "永遠不要放棄希望，奇蹟就在轉角處！"
    }
];

// DOM 元素選取
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');
const divinationArea = document.getElementById('divination-area');
const resultArea = document.getElementById('result-area');

const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');
const aspectWork = document.getElementById('aspect-work');
const aspectStudy = document.getElementById('aspect-study');
const aspectLove = document.getElementById('aspect-love');
const aspectMoney = document.getElementById('aspect-money');
const resultEnding = document.getElementById('result-ending');

// 綁定事件監聽器
drawBtn.addEventListener('click', drawFortune);
retryBtn.addEventListener('click', resetDivination);

function drawFortune() {
    // 簡單的動畫特效：縮小晶球並加上震動感
    const crystalBall = document.querySelector('.crystal-ball .emoji');
    crystalBall.style.animation = 'none';
    
    // 觸發重繪以重置動畫
    void crystalBall.offsetWidth; 
    
    crystalBall.style.transform = "scale(0.8) rotate(15deg)";
    crystalBall.style.transition = "transform 0.1s infinite alternate";
    
    drawBtn.style.pointerEvents = "none"; // 避免重複點擊
    drawBtn.querySelector('.text').textContent = "占卜中...";

    // 模擬占卜等待時間
    setTimeout(() => {
        // 隨機抽選結果
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const result = fortunes[randomIndex];

        // 寫入資料到畫面中
        resultTitle.textContent = result.type;
        resultDesc.textContent = result.desc;
        aspectWork.textContent = result.work;
        aspectStudy.textContent = result.study;
        aspectLove.textContent = result.love;
        aspectMoney.textContent = result.money;
        resultEnding.textContent = result.ending;

        // 區域顯示切換
        divinationArea.classList.remove('active');
        divinationArea.classList.add('hidden');
        
        resultArea.classList.remove('hidden');
        resultArea.classList.add('active');
        
        // 恢復按鈕預設狀態以便下次使用
        crystalBall.style.transform = "";
        crystalBall.style.transition = "";
        crystalBall.style.animation = "float 3s ease-in-out infinite";
        drawBtn.style.pointerEvents = "auto";
        drawBtn.querySelector('.text').textContent = "開始占卜";
        
    }, 800); // 800毫秒的等待感
}

function resetDivination() {
    // 切換回首頁占卜區域
    resultArea.classList.remove('active');
    resultArea.classList.add('hidden');
    
    divinationArea.classList.remove('hidden');
    divinationArea.classList.add('active');
}
