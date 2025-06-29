const beginnerQuizData = [
    {
        question: "Q1: あなたが一番「これだ！」と思う戦い方は？",
        options: [
            { text: "近距離で激しく殴り合う、パワフルな戦い！", scores: { class: ["ファイター", "ジャガーノート", "スカーミッシャー"], attackType: ["メレー"], weight: 3 } },
            { text: "味方を守る最前線の「盾」になる！", scores: { class: ["タンク", "ワーデン"], tags: ["タンク性能", "ピール性能"], weight: 3 } },
            { text: "姿を隠して奇襲！一撃で仕留めるスリル！", scores: { class: ["アサシン"], tags: ["ステルス", "バーストダメージ"], weight: 3 } },
            { text: "遠くから魔法や矢で、安全に攻撃したい！", scores: { class: ["メイジ", "マークスマン"], attackType: ["レンジ"], weight: 3 } },
            { text: "味方を回復したり、手助けして勝利に貢献したい！", scores: { class: ["エンチャンター", "サポート"], tags: ["回復", "ピール性能"], weight: 3 } }
        ]
    },
    {
        question: "Q2: どんな見た目のキャラクターに心惹かれる？",
        options: [
            { text: "美しい、かわいい、あるいはカッコいい人間タイプのキャラクター", scores: { designTheme: ["優雅", "イケメン", "かわいい", "スタイリッシュ", "ヒーロー", "騎士"], weight: 1 } },
            { text: "ちょっとダークでミステリアスな、影のあるキャラクター", scores: { designTheme: ["恐ろしい", "悪魔的", "復讐", "ホラー", "アンデッド", "ゴシック"], weight: 1 } },
            { text: "人間じゃない！ドラゴン、動物、精霊、ロボットなど不思議な存在", scores: { designTheme: ["ドラゴン", "ヴァスタヤ", "ヨードル", "精霊", "ゴーレム", "ロボット", "怪物"], weight: 1 } }
        ]
    },
    {
        question: "Q3: ゲームで味わいたい最高の瞬間は？",
        options: [
            { text: "派手な必殺技で、相手の体力を一気に消し飛ばした時！", scores: { tags: ["バーストダメージ"], class: ["バースト"], weight: 2 } },
            { text: "しぶとく生き残り、粘り勝ちした時！", scores: { tags: ["継戦能力", "自己回復"], strengths: ["高い継戦能力"], weight: 2 } },
            { text: "誰にも追いつけないスピードで、戦場を駆け抜けた時！", scores: { tags: ["高い機動力"], strengths: ["非常に高い機動力"], weight: 2 } },
            { text: "敵の必殺技を完璧に防ぎきり、味方を守った時！", scores: { tags: ["ピール性能", "回避"], strengths: ["味方を守る非常に高い防御性能"], weight: 2 } }
        ]
    },
    {
        question: "Q4: チームの中では、どんな役割が好き？",
        options: [
            { text: "先頭に立って、チームを引っ張るリーダー！", scores: { class: ["ヴァンガード"], tags: ["エンゲージ"], weight: 2 } },
            { text: "一歩引いた場所から、チーム全体をサポートする縁の下の力持ち。", scores: { class: ["エンチャンター", "キャッチャー"], tags: ["ピール性能", "CC"], weight: 2 } },
            { text: "自分の力を信じて道を切り開く、孤高のエース。", scores: { class: ["スカーミッシャー", "アサシン"], tags: ["スプリットプッシュ性能"], weight: 2 } }
        ]
    },
    {
        question: "Q5: 操作は、どのくらいシンプルなのがいい？",
        options: [
            { text: "とにかく簡単！すぐに試合で活躍したい！", scores: { difficulty: ["低"], weight: 2 } },
            { text: "ちょっと練習するくらいならOK。やりごたえも欲しい。", scores: { difficulty: ["中"], weight: 2 } },
            { text: "難しくても構わない。使いこなせたら最高にカッコいいキャラがいい！", scores: { difficulty: ["高"], weight: 2 } }
        ]
    },
    {
        question: "Q6: 敵を倒すなら、どんな方法がいい？",
        options: [
            { text: "物理的な武器（剣や銃）でガツンとダメージ！", scores: { damageType: ["物理 (AD)"], weight: 2 } },
            { text: "派手な魔法で、不思議な力を使ってダメージ！", scores: { damageType: ["魔法 (AP)"], weight: 2 } }
        ]
    },
    {
        question: "Q7: 複数人で行動する時、あなたはどのタイプ？",
        options: [
            { text: "先陣を切って突っ込む！失敗しても気にしない！", scores: { tags: ["エンゲージ", "ダイバー"], weight: 2 } },
            { text: "周りの様子をよく見て、一番良いタイミングを待つ。", scores: { tags: ["ピックアップ", "ゾーンコントロール"], weight: 2 } },
            { text: "後ろからみんなを支える。安全第一！", scores: { tags: ["ピール性能", "エンチャンター"], weight: 2 } }
        ]
    }
];
  
