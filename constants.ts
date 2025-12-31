import { ReadingData, Vocabulary } from './types';

export const VOCABULARY_DATA: Vocabulary[] = [
    { word: "applicant", definition: "申請者; 應徵者", example: "There were over 50 applicants for the position." },
    { word: "asset", definition: "資產; 優點", example: "Her language skills are a great asset to the company." },
    { word: "associate", definition: "生意/業務夥伴; 關聯", example: "He is a business associate of mine." },
    { word: "beverage", definition: "飲料", example: "Hot and cold beverages will be served during the break." },
    { word: "broth", definition: "高湯", example: "Chicken broth is the base for this soup." },
    { word: "budget", definition: "預算", example: "The project was completed within budget." },
    { word: "career", definition: "職業; 生涯", example: "She plans to pursue a career in medicine." },
    { word: "cashier", definition: "收銀員", example: "Please pay the cashier at the front desk." },
    { word: "cater", definition: "承辦(宴席); 迎合", example: "The restaurant caters for weddings and parties." },
    { word: "colleague", definition: "同事", example: "I had a meeting with my colleagues this morning." },
    { word: "cuisine", definition: "料理; 烹飪", example: "We enjoyed the local Italian cuisine." },
    { word: "eligible", definition: "有資格的; 合格的", example: "Only full-time employees are eligible for the bonus." },
    { word: "entrepreneur", definition: "企業家", example: "The young entrepreneur started her own tech company." },
    { word: "gourmet", definition: "美食家; 優質的(食品)", example: "This shop sells gourmet coffee." },
    { word: "industry", definition: "工業; 產業", example: "The automotive industry is facing a crisis." },
    { word: "intern", definition: "實習生", example: "He joined the company as a summer intern." },
    { word: "inventory", definition: "存貨; 盤點", example: "The store is closed for inventory." },
    { word: "invoice", definition: "費用清單; 發票", example: "Please send the invoice to the accounting department." },
    { word: "produce", definition: "農產品 (不可數)", example: "The market sells fresh local produce." },
    { word: "purchase", definition: "採購; 購買", example: "He made a large purchase of office supplies." },
    { word: "receipt", definition: "收據; 收到", example: "Keep your receipt in case you need to return the item." },
    { word: "recipe", definition: "食譜", example: "Can you give me the recipe for this cake?" },
    { word: "refreshments", definition: "茶點", example: "Refreshments will be provided after the meeting." },
    { word: "resignation", definition: "辭職; 辭呈", example: "He handed in his letter of resignation yesterday." },
    { word: "resume", definition: "履歷 (n.); 恢復 (v.)", example: "Please submit your resume along with a cover letter." },
    { word: "retail", definition: "零售", example: "The retail price is $50." },
    { word: "sanitary", definition: "衛生的", example: "Conditions in the kitchen were not sanitary." },
    { word: "subordinate", definition: "下屬", example: "He treats his subordinates with respect." },
    { word: "superior", definition: "上司; 長官", example: "She reports directly to her superior." },
    { word: "supervisor", definition: "監督人; 主管", example: "Your supervisor will assign you tasks." },
    { word: "vacancy", definition: "空缺; 空位", example: "There is a vacancy in the sales department." }
];

