// simple appear on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('appear'); io.unobserve(e.target) } })
    }, { threshold: .12 });
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

    // mobile menu
    function toggleMobile() {
      const menu = document.getElementById('mobileMenu');
      const body = document.body;

      if (menu.style.display === 'none' || !menu.style.display) {
        menu.style.display = 'block';
        menu.classList.add('mobile-menu-enter');
        body.classList.add('menu-open');
      } else {
        menu.style.display = 'none';
        menu.classList.remove('mobile-menu-enter');
        body.classList.remove('menu-open');
      }
    }

    // fake submit
    function submitLead(ev) {
      ev.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      alert(`${i18n('alerts.thanks')} ${name}! ${i18n('alerts.contact_via')} ${email}${phone ? ' / ' + phone : ''}.`);
      ev.target.reset();
      return false;
    }

    // year
    document.getElementById('y').textContent = new Date().getFullYear();

    // =========================
    // I18N: dữ liệu & tiện ích
    // =========================
    const LANG_KEY = 'musen_lang';

    const dict = {
      vi: {
        // ARIA
        'nav.home_aria': 'Trang chủ',
        'nav.main_aria': 'Điều hướng chính',
        'nav.open_menu_aria': 'Mở menu',
        // NAV
        'nav.services': 'Dịch vụ',
        'nav.solutions': 'Giải pháp',
        'nav.products': 'Sản phẩm',
        'nav.projects': 'Dự án',
        'nav.contact': 'Liên hệ',
        'nav.consult': 'Nhận tư vấn',
        'nav.login': 'Đăng nhập',
        // HERO
        'hero.eyebrow': 'Tăng tốc chuyển đổi số',
        'hero.title_html': 'Giải pháp <span style="color:var(--brand)">IoT</span> & <span style="color:var(--accent)">Tự động hoá</span><br>cho Doanh nghiệp & Nông nghiệp',
        'hero.subtitle': 'Thiết kế – Sản xuất – Tích hợp hệ thống: gateway, cảm biến, cloud, dashboard, SCADA, AIoT. Triển khai nhanh, chi phí tối ưu, bảo hành tận nơi.',
        'hero.cta_primary': 'Đặt cuộc hẹn',
        'hero.cta_secondary': 'Xem dự án',
        'hero.status.gateway': 'Gateway • Online',
        'hero.status.devices': '24 thiết bị',
        'hero.cards.humidity.label': 'Độ ẩm',
        'hero.cards.humidity.value': '62%',
        'hero.cards.temp.label': 'Nhiệt',
        'hero.cards.temp.value': '29.6°C',
        'hero.cards.ph.label': 'pH',
        'hero.cards.ph.value': '7.4',
        // SERVICES
        'services.title': 'Dịch vụ cốt lõi',
        'services.subtitle': 'Từ ý tưởng → nguyên mẫu → sản xuất → vận hành',
        'services.items.hw.title': 'Thiết kế phần cứng',
        'services.items.hw.desc': 'ESP32/STM32, LoRa/4G/5G, NB-IoT, RS485, Modbus, CAN, đo lường công nghiệp.',
        'services.items.edge.title': 'AIoT & Edge',
        'services.items.edge.desc': 'Nhận dạng hình ảnh, phát hiện người/xe, giám sát an ninh, phân tích biên.',
        'services.items.cloud.title': 'Cloud & Dashboard',
        'services.items.cloud.desc': 'MQTT/HTTP, dữ liệu thời gian thực, cảnh báo, báo cáo, SCADA web.',
        'services.items.integr.title': 'Tích hợp hệ thống',
        'services.items.integr.desc': 'PLC/SCADA, BMS/EMS, toà nhà thông minh, cổng kết nối đa giao thức.',
        'services.items.proto.title': 'Prototype nhanh',
        'services.items.proto.desc': 'In 3D, CNC, PCB nhanh, thử nghiệm hiện trường, tinh chỉnh theo yêu cầu.',
        'services.items.sla.title': 'Bảo trì & SLA',
        'services.items.sla.desc': 'Giám sát từ xa, cập nhật OTA, bảo hành tận nơi, cam kết dịch vụ.',
        // SOLUTIONS
        'solutions.title': 'Giải pháp tiêu biểu',
        'solutions.subtitle': 'Nông nghiệp thông minh • Toà nhà • Quan trắc môi trường • Công nghiệp',
        'solutions.agri.title': 'Nông nghiệp thông minh',
        'solutions.agri.desc': 'Giám sát pH/DO/EC, nhiệt độ, độ ẩm, mức nước; điều khiển bơm/quạt/van tự động; dashboard & cảnh báo SMS/Zalo.',
        'solutions.agri.tiles.farm': 'Trại tôm',
        'solutions.agri.tiles.farm_val': '42 ao',
        'solutions.agri.tiles.greenhouse': 'Nhà kính',
        'solutions.agri.tiles.greenhouse_val': '6 khu',
        'solutions.agri.tiles.drip': 'Tưới nhỏ giọt',
        'solutions.agri.tiles.drip_val': 'IoT',
        'solutions.building.title': 'Toà nhà & Năng lượng',
        'solutions.building.li1': 'BMS/EMS, đo đếm điện đa kênh, tối ưu tiêu thụ.',
        'solutions.building.li2': 'Giám sát máy phát, ATS, cảnh báo sự cố.',
        'solutions.building.li3': 'Giải pháp an ninh, camera AI nhận diện.',
        // PRODUCTS
        'products.title': 'Sản phẩm',
        'products.catalog': 'Tải catalogue',
        'products.gw.title': 'SP1',
        'products.gw.desc': 'Gateway IoT đa giao thức (MQTT/HTTP/Modbus), 4G/LTE, Wi-Fi, Ethernet, nguồn 9-36VDC.',
        'products.gw.img': 'Ảnh minh hoạ',
        'products.gw.tag': 'v1.2',
        'products.node.title': 'ECO-Node',
        'products.node.desc': 'Cảm biến không dây LoRa/NB-IoT: nhiệt ẩm, pH, DO, mức nước, dòng điện, rung.',
        'products.node.img': 'Ảnh minh hoạ',
        'products.node.tag': 'IP65',
        'products.vision.title': 'ECO-Vision',
        'products.vision.desc': 'Hệ thống camera AI nhận diện người/xe, theo dõi vùng cấm, đếm lưu lượng.',
        'products.vision.img': 'Ảnh minh hoạ',
        'products.vision.tag': 'AIoT',
        // PROJECTS
        'projects.title': 'Dự án đã triển khai',
        'projects.subtitle': 'Một vài con số biết nói',
        'projects.stats.sites.value': '120+',
        'projects.stats.sites.label': 'Site IoT đang hoạt động',
        'projects.stats.sectors.value': '5+',
        'projects.stats.sectors.label': 'Lĩnh vực công nghiệp',
        'projects.stats.energy.value': '30%',
        'projects.stats.energy.label': 'Tiết kiệm năng lượng TB',
        'projects.stats.monitor.value': '24/7',
        'projects.stats.monitor.label': 'Giám sát & cảnh báo',
        'projects.clients.logo1': 'Logo 1',
        'projects.clients.logo2': 'Logo 2',
        'projects.clients.logo3': 'Logo 3',
        'projects.clients.logo4': 'Logo 4',
        'projects.clients.logo5': 'Logo 5',
        'projects.clients.logo6': 'Logo 6',
        // CONTACT
        'contact.title': 'Cần tư vấn giải pháp cho dự án của bạn?',
        'contact.subtitle': 'Gửi yêu cầu – Chúng tôi phản hồi trong 24 giờ.',
        'contact.form.name': 'Họ tên',
        'contact.form.name_aria': 'Họ tên',
        'contact.form.email': 'Email',
        'contact.form.email_aria': 'Email',
        'contact.form.phone': 'Số điện thoại (tuỳ chọn)',
        'contact.form.phone_aria': 'Số điện thoại',
        'contact.form.submit': 'Gửi',
        // FOOTER
        'footer.about': 'Giải pháp IoT – từ thiết bị đến nền tảng. Đồng hành cùng doanh nghiệp Việt trong hành trình chuyển đổi số.',
        'footer.company.title': 'Về chúng tôi',
        'footer.company.about': 'Giới thiệu',
        'footer.company.jobs': 'Tuyển dụng',
        'footer.company.terms': 'Chính sách & điều khoản',
        'footer.contact.title': 'Liên hệ',
        'footer.contact.hotline': 'Hotline: 0338812063/Mr.Hưng',
        'footer.contact.email': 'Email: musenplus2@gmail.com',
        'footer.contact.address': '📍 51/6/6 Nguyễn Văn Giáp, Phường Bình Trưng Đông, Thành phố Thủ Đức,Thành phố Hồ Chí Minh, Việt Nam.',
        'footer.newsletter.title': 'Nhận bản tin',
        'footer.newsletter.placeholder': 'Email của bạn',
        'footer.newsletter.cta': 'Đăng ký',
        'footer.rights': 'All rights reserved.',
        'footer.company': 'Công ty',
        // Alerts
        'alerts.thanks': 'Cảm ơn',
        'alerts.contact_via': 'Chúng tôi sẽ liên hệ qua',
        'footer.copyright_prefix': '©',
      },

      en: {
        // ARIA
        'nav.home_aria': 'Home',
        'nav.main_aria': 'Primary navigation',
        'nav.open_menu_aria': 'Open menu',
        // NAV
        'nav.services': 'Services',
        'nav.solutions': 'Solutions',
        'nav.products': 'Products',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.consult': 'Consultation',
        'nav.login': 'Login',
        // HERO
        'hero.eyebrow': 'Accelerate your digital transformation',
        'hero.title_html': 'IoT <span style="color:var(--brand)">Solutions</span> & <span style="color:var(--accent)">Automation</span><br>for Enterprises & Agriculture',
        'hero.subtitle': 'Design – Manufacturing – Systems Integration: gateways, sensors, cloud, dashboards, SCADA, AIoT. Fast deployment, optimized cost, on-site warranty.',
        'hero.cta_primary': 'Book a meeting',
        'hero.cta_secondary': 'View projects',
        'hero.status.gateway': 'Gateway • Online',
        'hero.status.devices': '24 devices',
        'hero.cards.humidity.label': 'Humidity',
        'hero.cards.humidity.value': '62%',
        'hero.cards.temp.label': 'Temp',
        'hero.cards.temp.value': '29.6°C',
        'hero.cards.ph.label': 'pH',
        'hero.cards.ph.value': '7.4',
        // SERVICES
        'services.title': 'Core Services',
        'services.subtitle': 'From idea → prototype → production → operations',
        'services.items.hw.title': 'Hardware Design',
        'services.items.hw.desc': 'ESP32/STM32, LoRa/4G/5G, NB-IoT, RS485, Modbus, CAN, industrial measurements.',
        'services.items.edge.title': 'AIoT & Edge',
        'services.items.edge.desc': 'Computer vision, people/vehicle detection, security monitoring, edge analytics.',
        'services.items.cloud.title': 'Cloud & Dashboards',
        'services.items.cloud.desc': 'MQTT/HTTP, real-time data, alerts, reporting, web SCADA.',
        'services.items.integr.title': 'Systems Integration',
        'services.items.integr.desc': 'PLC/SCADA, BMS/EMS, smart buildings, multi-protocol gateways.',
        'services.items.proto.title': 'Rapid Prototyping',
        'services.items.proto.desc': '3D printing, CNC, quick-turn PCBs, field testing, tailored tuning.',
        'services.items.sla.title': 'Maintenance & SLAs',
        'services.items.sla.desc': 'Remote monitoring, OTA updates, on-site warranty, service commitments.',
        // SOLUTIONS
        'solutions.title': 'Featured Solutions',
        'solutions.subtitle': 'Smart Agriculture • Buildings • Environmental Monitoring • Industry',
        'solutions.agri.title': 'Smart Agriculture',
        'solutions.agri.desc': 'Monitor pH/DO/EC, temperature, humidity, water level; automate pumps/fans/valves; dashboard & SMS/Zalo alerts.',
        'solutions.agri.tiles.farm': 'Shrimp farms',
        'solutions.agri.tiles.farm_val': '42 ponds',
        'solutions.agri.tiles.greenhouse': 'Greenhouses',
        'solutions.agri.tiles.greenhouse_val': '6 zones',
        'solutions.agri.tiles.drip': 'Drip irrigation',
        'solutions.agri.tiles.drip_val': 'IoT',
        'solutions.building.title': 'Buildings & Energy',
        'solutions.building.li1': 'BMS/EMS, multi-channel metering, consumption optimization.',
        'solutions.building.li2': 'Genset monitoring, ATS, incident alerts.',
        'solutions.building.li3': 'Security solutions, AI camera recognition.',
        // PRODUCTS
        'products.title': 'Products',
        'products.catalog': 'Download catalog',
        'products.gw.title': 'SP1',
        'products.gw.desc': 'Multi-protocol IoT gateway (MQTT/HTTP/Modbus), 4G/LTE, Wi-Fi, Ethernet, 9–36VDC supply.',
        'products.gw.img': 'Illustration',
        'products.gw.tag': 'v1.2',
        'products.node.title': 'ECO-Node',
        'products.node.desc': 'Wireless LoRa/NB-IoT sensors: temp/humidity, pH, DO, water level, current, vibration.',
        'products.node.img': 'Illustration',
        'products.node.tag': 'IP65',
        'products.vision.title': 'ECO-Vision',
        'products.vision.desc': 'AI camera system for people/vehicle recognition, restricted zones, traffic counting.',
        'products.vision.img': 'Illustration',
        'products.vision.tag': 'AIoT',
        // PROJECTS
        'projects.title': 'Delivered Projects',
        'projects.subtitle': 'A few numbers that matter',
        'projects.stats.sites.value': '120+',
        'projects.stats.sites.label': 'Active IoT sites',
        'projects.stats.sectors.value': '5+',
        'projects.stats.sectors.label': 'Industrial sectors',
        'projects.stats.energy.value': '30%',
        'projects.stats.energy.label': 'Avg. energy saving',
        'projects.stats.monitor.value': '24/7',
        'projects.stats.monitor.label': 'Monitoring & alerts',
        'projects.clients.logo1': 'Logo 1',
        'projects.clients.logo2': 'Logo 2',
        'projects.clients.logo3': 'Logo 3',
        'projects.clients.logo4': 'Logo 4',
        'projects.clients.logo5': 'Logo 5',
        'projects.clients.logo6': 'Logo 6',
        // CONTACT
        'contact.title': 'Need expert guidance for your project?',
        'contact.subtitle': 'Send your request — we respond within 24 hours.',
        'contact.form.name': 'Full name',
        'contact.form.name_aria': 'Full name',
        'contact.form.email': 'Email',
        'contact.form.email_aria': 'Email',
        'contact.form.phone': 'Phone (optional)',
        'contact.form.phone_aria': 'Phone number',
        'contact.form.submit': 'Send',
        // FOOTER
        'footer.about': 'End-to-end IoT solutions — from devices to platforms. Partnering with Vietnamese businesses on their digital journey.',
        'footer.company.title': 'Company',
        'footer.company.about': 'About us',
        'footer.company.jobs': 'Careers',
        'footer.company.terms': 'Policies & Terms',
        'footer.contact.title': 'Contact',
        'footer.contact.hotline': 'Hotline: 0338812063/Mr. Hung',
        'footer.contact.email': 'Email: musenplus2@gmail.com',
        'footer.contact.address': '📍 51/6/6 Nguyen Van Giap, Binh Trung Dong Ward, Thu Duc City, Ho Chi Minh City, Vietnam.',
        'footer.newsletter.title': 'Newsletter',
        'footer.newsletter.placeholder': 'Your email',
        'footer.newsletter.cta': 'Subscribe',
        'footer.rights': 'All rights reserved.',
        'footer.company': 'Company',
        // Alerts
        'alerts.thanks': 'Thank you',
        'alerts.contact_via': 'We will contact you via',
        'footer.copyright_prefix': '©',
      },

      jp: {
        // ARIA
        'nav.home_aria': 'ホーム',
        'nav.main_aria': 'メインナビゲーション',
        'nav.open_menu_aria': 'メニューを開く',
        // NAV
        'nav.services': 'サービス',
        'nav.solutions': 'ソリューション',
        'nav.products': '製品',
        'nav.projects': 'プロジェクト',
        'nav.contact': 'お問い合わせ',
        'nav.consult': '相談',
        'nav.login': 'ログイン',
        // HERO
        'hero.eyebrow': 'デジタル変革を加速',
        'hero.title_html': '企業と農業向け <span style="color:var(--brand)">IoT</span> ＆ <span style="color:var(--accent)">自動化</span> ソリューション',
        'hero.subtitle': '設計・製造・システム統合：ゲートウェイ、センサー、クラウド、ダッシュボード、SCADA、AIoT。迅速導入・最適コスト・現地保証。',
        'hero.cta_primary': '面談を予約',
        'hero.cta_secondary': '事例を見る',
        'hero.status.gateway': 'ゲートウェイ • 稼働中',
        'hero.status.devices': '24 台',
        'hero.cards.humidity.label': '湿度',
        'hero.cards.humidity.value': '62%',
        'hero.cards.temp.label': '温度',
        'hero.cards.temp.value': '29.6°C',
        'hero.cards.ph.label': 'pH',
        'hero.cards.ph.value': '7.4',
        // SERVICES
        'services.title': 'コアサービス',
        'services.subtitle': 'アイデア → 試作 → 量産 → 運用',
        'services.items.hw.title': 'ハードウェア設計',
        'services.items.hw.desc': 'ESP32/STM32、LoRa/4G/5G、NB-IoT、RS485、Modbus、CAN、産業計測。',
        'services.items.edge.title': 'AIoT & エッジ',
        'services.items.edge.desc': '画像認識、人/車両検知、セキュリティ監視、エッジ分析。',
        'services.items.cloud.title': 'クラウド & ダッシュボード',
        'services.items.cloud.desc': 'MQTT/HTTP、リアルタイムデータ、アラート、レポート、Web SCADA。',
        'services.items.integr.title': 'システム統合',
        'services.items.integr.desc': 'PLC/SCADA、BMS/EMS、スマートビル、マルチプロトコルGW。',
        'services.items.proto.title': '迅速プロトタイピング',
        'services.items.proto.desc': '3Dプリント、CNC、短納期PCB、実地試験、要件調整。',
        'services.items.sla.title': '保守 & SLA',
        'services.items.sla.desc': '遠隔監視、OTA更新、オンサイト保証、サービス品質。',
        // SOLUTIONS
        'solutions.title': '主要ソリューション',
        'solutions.subtitle': 'スマート農業・ビル・環境監視・産業',
        'solutions.agri.title': 'スマート農業',
        'solutions.agri.desc': 'pH/DO/EC、温度、湿度、水位の監視；ポンプ/ファン/バルブ自動制御；ダッシュボード & SMS/Zalo アラート。',
        'solutions.agri.tiles.farm': 'エビ養殖場',
        'solutions.agri.tiles.farm_val': '42 池',
        'solutions.agri.tiles.greenhouse': '温室',
        'solutions.agri.tiles.greenhouse_val': '6 ゾーン',
        'solutions.agri.tiles.drip': '点滴灌漑',
        'solutions.agri.tiles.drip_val': 'IoT',
        'solutions.building.title': 'ビル & エネルギー',
        'solutions.building.li1': 'BMS/EMS、多回路計測、消費最適化。',
        'solutions.building.li2': '発電機監視、ATS、インシデント警告。',
        'solutions.building.li3': 'セキュリティ、AIカメラ認識。',
        // PRODUCTS
        'products.title': '製品',
        'products.catalog': 'カタログをダウンロード',
        'products.gw.title': 'SP1',
        'products.gw.desc': 'マルチプロトコルIoTゲートウェイ（MQTT/HTTP/Modbus）、4G/LTE、Wi-Fi、Ethernet、9–36VDC給電。',
        'products.gw.img': 'イメージ',
        'products.gw.tag': 'v1.2',
        'products.node.title': 'ECO-Node',
        'products.node.desc': '無線LoRa/NB-IoTセンサー：温湿度、pH、DO、水位、電流、振動。',
        'products.node.img': 'イメージ',
        'products.node.tag': 'IP65',
        'products.vision.title': 'ECO-Vision',
        'products.vision.desc': 'AIカメラ：人/車両認識、立入禁止エリア監視、トラフィックカウント。',
        'products.vision.img': 'イメージ',
        'products.vision.tag': 'AIoT',
        // PROJECTS
        'projects.title': '導入事例',
        'projects.subtitle': '数字で見る実績',
        'projects.stats.sites.value': '120+',
        'projects.stats.sites.label': '稼働中のIoTサイト',
        'projects.stats.sectors.value': '5+',
        'projects.stats.sectors.label': '産業分野',
        'projects.stats.energy.value': '30%',
        'projects.stats.energy.label': '平均節電率',
        'projects.stats.monitor.value': '24/7',
        'projects.stats.monitor.label': '監視 & アラート',
        'projects.clients.logo1': 'ロゴ 1',
        'projects.clients.logo2': 'ロゴ 2',
        'projects.clients.logo3': 'ロゴ 3',
        'projects.clients.logo4': 'ロゴ 4',
        'projects.clients.logo5': 'ロゴ 5',
        'projects.clients.logo6': 'ロゴ 6',
        // CONTACT
        'contact.title': 'プロジェクトのご相談はお気軽に',
        'contact.subtitle': '24時間以内にご返信します。',
        'contact.form.name': '氏名',
        'contact.form.name_aria': '氏名',
        'contact.form.email': 'メール',
        'contact.form.email_aria': 'メール',
        'contact.form.phone': '電話番号（任意）',
        'contact.form.phone_aria': '電話番号',
        'contact.form.submit': '送信',
        // FOOTER
        'footer.about': 'デバイスからプラットフォームまで、エンドツーエンドのIoTソリューション。ベトナム企業のDXを支援します。',
        'footer.company.title': '会社情報',
        'footer.company.about': '会社概要',
        'footer.company.jobs': '採用情報',
        'footer.company.terms': 'ポリシー & 規約',
        'footer.contact.title': 'お問い合わせ',
        'footer.contact.hotline': 'ホットライン: 0338812063/Mr. Hung',
        'footer.contact.email': 'メール: musenplus2@gmail.com',
        'footer.contact.address': '📍 51/6/6 Nguyen Van Giap, Binh Trung Dong Ward, Thu Duc City, Ho Chi Minh City, Vietnam.',
        'footer.newsletter.title': 'ニュースレター',
        'footer.newsletter.placeholder': 'メールアドレス',
        'footer.newsletter.cta': '登録',
        'footer.rights': 'All rights reserved.',
        'footer.company': '会社情報',
        // Alerts
        'alerts.thanks': 'ありがとうございます',
        'alerts.contact_via': '次の連絡先にご連絡します',
        'footer.copyright_prefix': '©',
      }
    };

    function i18n(key) {
      const lang = localStorage.getItem(LANG_KEY) || 'vi';
      return (dict[lang] && dict[lang][key]) || (dict.vi && dict.vi[key]) || '';
    }

    function applyI18nToElement(el, lang) {
      // text content
      const key = el.getAttribute('data-i18n');
      if (key) {
        const val = dict[lang][key] ?? dict.vi[key] ?? '';
        // Nếu chuỗi có HTML (ví dụ hero.title_html) thì innerHTML, còn lại textContent
        if (/_html$/.test(key)) el.innerHTML = val;
        else el.textContent = val;
      }
      // placeholder
      const phKey = el.getAttribute('data-i18n-placeholder');
      if (phKey) {
        const ph = dict[lang][phKey] ?? dict.vi[phKey] ?? '';
        el.setAttribute('placeholder', ph);
      }
      // aria-label
      const ariaKey = el.getAttribute('data-i18n-aria-label');
      if (ariaKey) {
        const aria = dict[lang][ariaKey] ?? dict.vi[ariaKey] ?? '';
        el.setAttribute('aria-label', aria);
      }
    }

    function setLanguage(lang) {
      // Lưu
      localStorage.setItem(LANG_KEY, lang);
      // Áp dụng cho tất cả phần tử có data-i18n / data-i18n-*
      document.querySelectorAll('[data-i18n], [data-i18n-placeholder], [data-i18n-aria-label]').forEach(el => {
        applyI18nToElement(el, lang);
      });
      // Cập nhật <html lang="...">
      document.documentElement.lang = lang;
      // Cập nhật tiêu đề trang & meta description (tùy chọn)
      const titleMap = {
        vi: 'MUSEN PLUS IoT – Giải pháp IoT & Tự động hoá',
        en: 'MUSEN PLUS IoT – IoT & Automation Solutions',
        jp: 'MUSEN PLUS IoT – IoT & 自動化ソリューション'
      };
      document.title = titleMap[lang] || titleMap.vi;
      const metaDesc = document.querySelector('meta[name="description"]');
      const descMap = {
        vi: 'Giải pháp IoT, AIoT, SCADA, nông nghiệp thông minh, toà nhà thông minh, quan trắc môi trường, sản phẩm phần cứng & phần mềm theo yêu cầu.',
        en: 'IoT, AIoT, SCADA, smart agriculture, smart buildings, environmental monitoring, custom hardware & software.',
        jp: 'IoT/AIoT/SCADA、スマート農業、スマートビル、環境監視、受託ハード/ソフトウェアのソリューション。'
      };
      if (metaDesc) metaDesc.setAttribute('content', descMap[lang] || descMap.vi);
    }

    function changeLanguage(lang) {
      setLanguage(lang);
    }

    // Khởi tạo theo ngôn ngữ đã lưu (mặc định VI)
    (function initLang() {
      const saved = localStorage.getItem(LANG_KEY) || 'vi';
      const sel = document.getElementById('language');
      if (sel) sel.value = saved;
      setLanguage(saved);
    })();

    window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// 🔹 Hiển thị nút scrollTop khi cuộn xuống
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