const intermediateQuizData = [
    {
        question: "Q1: あなたが最も輝きたいゲームの時間帯は？",
        options: [
            { text: "序盤からアグレッシブに仕掛け、スノーボールで試合を破壊したい。", scores: { tags: ["序盤の強さ", "スノーボール"], weight: 3 } },
            { text: "パワースパイクを待ち、育ちきった終盤の集団戦で試合を支配したい。", scores: { tags: ["レイトゲーム性能", "集団戦"], weight: 3 } },
            { text: "中盤のロームや小規模戦で、常にマップのどこかで有利を作り続けたい。", scores: { tags: ["ローム性能", "ピックアップ", "ギャンク合わせ"], weight: 3 } }
        ]
    },
    {
        question: "Q2: 5v5の集団戦、あなたの使命は？",
        options: [
            { text: "敵の後衛（ADC/メイジ）に突撃し、キャリーを機能不全にさせる。", scores: { class: ["ダイバー", "アサシン"], tags: ["ダイバー"], weight: 3 } },
            { text: "味方のキャリーを守り抜き、敵の突撃を完璧に阻止する（ピール）。", scores: { class: ["ワーデン", "エンチャンター"], tags: ["ピール性能", "ディスエンゲージ"], weight: 3 } },
            { text: "戦いの火蓋を切り、敵集団のど真ん中で注目を集め、陣形を破壊する。", scores: { class: ["ヴァンガード"], tags: ["エンゲージ", "CC"], weight: 3 } }
        ]
    },
    {
        question: "Q3: あなたが描く、理想の勝利への道筋は？",
        options: [
            { text: "サイドレーンを一人で押し続け、敵を揺さぶる「スプリットプッシュ」。", scores: { tags: ["スプリットプッシュ性能", "スカーミッシャー"], weight: 2 } },
            { text: "視界外から孤立した敵を瞬時に狩る「ピックアップ」。", scores: { tags: ["ピックアップ", "ステルス", "バーストダメージ"], weight: 2 } },
            { text: "安全な距離から敵をじわじわと削り続ける「ポーク」。", scores: { tags: ["ポーク", "ゾーンコントロール", "スキルショット主体"], weight: 2 } }
        ]
    },
    {
        question: "Q4: あなたが使っていて「楽しい」と感じるスキルの種類は？",
        options: [
            { text: "狙って当てる！スキルショットが主体のテクニカルなスキルセット。", scores: { tags: ["スキルショット主体"], weight: 1 } },
            { text: "クリックすれば必中！確実に仕事をこなすターゲット指定スキル。", scores: { tags: ["ターゲット指定スキル"], weight: 1 } },
            { text: "通常攻撃（AA）を主体とし、それを極限まで強化していくスキル。", scores: { tags: ["通常攻撃主体"], weight: 1 } }
        ]
    },
    {
        question: "Q5: ゲーム中、特に「許せない」敵のタイプは？",
        options: [
            { text: "カチカチのタンク。確定ダメージや割合ダメージで溶かしてやりたい。", scores: { tags: ["アンチタンク", "確定ダメージ"], weight: 2 } },
            { text: "ちょこまかと動き回る高機動チャンピオン。動きを止めるCCで捕まえたい。", scores: { tags: ["アンチブリンク", "CC"], weight: 2 } },
            { text: "回復やシールドでしぶとく生き延びる敵。回復阻害で無力化したい。", scores: { tags: ["回復阻害"], class: ["バースト"], weight: 2 } }
        ]
    },
    {
        question: "Q6: あなたの心をくすぐる、特殊なチャンピオンのメカニクスは？",
        options: [
            { text: "スタックを溜めて無限に強くなる、終わらない成長。", scores: { tags: ["無限にスケールする", "進化"], weight: 1 } },
            { text: "キルでスキルがリセットされる、敵をなぎ倒す爽快感。", scores: { tags: ["リセット", "スノーボール"], weight: 1 } },
            { text: "マップのどこへでも飛んでいける、絶大な存在感。", scores: { tags: ["グローバルULT"], weight: 1 } }
        ]
    },
    {
        question: "Q7: あなたのプレイスタイルは？",
        options: [
            { text: "ハイリスク・ハイリターン！派手なプレイで試合をキャリーしたい。", scores: { class: ["アサシン", "スカーミッシャー"], tags: ["スノーボール", "ダイバー"], weight: 2 } },
            { text: "ローリスク・安定重視。堅実に立ち回り、チームの勝利に貢献したい。", scores: { class: ["ワーデン", "エンチャンター", "コントロールメイジ"], tags: ["ピール性能", "ゾーンコントロール"], weight: 2 } }
        ]
    },
    {
        question: "Q8: ダメージの出し方として、どちらが好み？",
        options: [
            { text: "一瞬で敵を溶かす「バーストダメージ」の快感。", scores: { tags: ["バーストダメージ"], class: ["バースト", "アサシン"], weight: 3 } },
            { text: "継続的にダメージを出し続ける「DPS」で敵を圧倒する安定感。", scores: { tags: ["継戦能力", "通常攻撃主体"], class: ["マークスマン", "スカーミッシャー"], weight: 3 } }
        ]
    },
    {
        question: "Q9: チームへの貢献として、最も魅力的なのは？",
        options: [
            { text: "敵の意表を突く「変身」や「憑依」で戦況をかき乱す。", scores: { tags: ["変身", "ULT模倣"], weight: 2 } },
            { text: "味方を「復活」させたり「無敵」にしたりする、究極の守護。", scores: { tags: ["復活", "ピール性能"], strengths: ["味方を無敵にするULT"], weight: 2 } },
            { text: "マップをコントロールする「罠」や「オブジェクトコントロール」の戦略性。", scores: { tags: ["ゾーンコントロール", "オブジェクトコントロール"], weight: 2 } }
        ]
    }
];