export const READING_DATA: ReadingData = {
    'handout': [
        {
            id: 'h1', title: 'Q1-2 E-Ticket',
            content: `<table class="doc-table"><tr><td colspan="2"><strong>Traveler:</strong> ALAN ANDERSON</td></tr><tr><td><strong>Billing:</strong> 12 OAK ST. ATLANTA</td><td><strong>Delivery:</strong> CA 95020</td></tr><tr><td colspan="2"><strong>Passenger:</strong> ANDERSON, JILL</td></tr><tr><td colspan="2"><strong>Agency:</strong> Galileo Travel Agency</td></tr><tr><td colspan="2"><strong>Flight:</strong> UA 7031 - 10 Aug</td></tr><tr><td><strong>Fare:</strong> USD 2218.61</td><td><strong>Total:</strong> USD 2429.51</td></tr></table>`,
            questions: [
                { id: 'q-1', text: '1. Who was this ticket purchased for?', options: ['(A) Alan Anderson', '(B) Qatar Airways', '(C) Formula One spectators', '(D) Jill Anderson'], answer: 'D', exp: '<strong>(D) 正確。</strong> 機票上顯示 Passenger Name: ANDERSON, JILL。' },
                { id: 'q-2', text: '2. Which airline will the passenger fly on?', options: ['(A) Etihad Airways', '(B) Air Alaska', '(C) United Airlines', '(D) All of the above'], answer: 'C', exp: '<strong>(C) 正確。</strong> 顯示 United Airlines Inc (UA)。' }
            ]
        },
        {
            id: 'h2', title: 'Q3-4 Invoice',
            content: `<p><strong>Greenscape Landscaping</strong><br>Invoice #: 8020001544</p><table class="doc-table"><tr><th>Item</th><th>Rate</th></tr><tr><td>Pink Crab Apple Tree</td><td>100.00</td></tr><tr><td>Irrigation system maintenance</td><td>120.00</td></tr><tr><td>Fertilizer applications</td><td>100.00</td></tr><tr><td>Weed planted area</td><td>35.00</td></tr><tr><td>Trimming</td><td>55.00</td></tr><tr><td>Stone Wall</td><td>550.00</td></tr></table>`,
            questions: [
                { id: 'q-3', text: '3. Which service costs most per unit?', options: ['(A) Weeding', '(B) Trimming', '(C) Irrigation system', '(D) Fertilizer'], answer: 'C', exp: '<strong>(C) 正確。</strong> Irrigation 單價 120 最高 (Weeding 35, Trimming 55, Fertilizer 100)。' },
                { id: 'q-4', text: '4. What service does the company provide?', options: ['(A) PR', '(B) Content', '(C) Landscaping', '(D) Venues'], answer: 'C', exp: '<strong>(C) 正確。</strong> 公司名稱為 Greenscape Landscaping。' }
            ]
        },
        {
            id: 'h3', title: 'Q5-6 Text Msg',
            content: `<div class="space-y-2"><p><strong>George:</strong> Rob. You had a look at Ed's proposal? It's ambitious.</p><p><strong>Rob:</strong> I'd say so. Who's gonna tell him? He likes flashy stuff.</p><p><strong>George:</strong> Nightmare to keep cost low.</p><p><strong>Rob:</strong> He implies dislikes criticism from subordinates.</p><p><strong>George:</strong> Maybe I can say something positive about timeline...</p></div>`,
            questions: [
                { id: 'q-5', text: '5. What does Rob mean by "I\'d say so"?', options: ['(A) Not sure', '(B) Hasn\'t looked', '(C) Also worried about details', '(D) Nothing wrong'], answer: 'C', exp: '<strong>(C) 正確。</strong> 同意 proposal 太有野心(ambitious)，表示擔憂。' },
                { id: 'q-6', text: '6. George\'s relationship to Ed?', options: ['(A) Superior', '(B) Equals', '(C) Vendor', '(D) Reports to Ed'], answer: 'D', exp: '<strong>(D) 正確。</strong> 提到 Ed 不喜歡下屬 (subordinate) 的批評。' }
            ]
        },
        {
            id: 'h4', title: 'Q7-9 Chat', content: 'Online Chat Discussion content...', questions: [{id:'q-7', text:'7. Positive feedback?', options:['(A) Customizable','(B) Faster','(C) Updated','(D) Simpler'], answer:'B', exp:'Victor: not sluggish. Sophia: responsive.'}, {id:'q-8', text:'8. Why Sophia no feedback?', options:['(A) Haven\'t used much','(B) Likes all','(C) Away','(D) Changed job'], answer:'A', exp:'Spent more time with legal.'}, {id:'q-9', text:'9. "keep an ear out"?', options:['(A) Gossip','(B) Poor design','(C) Performance','(D) People won\'t talk directly'], answer:'D', exp:'Implies people might not be honest with him directly.'}]
        },
        {
            id: 'h5', title: 'Q10-12 Flyer', content: 'City Expat Network Expo content...', questions: [{id:'q-10', text:'10. Slogan?', options:['(A) CEN','(B) Let\'s meet','(C) 1+1=3','(D) Blending cultures'], answer:'D', exp:'Slogan under title.'}, {id:'q-11', text:'11. About Aleksei?', options:['(A) Outside Chicago','(B) Successful expat','(C) Manages conf','(D) Sponsor staff'], answer:'B', exp:'Russian adviser, expat expo.'}, {id:'q-12', text:'12. NOT on website?', options:['(A) Sponsor contact','(B) List of events','(C) Time','(D) Speaker profiles'], answer:'A', exp:'Sponsor contact not mentioned.'}]
        },
        {
                id: 'h6', title: 'Q13-15 Announce', content: 'East Side Stadium Bake Sale...', questions: [{id:'q-13', text:'13. Who prepared notice?', options:['(A) Players','(B) Parents','(C) Staff','(D) Coaches'], answer:'C', exp:'"East Side Stadium understands..."'}, {id:'q-14', text:'14. NOT sold?', options:['(A) Household items','(B) Desserts','(C) Drinks','(D) Homemade food'], answer:'A', exp:'Not mentioned.'}, {id:'q-15', text:'15. Advice?', options:['(A) Sell lemonade','(B) Know clientele','(C) Check taste','(D) Prep safely'], answer:'D', exp:'"Properly prepared and stored".'}]
        },
        {
            id: 'h7', title: 'Q16-18 Job Fair', content: 'Cliffside Library Job Fair...', questions: [{id:'q-16', text:'16. Seminars help?', options:['(A) Job-hunting skills','(B) Grammar','(C) Software','(D) Insurance'], answer:'A', exp:'Resume, interviewing...'}, {id:'q-17', text:'17. Counselors do?', options:['(A) Seminars','(B) One-on-one','(C) Find seminars','(D) Openings'], answer:'B', exp:'"One-on-one sessions".'}, {id:'q-18', text:'18. Cost?', options:['(A) Free','(B) $15 for seminars','(C) $15 for counselors','(D) Entry $15'], answer:'A', exp:'"Free of charge". $15 is for guide.'}]
        },
        {
            id: 'h8', title: 'Q19-21 Letter', content: 'Stella Johnson Letter...', questions: [{id:'q-19', text:'19. Degree?', options:['(A) Apple work','(B) Comm theory','(C) Confidence','(D) Skills'], answer:'B', exp:'"Provided strong background in communication theory".'}, {id:'q-20', text:'20. Assessment?', options:['(A) Lacking','(B) Best','(C) Focused','(D) Exceeded expectations'], answer:'D', exp:'"Exceeded my expectations".'}, {id:'q-21', text:'21. Hope next?', options:['(A) Raise','(B) Buy software','(C) Interview','(D) Corporate goal'], answer:'C', exp:'"Appreciate opportunity to demonstrate in an interview".'}]
        }
    ],

    'textbook-ex': [
        {
            id: 'te1', title: 'Ex 1 Restaurant',
            content: `<p><strong>Savor & Sage Reviews</strong></p><ul class="list-disc pl-5"><li><strong>Sarah:</strong> Loved ambiance & seafood pasta. Service slow. ★★★★☆</li><li><strong>John:</strong> Steak perfection, wine impressive. Mia attentive. ★★★★★</li><li><strong>Emily:</strong> Atmosphere cozy. Vegetarian limited. ★★☆☆☆</li><li><strong>Alex:</strong> Hair in salad. Manager apologized, offered discount. Satisfied with handling. ★★☆☆☆</li><li><strong>Lisa:</strong> Dessert menu highlight. Great for special occasion. ★★★★★</li></ul>`,
            questions: [
                { id: 'te-1', text: '1. What aspect is NOT complimented?', options: ['(A) Good customer service', '(B) Comfortable mood', '(C) Fine music selection', '(D) Ideal celebrating destination'], answer: 'C', exp: '<strong>(C) 正確。</strong> Ambiance (Mood), Service, Special occasion (Celebration) 都有被稱讚。文中未提及音樂 (Music)。' },
                { id: 'te-2', text: '2. What will Savor & Sage most likely do next?', options: ['(A) Expand vegan options', '(B) Improve customer service', '(C) Revamp dessert menu', '(D) Train its employees'], answer: 'A', exp: '<strong>(A) 正確。</strong> Emily 抱怨 "Vegetarian options were limited" (素食選擇有限)，這是具體的產品改進方向。Alex 的服務問題已解決，Sarah 雖嫌慢但那是忙碌夜晚。' },
                { id: 'te-3', text: '3. What can be inferred about Mr. Lewis (Alex)?', options: ['(A) Not order salad again', '(B) Use coupon next time', '(C) Dislike service', '(D) Not recommend'], answer: 'B', exp: '<strong>(B) 正確。</strong> 他提到 "offered a 20% discount for my next visit" 且 "Satisfied with how they handled this"，暗示他會再訪並使用折扣。' }
            ]
        },
        {
            id: 'te2', title: 'Ex 2 Timetable',
            content: `<p><strong>Train Timetable Revision</strong><br>Effective Dec 15, 2023</p><table class="doc-table"><tr><th>Train</th><th>Old Time</th><th>New Time</th></tr><tr><td>A101</td><td>06:45 a.m.</td><td>06:30 a.m.</td></tr><tr><td>B205</td><td>11:00 p.m.</td><td>10:45 p.m.</td></tr><tr><td>C302</td><td>-</td><td>Sat Additional</td></tr></table><p>Key Changes: A101 leaves earlier. B205 departs 15 mins earlier.</p>`,
            questions: [
                { id: 'te-4', text: '1. Where was this notice probably published?', options: ['(A) Railway website', '(B) Airport', '(C) Travel magazine', '(D) Local newspaper'], answer: 'A', exp: '<strong>(A) 正確。</strong> 文末提到 "visit our website"，且內容為具體的時刻表更動通知，最可能出現在官方網站或車站公告。' },
                { id: 'te-5', text: '2. What will the passengers probably do?', options: ['(A) Seek other transport', '(B) Adjust weekend plans', '(C) Anticipate longer wait', '(D) Begin morning journey 15 mins earlier'], answer: 'D', exp: '<strong>(D) 正確。</strong> A101 (早班車) 從 6:45 提早到 6:30，所以乘客需要提早 15 分鐘出發。' },
                { id: 'te-6', text: '3. "Patronage" closest meaning?', options: ['(A) support', '(B) direction', '(C) sponsorship', '(D) ownership'], answer: 'A', exp: '<strong>(A) 正確。</strong> "Thank you for your continued patronage" 意指感謝您的惠顧/支持 (support)。' }
            ]
        },
        {
            id: 'te3', title: 'Ex 3 Text Msg',
            content: `<p><strong>Mike:</strong> Sorry I'll be late. Family emergency.</p><p><strong>Sarah:</strong> Oh no! Is everything okay?</p><p><strong>Mike:</strong> Yeah, fine. Need to take care of things before joining.</p><p><strong>Sarah:</strong> No worries. We can reschedule if necessary.</p>`,
            questions: [
                { id: 'te-7', text: '1. What does Ms. Kim offer to do?', options: ['(A) Join later', '(B) End early', '(C) Cancel', '(D) Rearrange the meeting time'], answer: 'D', exp: '<strong>(D) 正確。</strong> Sarah 說 "We can reschedule if necessary" (如果有需要我們可以改期)。' },
                { id: 'te-8', text: '2. What does Mike mean by "take care of some things"?', options: ['(A) Convey reason for being unpunctual', '(B) Decline participation', '(C) Rearrange timing', '(D) Request help'], answer: 'A', exp: '<strong>(A) 正確。</strong> 他是在解釋為什麼會遲到 (unpunctual)，因為有急事要處理。' }
            ]
        },
        {
            id: 'te4', title: 'Ex 4 Discussion',
            content: `<p><strong>Tom:</strong> New project requires lot of resources. How manage?</p><p><strong>Sara:</strong> Hire more staff?</p><p><strong>Mike:</strong> Good idea, but expensive. Prioritize tasks?</p><p><strong>Sara:</strong> Good point. Maybe outsource? Or automate?</p><p><strong>Tom:</strong> Streamline processes.</p><p><strong>Mike:</strong> Need to do research.</p>`,
            questions: [
                { id: 'te-9', text: '1. Concern about hiring new staff?', options: ['(A) Skills', '(B) Cost', '(C) Overwhelmed', '(D) Time'], answer: 'B', exp: '<strong>(B) 正確。</strong> Mike 說 "it could be expensive"。' },
                { id: 'te-10', text: '2. Sara says "That\'s a good point" to?', options: ['(A) Acknowledges suggestion valid', '(B) Impractical', '(C) Too costly', '(D) Task-focused merit'], answer: 'A', exp: '<strong>(A) 正確。</strong> 她認同 Mike 的優先順序建議。' },
                { id: 'te-11', text: '3. NOT a suggestion?', options: ['(A) Outsourcing', '(B) Daily work routine', '(C) Focus on essential', '(D) Streamline'], answer: 'B', exp: '<strong>(B) 正確。</strong> 文中提到 Outsourcing, Prioritizing (Essential), Streamline, Automation，未提 Daily work routine。' },
                { id: 'te-12', text: '4. What to do next?', options: ['(A) Increase budget', '(B) Change vendors', '(C) Explore more options', '(D) Contact supervisor'], answer: 'C', exp: '<strong>(C) 正確。</strong> Mike 最後說 "We\'ll need to do some research and see what\'s available"，意即探索更多選項。' }
            ]
        },
        {
            id: 'te5', title: 'Ex 5 Email',
            content: `<p><strong>Subject:</strong> "Travel Buddy": Personalized Travel Experience</p><p>Brand new service... "Travel Buddy"... personalized itinerary.</p><p>Free trial if you book in the next month. Mention the "Travel Buddy" offer.</p>`,
            questions: [
                { id: 'te-13', text: '1. Purpose of email?', options: ['(A) Price increase', '(B) Introduce special service', '(C) Request feedback', '(D) Inform change'], answer: 'B', exp: '<strong>(B) 正確。</strong> 介紹新服務 "Introducing Travel Buddy"。' },
                { id: 'te-14', text: '2. Who creates itineraries?', options: ['(A) Specialists', '(B) Hotel clerks', '(C) Customers', '(D) Airline staff'], answer: 'A', exp: '<strong>(A) 正確。</strong> 文中說 "Our team of experienced travel experts" (旅遊專家)。' },
                { id: 'te-15', text: '3. How to get free trial?', options: ['(A) Pay fee', '(B) Refer to offer when booking', '(C) Write feedback', '(D) Visit HQ'], answer: 'B', exp: '<strong>(B) 正確。</strong> 文中說 "Just mention the \'Travel Buddy\' offer when you book"。' }
            ]
        },
        {
            id: 'te6', title: 'Ex 6 Job Ad',
            content: `<p><strong>Job Alert: Front-End Developer</strong></p><p>Dynamic Web Designs looking for passionate Front-End Developers. Convert designs into flawless websites.</p><p>Showcasing a portfolio... We value skill and keen eye over formal education.</p>`,
            questions: [
                { id: 'te-16', text: '1. Intended for?', options: ['(A) Artists', '(B) Consultants', '(C) Designers', '(D) Interface specialists'], answer: 'D', exp: '<strong>(D) 正確。</strong> Front-End Developer 負責網站介面，屬於 Interface specialists。' },
                { id: 'te-17', text: '2. Inferred about ideal candidate?', options: ['(A) Web languages', '(B) Passion for user-centric', '(C) Work experience', '(D) Master\'s degree'], answer: 'B', exp: '<strong>(B) 正確。</strong> 文中強調 "invites passionate... Developers", "enhancing the interface... optimal experience"。' },
                { id: 'te-18', text: '3. "Keen" meaning?', options: ['(A) enthusiastic', '(B) interested', '(C) attentive', '(D) perceptive'], answer: 'D', exp: '<strong>(D) 正確。</strong> Keen eye for design 指敏銳的(perceptive)觀察力。' }
            ]
        },
        {
            id: 'te7', title: 'Ex 7 Notice',
            content: `<p><strong>Notice: 15th Annual Sports Extravaganza</strong></p><p>June 10-12. Central Park Stadium. Tickets $10/$25.</p><p>20 sports including soccer, basketball, tennis, volleyball. Family zones. Mini-marathon.</p><p>Visit website for schedules.</p>`,
            questions: [
                { id: 'te-19', text: '1. Purpose?', options: ['(A) New stadium', '(B) Upcoming event', '(C) Roadworks', '(D) Rules'], answer: 'B', exp: '<strong>(B) 正確。</strong> 公告即將舉辦的運動盛會。' },
                { id: 'te-20', text: '2. NOT mentioned feature?', options: ['(A) Nutrition seminar', '(B) Running event', '(C) Family activities', '(D) Sports matches'], answer: 'A', exp: '<strong>(A) 正確。</strong> 提到馬拉松(Running)、家庭區(Family)、球賽(Matches)，未提營養講座。' },
                { id: 'te-21', text: '3. Why check website?', options: ['(A) Marathon start', '(B) Stadium open', '(C) Sports list', '(D) Timetable'], answer: 'D', exp: '<strong>(D) 正確。</strong> 文中說 "Visit... for schedules" (時間表/Timetable)。' }
            ]
        },
        {
            id: 'te8', title: 'Ex 8 Letter',
            content: `<p>To whom it may concern,</p><p>Recommend Daniel Shaw for Student Volunteer Program. Joined 2 years ago. [1]</p><p>Leader, interpersonal skills. [2]</p><p>Inspired young people. [3] [4]</p>`,
            questions: [
                { id: 'te-22', text: '1. Why sent letter?', options: ['(A) Apply position', '(B) Give reference', '(C) Sign up', '(D) Feedback'], answer: 'B', exp: '<strong>(B) 正確。</strong> 這是一封推薦信 (Recommendation letter/Reference)。' },
                { id: 'te-23', text: '2. Applying for?', options: ['(A) Scholarship', '(B) Leadership program', '(C) Club', '(D) Higher ed'], answer: 'B', exp: '<strong>(B) 正確。</strong> 申請 "Student Volunteer Program"，結合其領導經驗，最接近 Leadership program。' },
                { id: 'te-24', text: '3. Insert "I have been Daniel\'s mentor..."?', options: ['(A) [1]', '(B) [2]', '(C) [3]', '(D) [4]'], answer: 'A', exp: '<strong>(A) 正確。</strong> 放在 [1] 最合適，緊接在介紹學生加入機構之後，說明兩人的關係與認識時間。' }
            ]
        },
        {
            id: 'te9', title: 'Ex 9 Email',
            content: `<p>Hi Dr. Cameron,</p><p>Medical conference in NY next month. I cannot attend. Cardiovascular health.</p><p>I'd like you to attend in my place. I paid. Please share insights.</p>`,
            questions: [
                    { id: 'te-25', text: '1. Purpose?', options: ['(A) Invite to event', '(B) Request info', '(C) Ask advice', '(D) Share insights'], answer: 'A', exp: '<strong>(A) 正確。</strong> 邀請 Dr. Cameron 代替她參加會議。' },
                    { id: 'te-26', text: '2. Request?', options: ['(A) Register', '(B) Purchase', '(C) Give ride', '(D) Share knowledge'], answer: 'D', exp: '<strong>(D) 正確。</strong> "Please share any important insights you learn"。' }
            ]
        }
    ],

    'textbook-prac': [
        {
            id: 'tp1', title: 'Set 1: Layoffs',
            content: `<p><strong>David:</strong> Confirmed 15% staff reduction.</p><p><strong>Carol:</strong> Distressing. Support?</p><p><strong>David:</strong> Severance strategy, career counseling.</p><p><strong>Carol:</strong> Our sector affected?</p><p><strong>David:</strong> Seems inevitable.</p>`,
            questions: [
                { id: 'tp-1', text: '1. "Seems inevitable" means?', options: ['(A) Reductions expected', '(B) Avoid cuts', '(C) Hiring', '(D) Completed'], answer: 'A', exp: '<strong>(A) 正確。</strong> Inevitable 意為無法避免，指裁員勢必會影響到他們部門。' },
                { id: 'tp-2', text: '2. How to act?', options: ['(A) Handover', '(B) Continue as usual', '(C) Seek job', '(D) Train'], answer: 'B', exp: '<strong>(B) 正確。</strong> David 說 "Maintain business as usual for now"。' }
            ]
        },
        {
            id: 'tp2', title: 'Set 2: Rec Letter',
            content: `<p>Recommend Thomas Green for Regional Director. Worked expanding tech services in Europe and Asia.</p><p>Innovative, empathetic, understands cultures.</p>`,
            questions: [
                { id: 'tp-3', text: '3. Contribution?', options: ['(A) Broadened intl reach', '(B) Tech progress', '(C) New products', '(D) Financial'], answer: 'A', exp: '<strong>(A) 正確。</strong> "expanding our tech services in Europe and Asia"。' },
                { id: 'tp-4', text: '4. Perspective on adaptability?', options: ['(A) Familiar only', '(B) Excel in different cultures', '(C) Question flexibility', '(D) Independent'], answer: 'B', exp: '<strong>(B) 正確。</strong> "understanding of different cultures are assets"。' },
                { id: 'tp-5', text: '5. Insert "His inspiring work..."?', options: ['(A) [1]', '(B) [2]', '(C) [3]', '(D) [4]'], answer: 'D', exp: '<strong>(D) 正確。</strong> 放在 [4] 結尾處，總結並展望他在新公司的成就。' }
            ]
        },
        {
            id: 'tp3', title: 'Set 3: FitZone Gym',
            content: `<p>FitZone Gym New Program. 12 weeks. Group setting. Nutrition counseling.</p><p>Classes 2x week (Mon closed).</p>`,
            questions: [
                { id: 'tp-6', text: '6. Offer besides gear?', options: ['(A) Entertainment', '(B) Delivery', '(C) Experts', '(D) Pool'], answer: 'C', exp: '<strong>(C) 正確。</strong> 指 Experienced trainers 和 Nutrition counseling。' },
                { id: 'tp-7', text: '7. Days?', options: ['(A) Mon/Sun', '(B) Mon/Tue/Fri', '(C) Tue/Wed/Thu', '(D) Wed/Sat'], answer: 'C', exp: '<strong>(C) 正確。</strong> 週一休館，週間 (Weekdays) 至少兩次。選項中只有 (C) 全是週間且避開週一。' },
                { id: 'tp-8', text: '8. Purpose?', options: ['(A) Nutrition', '(B) Group success', '(C) Entertainment', '(D) Equipment'], answer: 'B', exp: '<strong>(B) 正確。</strong> "supportive and motivational group setting"。' },
                { id: 'tp-9', text: '9. Indicated?', options: ['(A) Free nutrition', '(B) Personalized courses', '(C) Relocated', '(D) Environmental'], answer: 'B', exp: '<strong>(B) 正確。</strong> 文中提到 "Each class will be tailored (量身訂做/Personalized) to meet the needs"。' }
            ]
        },
        {
            id: 'tp4', title: 'Set 4: Flight Delay',
            content: `<p>Delay flight LA to Paris. Unexpected mechanical issue.</p><p>We will keep you informed.</p>`,
            questions: [
                { id: 'tp-10', text: '10. Why delayed?', options: ['(A) Weather', '(B) Technical malfunction', '(C) Air traffic', '(D) Pilot'], answer: 'B', exp: '<strong>(B) 正確。</strong> "Mechanical issue" 即機械/技術故障。' },
                { id: 'tp-11', text: '11. How informed?', options: ['(A) Agency provides info', '(B) Airport', '(C) Website', '(D) Email'], answer: 'A', exp: '<strong>(A) 正確。</strong> "We (Agency) will keep you informed"。' }
            ]
        },
        {
            id: 'tp5', title: 'Set 5: Brocade Arcade',
            content: `<p>Strict rules. Brocade operates below standards. Localization issue.</p><p>Customers play blind, exposing money to risk.</p>`,
            questions: [
                { id: 'tp-12', text: '12. Regulator\'s issue?', options: ['(A) Against law', '(B) No license', '(C) Not followed recommendations', '(D) Pop culture'], answer: 'C', exp: '<strong>(C) 正確。</strong> "Not complied with" regulations/standards (未遵守規範)。' },
                { id: 'tp-13', text: '13. Customer concern?', options: ['(A) Transparency', '(B) Language only', '(C) Certainty charges', '(D) Reputation'], answer: 'A', exp: '<strong>(A) 正確。</strong> "Play blind" 表示資訊不透明，"Understand licensing terms" 涉及透明度。' }
            ]
        },
        {
            id: 'tp6', title: 'Set 6: Blender',
            content: `<p>Complaint SmartMix Blender. Stopped working in 2 weeks.</p><p>Return so we can investigate fault.</p>`,
            questions: [
                    { id: 'tp-14', text: '14. Problem?', options: ['(A) Constant problems', '(B) Stopped working quickly', '(C) Not well', '(D) Maintenance'], answer: 'B', exp: '<strong>(B) 正確。</strong> "Stopped working within two weeks"。' },
                    { id: 'tp-15', text: '15. With broken blender?', options: ['(A) Display', '(B) Analyze and fix', '(C) Internal use', '(D) Donate'], answer: 'B', exp: '<strong>(B) 正確。</strong> "Investigate the fault and prevent future occurrences"。' }
            ]
        },
        {
            id: 'tp7', title: 'Set 7: Marketing',
            content: `<p>Presentation on consumer trends. AR campaigns. Gen Z.</p><p>Metropolitan Hall known for tech setups.</p>`,
            questions: [
                { id: 'tp-16', text: '16. Main topic?', options: ['(A) Preparing presentation', '(B) Tech roles', '(C) Symposium setup', '(D) Hall tech'], answer: 'A', exp: '<strong>(A) 正確。</strong> 討論重點在於準備即將到來的演講內容與方式。' },
                { id: 'tp-17', text: '17. Tech theme?', options: ['(A) VR', '(B) Digital ads', '(C) AR', '(D) AI'], answer: 'C', exp: '<strong>(C) 正確。</strong> Augmented Reality (AR)。' },
                { id: 'tp-18', text: '18. Hall implied?', options: ['(A) Big events', '(B) Far', '(C) Advanced tech', '(D) Marketing'], answer: 'C', exp: '<strong>(C) 正確。</strong> "Known for its tech setups"。' },
                { id: 'tp-19', text: '19. "Forward-thinking"?', options: ['(A) Plans ahead', '(B) Skills', '(C) Manages', '(D) Trends'], answer: 'A', exp: '<strong>(A) 正確。</strong> Amelia 提議提前聯繫技術團隊，展現了未雨綢繆 (Plans ahead)。' }
            ]
        },
        {
            id: 'tp8', title: 'Set 8: Renovation',
            content: `<p>Global Tech Renovation. Dec 1 - Jun 30.</p><p>Visit intranet page for updates.</p>`,
            questions: [
                { id: 'tp-20', text: '20. Where posted?', options: ['(A) Lounge', '(B) Conference', '(C) Intranet', '(D) Garage'], answer: 'C', exp: '<strong>(C) 正確。</strong> 文末提到 "visit our intranet page"。' },
                { id: 'tp-21', text: '21. "Slated"?', options: ['(A) Enhanced', '(B) Scheduled', '(C) Limited', '(D) Impacted'], answer: 'B', exp: '<strong>(B) 正確。</strong> Slated to finish 意指 "預定/排定" (Scheduled)。' },
                { id: 'tp-22', text: '22. Aim?', options: ['(A) Meetings', '(B) Reducing impact', '(C) Facilities', '(D) Space'], answer: 'B', exp: '<strong>(B) 正確。</strong> "Minimizing disruptions" (減少干擾/影響)。' }
            ]
        },
        {
            id: 'tp9', title: 'Set 9: Survey',
            content: `<p>Trip Review Survey. Feedback helps refine travel experiences.</p><p>Handling issues.</p>`,
            questions: [
                { id: 'tp-23', text: '23. Purpose?', options: ['(A) Evaluate guide', '(B) Learn likes', '(C) Make better', '(D) Check spots'], answer: 'C', exp: '<strong>(C) 正確。</strong> "Refine our travel experiences", "Enhancing our services"。' },
                { id: 'tp-24', text: '24. NOT measured?', options: ['(A) Variety of destinations', '(B) Comfort', '(C) Lodging', '(D) Guide'], answer: 'A', exp: '<strong>(A) 正確。</strong> 調查表中有 Comfort, Accommodations (Lodging), Tour guide，未見 Destination variety。' },
                { id: 'tp-25', text: '25. Inferred?', options: ['(A) No comms', '(B) Resolve clear', '(C) Future only', '(D) Value feedback'], answer: 'D', exp: '<strong>(D) 正確。</strong> "Your input is crucial", "Dedicated to making travels unforgettable"。' }
            ]
        }
    ]
};