// 🔹 Cuộn lên đầu trang khi bấm nút
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/* ===== I18N external override (non-breaking) ===== */
(function(){
  try {
    var __lang = {
      vi: (typeof window.lang_vi !== 'undefined' && window.lang_vi) || (typeof dict !== 'undefined' ? dict.vi : {}),
      en: (typeof window.lang_en !== 'undefined' && window.lang_en) || (typeof dict !== 'undefined' ? dict.en : {}),
      jp: (typeof window.lang_jp !== 'undefined' && window.lang_jp) || (typeof dict !== 'undefined' ? dict.jp : {}),
    };
    // Override i18n/applyLang to use external dictionaries if present
    window.i18n = function(key){
      try {
        var lang = (localStorage.getItem('musen_lang') || 'vi');
        return (__lang[lang] && __lang[lang][key]) || key;
      } catch(e){ return key; }
    };
    window.applyLang = function(lang){
      try {
        localStorage.setItem('musen_lang', lang);
        var d = __lang[lang] || {};
        document.querySelectorAll('[data-i18n]').forEach(function(el){
          var k = el.getAttribute('data-i18n'); if (d[k]) el.innerHTML = d[k];
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(function(el){
          var k = el.getAttribute('data-i18n-aria-label'); if (d[k]) el.setAttribute('aria-label', d[k]);
        });
        var sel = document.querySelector('.lang-select'); if (sel) sel.value = lang;
      } catch(e){}
    };
    // Initialize once DOM is ready
    document.addEventListener('DOMContentLoaded', function(){
      var initial = localStorage.getItem('musen_lang') || 'vi';
      window.applyLang(initial);
      var sel = document.querySelector('.lang-select');
      if (sel) sel.addEventListener('change', function(e){ window.applyLang(e.target.value); });
    });
  } catch(e){}
})();
/* ===== end override ===== */

// Mobile menu handling
const mobileMenu = document.querySelector('#mobileMenu');
const mobileMenuBtn = document.querySelector('.hamb');

function toggleMobileMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
    mobileMenu.classList.add('mobile-menu-enter');
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu.classList.add('mobile-menu-exit');
    setTimeout(() => {
      mobileMenu.style.display = 'none';
      mobileMenu.classList.remove('mobile-menu-exit');
      document.body.style.overflow = '';
    }, 300);
  }
}

mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu?.style.display === 'block' && 
      !e.target.closest('#mobileMenu') && 
      !e.target.closest('.hamb')) {
    toggleMobileMenu();
  }
});

// Handle viewport height for mobile
function setMobileViewportHeight() {
  document.documentElement.style.setProperty('--vh', 
    `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', setMobileViewportHeight);
setMobileViewportHeight();