// ワンポイントアドバイスのデータ（本来はchampions配列に含めるのが望ましい）
const onePointAdvices = {
    "Garen": "Eでクルクル回りながら敵にダメージを与え、体力が減った敵はRでフィニッシュ！とにかくシンプルで強力です。",
    "Annie": "スキルを4回使うと次の攻撃スキルが敵を気絶させます。Rのクマ召喚と合わせて奇襲しましょう！",
    "Ashe": "通常攻撃で敵をスロウにできるのが強み。Rの矢を遠くの敵に当てて戦闘を開始するのが強力です。",
    "MasterYi": "Qで敵の攻撃を避けながらダメージを出すのが基本。育つと誰も止められない最強の剣士になります。",
    "Lux": "長い射程からQで敵を捕まえ、EとRで大ダメージ！安全な位置から攻撃するのが得意です。",
    "Alistar": "Wで突撃してQで打ち上げるコンボが鉄板。味方を守る頑丈な盾になりましょう。",
    "Malphite": "Rの突進は集団戦をひっくり返す力があります。敵が固まっているところに突撃しましょう！",
    // 必要に応じて他のチャンピオンのアドバイスも追加
};

document.addEventListener('DOMContentLoaded', () => {

    // ==================================
    // クイズページのロジック
    // ==================================
    if (document.getElementById('quiz-container')) {

        const level = sessionStorage.getItem('quizLevel') || 'beginner';
        const quizData = level === 'intermediate' ? intermediateQuizData : beginnerQuizData;

        let currentQuestionIndex = 0;
        let userScores = {};
        const answeredQuestions = []; // 回答した質問と選択肢を保存

        const progressElement = document.getElementById('progress');
        const questionElement = document.getElementById('question');
        const optionsContainer = document.getElementById('options-container');
        const progressBarElement = document.getElementById('progress-bar'); 

        function showQuestion() {
            // プログレスバー更新
            const progressPercentage = (currentQuestionIndex / quizData.length) * 100;
            if (progressBarElement) progressBarElement.style.width = `${progressPercentage}%`;
            
            const questionData = quizData[currentQuestionIndex];
            if (progressElement) progressElement.textContent = `Q${currentQuestionIndex + 1} / ${quizData.length}`;
            questionElement.textContent = questionData.question;
            optionsContainer.innerHTML = '';

            questionData.options.forEach(option => {
                const button = document.createElement('button');
                button.innerHTML = option.text; // smallタグなども反映させるためinnerHTMLに変更
                button.className = 'option';
                button.onclick = () => selectOption(option, questionData.question);
                optionsContainer.appendChild(button);
            });
        }

        function selectOption(option, questionText) {
            // 回答を記録
            answeredQuestions.push({ question: questionText, answer: option.text, scores: option.scores });

            const weight = option.scores.weight || 1;
            const scoreCategories = ['class', 'tags', 'designTheme', 'difficulty', 'strengths', 'attackType', 'damageType'];

            scoreCategories.forEach(category => {
                if (option.scores[category]) {
                    const values = option.scores[category];
                    values.forEach(value => {
                        userScores[value] = (userScores[value] || 0) + weight;
                    });
                }
            });

            currentQuestionIndex++;

            if (currentQuestionIndex < quizData.length) {
                showQuestion();
            } else {
                // 最終問題が終わったらバーを100%に
                if (progressBarElement) progressBarElement.style.width = `100%`;
                sessionStorage.setItem('lolChampionScores', JSON.stringify(userScores));
                sessionStorage.setItem('lolAnsweredQuestions', JSON.stringify(answeredQuestions));
                window.location.href = 'result.html';
            }
        }

        showQuestion();
    }


    // ==================================
    // 結果ページのロジック
    // ==================================
    if (document.getElementById('top-champion-container')) {

        const userScores = JSON.parse(sessionStorage.getItem('lolChampionScores'));
        const answeredQuestions = JSON.parse(sessionStorage.getItem('lolAnsweredQuestions'));

        if (!userScores || !champions) {
            // データがない場合はトップページに戻す
            window.location.href = 'index.html';
            return;
        }

        let championMatchScores = champions.map(champion => {
            let score = 0;
            const categories = ['class', 'tags', 'designTheme', 'difficulty', 'strengths', 'attackType', 'damageType'];

            categories.forEach(category => {
                const championTraits = champion[category];
                if (championTraits) {
                    const traitsArray = Array.isArray(championTraits) ? championTraits : [championTraits];
                    traitsArray.forEach(trait => {
                        if (userScores[trait]) {
                            score += userScores[trait];
                        }
                    });
                }
            });

            // 役割の一致度でスコアを調整
            const userRoles = Object.keys(userScores).filter(key => ["トップ", "ジャングル", "ミッド", "ADC", "サポート"].includes(key));
            const champRoles = champion.role || [];
            if (userRoles.length > 0 && !champRoles.some(r => userRoles.includes(r))) {
                score *= 0.7; 
            }

            return { ...champion, matchScore: score };
        });

        championMatchScores.sort((a, b) => b.matchScore - a.matchScore);

        // --- 上位3チャンピオンを選出（多様性を考慮） ---
        const top3Champions = [];
        const usedChampionIds = new Set();

        if (championMatchScores.length > 0) {
            top3Champions.push(championMatchScores[0]);
            usedChampionIds.add(championMatchScores[0].id);

            // 2位以降は、1位とクラスがなるべく被らないように選出
            let tempScores = championMatchScores.slice(1).map(champ => {
                const topChampionClasses = top3Champions[0].class || [];
                const isSameClass = (champ.class || []).some(c => topChampionClasses.includes(c));
                if (isSameClass) {
                    champ.matchScore *= 0.8; // 重複ペナルティ
                }
                return champ;
            });
            
            tempScores.sort((a, b) => b.matchScore - a.matchScore);

            for (const champ of tempScores) {
                if (top3Champions.length >= 3) break;
                if (!usedChampionIds.has(champ.id)) {
                    top3Champions.push(champ);
                    usedChampionIds.add(champ.id);
                }
            }
        }
        
// --- 結果をHTMLに描画する関数 ---
    function renderChampion(champion, container, rank) {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        // --- 相性ポイント生成ロジック ---
        let affinityHTML = '';
        if (rank === 1 && answeredQuestions) {
            const topAffinities = [];
            // 回答履歴からスコアの高かった特性を抽出
            const sortedUserTraits = Object.entries(userScores).sort((a, b) => b[1] - a[1]);
            
            for (const [trait, score] of sortedUserTraits) {
                const champTraits = [...(champion.class || []), ...(champion.tags || [])];
                if (champTraits.includes(trait)) {
                    // この特性に繋がったユーザーの回答を探す
                    const sourceAnswer = answeredQuestions.find(a => a.scores.class?.includes(trait) || a.scores.tags?.includes(trait));
                    if(sourceAnswer) {
 topAffinities.push(`あなたが選んだ<strong>「${sourceAnswer.answer.replace(/<br><small>.*<\/small>/, '')}」</strong>という点は、このチャンピオンの<strong>「${trait}」</strong>という特性にマッチしています！`);
                        }
                }
                if(topAffinities.length >= 2) break; // 2つまで表示
            }
            
            if (topAffinities.length > 0) {
                affinityHTML = `<div class="affinity-points"><h4>あなたとの相性ポイント</h4><ul>${topAffinities.map(t => `<li>${t}</li>`).join('')}</ul></div>`;
            }
        }
            
            // --- その他の情報 ---
            const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
            const imageAltText = `LoLチャンピオン診断結果 ${rank}位 - ${champion.championNameJP}`;
            const roleText = `主な役割：${(champion.role || []).join(' / ')}`;
            const advice = onePointAdvices[champion.id] || champion.uniqueMechanics || "このチャンピオンはユニークな戦い方ができます。";
            const youtubeLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(champion.championNameEN + ' 使い方 ガイド')}`;

            let rankBadge = '';
            if (rank === 1) rankBadge = `<div class="rank-badge">あなたにピッタリ！</div>`;
            else if (rank === 2) rankBadge = `<div class="rank-badge">2位</div>`;
            else if (rank === 3) rankBadge = `<div class="rank-badge">3位</div>`;


            resultItem.innerHTML = `
                ${rankBadge}
                <img src="${imageUrl}" alt="${imageAltText}" class="champion-image" loading="lazy">
                <div class="champion-info">
                    <h3 class="champion-name">${champion.championNameJP} <span class="champion-title">(${champion.title})</span></h3>
                    <p class="champion-role">${roleText}</p>
                    ${affinityHTML}
                    <div class="one-point-advice">
                        <h4>初心者向けワンポイントアドバイス</h4>
                        <p>${advice}</p>
                    </div>
                    <a href="${youtubeLink}" target="_blank" rel="noopener noreferrer" class="youtube-link">
                        使い方を動画で見てみる
                    </a>
                </div>
            `;
            container.appendChild(resultItem);
        }

        // --- 描画処理の実行 ---
        const topContainer = document.getElementById('top-champion-container');
        const otherContainer = document.getElementById('other-champions-container');

        if (top3Champions[0]) {
            renderChampion(top3Champions[0], topContainer, 1);
        }
        
        if (top3Champions.length > 1) {
            const otherTitle = document.createElement('h2');
            otherTitle.className = 'other-champions-title';
            otherTitle.textContent = 'こんなチャンピオンもおすすめ！';
            otherContainer.before(otherTitle);
            
            if (top3Champions[1]) renderChampion(top3Champions[1], otherContainer, 2);
            if (top3Champions[2]) renderChampion(top3Champions[2], otherContainer, 3);
        }

        // --- シェアボタンのロジック ---
        const shareButton = document.getElementById('share-button');
        if (shareButton && top3Champions[0]) {
            shareButton.onclick = () => {
                const topChampionName = top3Champions[0].championNameJP;
                const text = `LoLチャンピオン診断の結果、私にピッタリなのは【${topChampionName}】でした！\nあなたも診断してみよう！\n\n#LoLチャンピオン診断 #リーグオブレジェンド #LoL\n`;
                const url = window.location.origin + window.location.pathname.replace('result.html', '');
                
                const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                
                window.open(twitterUrl, '_blank');
            };
        }

        // セッションストレージのデータを削除
        sessionStorage.removeItem('lolChampionScores');
        sessionStorage.removeItem('lolAnsweredQuestions');
        sessionStorage.removeItem('quizLevel');
    }
});