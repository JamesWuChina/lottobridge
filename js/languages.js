// 多语言支持系统
const languages = {
    zh: {
        // 页面标题
        page: {
            title: 'LottoBridge | 全球彩票出海一站式解决方案平台'
        },
        // 导航栏
        nav: {
            home: '首页',
            market_research: '市场调研',
            products: '产品服务',
            insights: '行业洞察',
            case_studies: '合作案例',
            about: '关于我们',
            contact: '联系我们'
        },
        // 产品页面
        products: {
            page: {
                title: '产品服务 | LottoBridge'
            },
            download: {
                title: 'Скачать полный отчет',
                description: 'Получите подробный аналитический отчет о египетском лотерейном рынке, включая инвестиционные рекомендации и оценку бизнес-возможностей',
                form: {
                    email: 'Адрес электронной почты',
                    company: 'Название компании',
                    country: 'Страна/Регион',
                    country_placeholder: 'Пожалуйста, выберите',
                    china: 'Китай',
                    usa: 'Соединенные Штаты',
                    subscribe_label: 'Подписаться на отраслевые обновления',
                    submit_button: 'Скачать сейчас'
                }
            },
            recent_updates: {
                title: 'Последние обновления',
                uzbekistan: {
                    title: 'Отчет о лотерейном рынке Узбекистана',
                    update_time: 'Обновлено: декабрь 2024',
                    tag1: 'Развивающийся рынок',
                    tag2: 'Частный вход',
                    tag3: 'Высокий потенциал роста'
                },
                cambodia: {
                    title: 'Отчет о лотерейном рынке Камбоджи',
                    update_time: 'Обновлено: январь 2025',
                    tag1: 'Государственное сотрудничество',
                    tag2: 'POS терминал',
                    tag3: 'Централизованный выпуск'
                },
                nigeria: {
                    title: 'Отчет о лотерейном рынке Нигерии',
                    update_time: 'Обновлено: ноябрь 2024',
                    tag1: 'Большое население',
                    tag2: 'Низкое проникновение',
                    tag3: 'Регулятивная серая зона'
                }
            },
            testimonials: {
                title: 'Отзывы клиентов',
                testimonial_text: 'Отчет о рынке LottoBridge предоставил ценные инсайты для нашего входа на египетский рынок, помогая нам разработать успешную стратегию локализации.',
                testimonial_author: 'Джеймс Чжан',
                testimonial_title: 'Директор по международному бизнесу'
            },
            cta: {
                title: 'Готовы войти на египетский лотерейный рынок?',
                description: 'Свяжитесь с нашей командой экспертов для получения индивидуальных стратегий входа на рынок и решений',
                contact: 'Связаться с экспертом',
                demo: 'Забронировать демо'
            },
            hero: {
                title: '全球彩票一站式解决方案',
                description: '整合中国彩票产业链核心资源，提供从市场调研、系统开发、终端设备到运营支持的全流程服务',
                btn_view_services: '查看服务方案',
                btn_contact_consultant: '联系销售顾问'
            },
            services: {
                title: '我们的核心产品与服务',
                description: 'LottoBridge 提供的不只是产品清单，而是从"调研、设计、系统、设备、培训、出口、合作"一站式可落地的彩票解决方案组合',
                lottery_system: {
                    title: '彩票系统服务',
                    description: '完整的彩票销售、开奖、结算系统解决方案，支持多种彩票玩法，满足不同国家监管要求',
                    feature1: '支持多语言、多玩法、多销售终端接入',
                    feature2: '提供 SaaS 云服务与本地私有部署双方案',
                    feature3: '支持对接监管平台、财政系统、大数据分析后台',
                    feature4: '包含销售管理、开奖管理、防伪追溯、CRM客户管理等模块'
                },
                terminal_equipment: {
                    title: '彩票终端设备服务',
                    description: '提供 POS 销售终端、自助售票机、出票打印机、扫码枪等全品类设备，满足各种销售场景需求',
                    feature1: '支持 Android / Linux / Windows 系统',
                    feature2: '终端支持外观定制、多语言、本地支付方式集成',
                    feature3: '满足多国工业认证（如 CE、FCC、RoHS）',
                    feature4: '提供设备维护、远程诊断、配件更换等售后服务'
                },
                game_design: {
                    title: '彩票游戏设计与开发',
                    description: '提供乐透型、即开型、数字型、竞猜型等多种玩法设计，满足不同市场偏好和监管要求',
                    feature1: '一体化服务：玩法创意 → 数学模型 → 奖级结构 → 合规验证',
                    feature2: '支持票面设计、多语种内容、本地文化适配',
                    feature3: '内嵌防伪安全码、中奖控制参数、安全性机制',
                    feature4: '提供游戏测试、市场预测、玩家行为分析'
                },
                printing: {
                    title: '彩票票券印刷与热敏纸服务',
                    description: '高质量的即开票印刷和安全热敏纸供应，满足不同市场的防伪和安全要求',
                    feature1: '即开票印刷服务：支持高防伪设计、防伪油墨、喷码、激光打孔等',
                    feature2: '提供定制热敏纸耗材，适配 LottoBridge 或第三方终端',
                    feature3: '支持批量安全印制、国际包装与发运',
                    feature4: '印刷合规支持：序列控制、防伪审核、工厂认证'
                },
                consulting: {
                    title: '市场调研与咨询服务',
                    description: '专业团队提供从市场准入分析到商业落地的全流程咨询服务',
                    feature1: 'AI驱动的132+国家市场报告一键生成',
                    feature2: '包含法律环境、市场规模、主流玩法等核心数据',
                    feature3: '提供商业模型搭建与财务预测服务',
                    feature4: '合作模式与法律合规建议'
                },
                training: {
                    title: '运营培训服务',
                    description: '针对彩票运营各阶段提供系统化培训，确保团队快速上手',
                    feature1: '系统操作培训（销售终端、后台管理）',
                    feature2: '销售流程与终端维护培训',
                    feature3: '代理管理与返点政策设计',
                    feature4: '数据分析与客户服务培训'
                }
            },
            cases: {
                title: '成功案例',
                description: '全球客户如何通过 LottoBridge 的解决方案实现业务增长',
                mexico: {
                    title: '墨西哥私营彩票运营商系统升级',
                    description: '为墨西哥领先彩票运营商提供全套销售系统升级和2000台终端设备，支持其业务扩展至全国5000个销售点。'
                },
                south_africa: {
                    title: '南非国家彩票即开票供应',
                    description: '为南非国家彩票局提供1.2亿张定制即开票，包含12种本地文化主题设计，6个月内完成交付。'
                },
                vietnam: {
                    title: '越南彩票数字化改造项目',
                    description: '协助越南彩票公司完成数字化改造，部署云彩票系统并培训300名技术人员，实现销售额提升40%。'
                }
            },
            cta: {
                title: '准备好升级您的彩票业务了吗？',
                description: '无论您是政府机构、私营运营商还是技术提供商，LottoBridge都能为您提供最适合的解决方案',
                btn_contact: '立即咨询',
                btn_download: '下载服务手册'
            }
        },
        // 案例研究页面
        case_studies: {
            page: {
                title: '合作案例 | LottoBridge'
            },
            hero: {
                title: '全球成功案例',
                description: '探索我们在世界各地的彩票项目成功案例，了解LottoBridge如何帮助客户实现业务目标',
                btn_view_all: '查看全部案例',
                btn_contact: '联系我们'
            },
            filters: {
                region: {
                    title: '地区',
                    all: '全部地区',
                    asia: '亚洲',
                    europe: '欧洲',
                    africa: '非洲',
                    america: '美洲'
                },
                project_type: {
                    title: '项目类型',
                    all: '全部类型',
                    system: '系统搭建',
                    printing: '票券印刷',
                    consulting: '咨询服务',
                    training: '运营培训'
                },
                service: {
                    title: '服务内容',
                    all: '全部服务',
                    lottery_system: '彩票系统',
                    terminal: '终端设备',
                    game_design: '游戏设计',
                    market_research: '市场调研'
                },
                year: {
                    title: '年份',
                    all: '全部年份',
                    year_2024: '2024年',
                    year_2023: '2023年',
                    year_2022: '2022年'
                },
                reset_btn: '重置筛选',
                apply_btn: '应用筛选'
            },
            cases: {
                cambodia: {
                    title: '彩票系统本地化合作',
                    type: '系统搭建 + 终端部署',
                    feature1: '全票种销售系统定制 + 本地终端部署 + CRM模块培训',
                    feature2: '支持柬语系统界面与安卓终端导入',
                    testimonial: '"本地销售网络迅速上线，共部署 POS 端超 1,200 台，提升年销售额预计 2200万美元，增长超42%"'
                },
                uganda: {
                    title: '即开票项目快速部署',
                    type: '票券印刷 + 物流出口',
                    feature1: '彩票品类咨询 + 安全票面设计 + 即开票印刷',
                    feature2: '提供10款定制票种，全部通过地方政府审查',
                    testimonial: '"项目周期仅4个月，票面满意度调查达92%，热敏纸与印刷品成功通过税务认证，快速落地销售"'
                },
                brazil: {
                    title: '战略顾问与系统预研',
                    type: '咨询合作 + 市场调研',
                    feature1: '市场准入政策分析 + AI调研 + 线上彩票系统规划',
                    feature2: '提供4轮政策研讨+本地专家对接+白皮书支持',
                    testimonial: '"协助客户制定3年发展路径，助力战略投资方向确认"'
                },
                uzbekistan: {
                    title: '全栈彩票解决方案',
                    type: '系统搭建 + 运营培训',
                    feature1: '彩票系统开发 + 终端设备 + 运营团队培训',
                    feature2: '支持乌兹别克语界面，完整本地化部署',
                    testimonial: '"系统稳定运行18个月，销售网点覆盖全国主要城市，月均销售额增长35%"'
                },
                view_details: '查看详情',
                download_brief: '下载简报'
            },
            cta: {
                title: '准备好进入全球彩票市场了吗？',
                subtitle: '无论您是政府机构、私营运营商还是技术提供商，LottoBridge都能为您提供最适合的解决方案',
                contact_now: '立即咨询',
                book_demo: '预约演示'
            },
            hero: {
                title: '全球彩票一站式解决方案',
                description: '整合中国彩票产业链核心资源，提供从市场调研、系统开发、终端设备到运营支持的全流程服务',
                btn_view_services: '查看服务方案',
                btn_contact_consultant: '联系销售顾问'
            },
            services: {
                title: '我们的核心产品与服务',
                description: 'LottoBridge 提供的不只是产品清单，而是从"调研、设计、系统、设备、培训、出口、合作"一站式可落地的彩票解决方案组合',
                lottery_system: {
                    title: '彩票系统服务',
                    description: '完整的彩票销售、开奖、结算系统解决方案，支持多种彩票玩法，满足不同国家监管要求',
                    feature1: '支持多语言、多玩法、多销售终端接入',
                    feature2: '提供 SaaS 云服务与本地私有部署双方案',
                    feature3: '支持对接监管平台、财政系统、大数据分析后台',
                    feature4: '包含销售管理、开奖管理、防伪追溯、CRM客户管理等模块'
                },
                terminal_equipment: {
                    title: '彩票终端设备服务',
                    description: '提供各类彩票销售终端设备，包括自助终端、便携式终端、POS机等，满足不同销售场景需求',
                    feature1: '自助彩票销售终端（支持触屏操作、多种支付方式）',
                    feature2: '便携式彩票销售终端（适合流动销售、小型网点）',
                    feature3: '彩票专用POS机（集成打印、扫描、支付功能）',
                    feature4: '设备远程监控、故障诊断、软件升级服务'
                },
                game_design: {
                    title: '彩票游戏设计与开发',
                    description: '基于丰富的中国彩票市场经验，为海外客户定制符合当地法规和文化的彩票游戏产品',
                    feature1: '数字彩、乐透彩、竞猜彩、即开彩等全品类游戏设计',
                    feature2: '游戏规则本地化、奖金结构优化、中奖概率设计',
                    feature3: '游戏UI/UX设计、多媒体素材制作',
                    feature4: '游戏数学模型验证、第三方审计支持'
                },
                printing: {
                    title: '彩票票券印刷与热敏纸服务',
                    description: '提供高品质彩票票券印刷服务，包括即开型彩票、热敏纸彩票等，确保防伪安全和印刷质量',
                    feature1: '即开型彩票印刷（刮刮乐、撕开式等）',
                    feature2: '热敏纸彩票印刷（适用于终端设备出票）',
                    feature3: '防伪技术应用（水印、安全线、特殊油墨等）',
                    feature4: '印刷质量检测、包装配送、库存管理服务'
                },
                consulting: {
                    title: '市场调研与咨询服务',
                    description: '专业团队提供从市场准入分析到商业落地的全流程咨询服务',
                    feature1: 'AI驱动的132+国家市场报告一键生成',
                    feature2: '包含法律环境、市场规模、主流玩法等核心数据',
                    feature3: '提供商业模型搭建与财务预测服务',
                    feature4: '合作模式与法律合规建议'
                },
                training: {
                    title: '运营培训服务',
                    description: '针对彩票运营各阶段提供系统化培训，确保团队快速上手',
                    feature1: '系统操作培训（销售终端、后台管理）',
                    feature2: '销售流程与终端维护培训',
                    feature3: '代理管理与返点政策设计',
                    feature4: '数据分析与客户服务培训'
                }
            },
            cases: {
                title: '全球成功案例',
                description: '我们的解决方案已在多个国家和地区成功落地，为当地彩票市场带来创新和增长',
                mexico: {
                    title: '墨西哥彩票系统项目',
                    description: '为墨西哥国家彩票提供完整的数字化彩票系统，支持多种玩法，年销售额超过10亿美元',
                    stat1: '年销售额（美元）',
                    stat2: '销售网点'
                },
                south_africa: {
                    title: '南非国家彩票即开票供应',
                    description: '为南非国家彩票局提供1.2亿张定制即开票，包含12种本地文化主题设计，6个月内完成交付'
                },
                vietnam: {
                    title: '越南彩票数字化改造项目',
                    description: '协助越南彩票公司完成数字化改造，部署云彩票系统并培训300名技术人员，实现销售额提升40%'
                }
            },
            cta: {
                title: '准备开始您的彩票业务？',
                description: '联系我们的专家团队，获取定制化解决方案和详细报价',
                btn_contact: '立即咨询',
                btn_market_report: '查看市场报告',
                btn_download: '下载服务手册'
            }
        },
        // 市场调研页面
        market_research: {
            page: {
                title: '市场调研 | LottoBridge'
            },
            download: {
                title: '获取完整PDF报告',
                description: '注册后即可下载完整报告 + 每月更新的全球动态，完全免费！',
                form: {
                    email: '电子邮箱',
                    company: '公司名称',
                    country: '国家/地区',
                    country_placeholder: '请选择',
                    china: '中国',
                    usa: '美国',
                    subscribe: '订阅LottoBridge市场情报月报',
                    submit: '立即获取'
                }
            },
            recent_updates: {
                title: '最新更新',
                uzbekistan: {
                    title: '乌兹别克斯坦彩票市场报告',
                    update_time: '更新时间: 2024.12',
                    tag1: '新兴市场',
                    tag2: '私营准入',
                    tag3: '高增长潜力'
                },
                cambodia: {
                    title: '柬埔寨数字彩票发展报告',
                    update_time: '更新时间: 2025.01',
                    tag1: '政府合作',
                    tag2: 'POS终端',
                    tag3: '集中式发行'
                },
                nigeria: {
                    title: '尼日利亚彩票政策更新',
                    update_time: '更新时间: 2024.11',
                    tag1: '高人口',
                    tag2: '低渗透',
                    tag3: '监管灰区'
                }
            },
            testimonials: {
                title: '客户评价',
                testimonial1: {
                    text: '我们通过 LottoBridge 获得了拉丁美洲5个国家的彩票调研报告，并最终锁定墨西哥作为落地首选。报告中的政策分析和市场规模预测非常准确，为我们节省了大量前期调研时间。',
                    author_name: '张伟',
                    author_title: '东南亚彩票技术服务商CEO'
                }
            },
            cta: {
                title: '未找到您需要的市场情报？',
                description: '我们的专家团队可为您提供定制化市场调研服务',
                btn_custom_research: '提交定制调研申请',
                btn_contact_support: '联系客服咨询'
            },
            hero: {
                title: 'Unlock Global Lottery Opportunities with AI-powered Market Research',
                subtitle: '快速掌握全球彩票市场的政策、规模与机会点',
                description: '由 LottoBridge AI 驱动的全球市场情报系统，为您提供一站式国家级彩票数据洞察，助您做出明智的市场决策',
                btn_select_country: '选择国家',
                btn_generate_report: '生成报告',
                btn_view_sample: '查看示例报告'
            },
            country_search: {
                title: '选择您感兴趣的国家',
                placeholder: '搜索国家或地区...',
                filter_all: '全部',
                filter_asia: '亚洲',
                filter_europe: '欧洲',
                filter_africa: '非洲',
                filter_america: '美洲',
                filter_english: '英语国家',
                filter_emerging: '新兴市场',
                coverage: '当前已覆盖 132 个国家和地区'
            },
            recommended_markets: {
                title: '推荐市场'
            },
            countries: {
                labels: {
                    market_status: '市场状态:',
                    lottery_types: '彩票品类:',
                    annual_sales: '年销售额估算:',
                    main_structure: '主体结构:',
                    typical_games: '典型玩法:'
                },
                buttons: {
                    view_details: '查看详情',
                    download_report: '下载报告',
                    book_consultation: '预约咨询'
                },
                egypt: {
                    name: '埃及 Egypt',
                    description: '北非最大彩票市场',
                    market_status: '合法运营',
                    lottery_types: '乐透型、即开票、数字型',
                    annual_sales: '约 4.3 亿美元',
                    main_structure: '国家彩票局',
                    typical_games: '6/49、4D、Scratch-off'
                },
                mexico: {
                    name: '墨西哥 Mexico',
                    description: '拉丁美洲领先市场',
                    market_status: '私营准入',
                    lottery_types: '乐透型、体育竞猜',
                    annual_sales: '约 12.5 亿美元',
                    main_structure: '合作运营商',
                    typical_games: 'Melate、Chispazo'
                },
                philippines: {
                    name: '菲律宾 Philippines',
                    description: '东南亚高增长市场',
                    market_status: '私营准入',
                    lottery_types: '乐透型、即开票、电子游戏',
                    annual_sales: '约 8.7 亿美元',
                    main_structure: '私营独立运营',
                    typical_games: 'Ultra Lotto 6/58'
                }
            },
            report_preview: {
                title: '埃及彩票市场深度报告',
                tabs: {
                    overview: '国家概况',
                    regulations: '法规与监管',
                    market_size: '市场规模',
                    product_structure: '产品结构',
                    key_players: '主要参与者',
                    business_opportunities: '商业机会'
                },
                content: {
                    overview: {
                        title: '国家概况',
                        demographics: '埃及是阿拉伯世界人口最多的国家，拥有超过1亿人口，其中约60%的人口年龄在30岁以下。互联网普及率达65%，移动支付使用率快速增长。',
                        history: '彩票在埃及有着悠久历史，最早可追溯到20世纪60年代。2018年修订的《彩票与博彩法》为市场现代化奠定了基础。',
                        legal_development: '彩票法制发展进程',
                        timeline_1960: '1960年：埃及首次引入国家彩票系统',
                        timeline_2018: '2018年：修订《彩票与博彩法》，允许私营运营商参与',
                        timeline_2021: '2021年：推出数字彩票试点项目'
                    },
                    regulations: {
                        regulations_info: '埃及彩票受《彩票与博彩法》(2018年修订版)监管，由财政部彩票监管局负责执行。所有彩票运营商必须获得政府许可证，并遵守严格的财务报告要求。',
                        policy_framework: '当前政策框架'
                    },
                    market_size: {
                        historical_sales: '历史销售数据显示，埃及彩票市场在过去5年保持稳定增长，年均增长率约12%。2023年总销售额达到4.3亿美元，其中乐透型彩票占65%，即开票占25%，数字型彩票占10%。',
                        growth_potential: '增长潜力评分',
                        growth_potential_rating: '增长潜力：★★★★☆'
                    }
                },
                download: {
                    title: '下载完整报告',
                    description: '获取埃及彩票市场的详细分析报告，包含投资建议和商业机会评估',
                    form: {
                        email: '邮箱地址',
                        company: '公司名称',
                        country: '国家/地区',
                        country_placeholder: '请选择',
                        china: '中国',
                        usa: '美国',
                        subscribe_label: '订阅行业动态邮件',
                        submit_button: '立即下载'
                    }
                },
                recent_updates: {
                    title: '最新更新',
                    uzbekistan_report: '乌兹别克斯坦彩票市场分析',
                    cambodia_report: '柬埔寨数字彩票发展报告',
                    nigeria_report: '尼日利亚彩票政策更新'
                },
                testimonials: {
                    title: '客户评价',
                    testimonial_text: 'LottoBridge的市场报告为我们进入埃及市场提供了宝贵的洞察，帮助我们制定了成功的本地化策略。',
                    testimonial_author: '张明',
                    testimonial_title: '国际业务总监'
                },
                cta: {
                    title: '准备进入埃及彩票市场？',
                    description: '联系我们的专家团队，获取定制化的市场进入策略和解决方案',
                    contact: '联系专家',
                    demo: '预约演示'
                }
            }
        },
        // 行业洞察页面
        insights: {
            page: {
                title: '行业洞察 | LottoBridge'
            },
            hero: {
                title: '全球彩票行业洞察',
                description: '深度解析全球彩票市场趋势、政策动向与技术创新，为您的决策提供专业支持',
                btn_view_trends: '查看趋势报告',
                btn_subscribe: '订阅行业简报'
            },
            nav_categories: {
                policy_tracking: '法规政策追踪',
                market_trends: '市场趋势报告',
                tech_trends: '技术趋势分析',
                case_studies: '案例研究',
                industry_reports: '行业报告',
                webinars: '视频讲座'
            },
            trends: {
                title: '趋势分析',
                subtitle: '基于大数据分析的全球彩票行业发展趋势',
                card_title: '2025全球彩票行业五大趋势前瞻',
                card_description: '全球彩票行业正在经历深刻变革',
                trend1: {
                    title: '数字化转型加速',
                    description: '移动端销售占比将超过60%，云彩票系统成为主流选择'
                },
                trend2: {
                    title: '监管合规要求提升',
                    description: '各国加强反洗钱、数据保护等合规要求，技术门槛显著提高'
                },
                trend3: {
                    title: 'AI技术深度应用',
                    description: '人工智能在风险控制、客户分析、游戏设计等领域广泛应用'
                },
                trend4: {
                    title: '跨境合作增多',
                    description: '国际彩票联盟、跨国运营商合作模式日益成熟'
                },
                trend5: {
                    title: '可持续发展重视',
                    description: 'ESG理念融入彩票运营，绿色彩票、社会责任成为关键词'
                }
            },
            policy: {
                title: '政策追踪',
                subtitle: '实时跟踪全球彩票政策法规变化',
                nigeria: {
                    title: '尼日利亚新彩票法案通过',
                    description: '允许私营运营商参与，预计市场规模增长300%'
                },
                thailand: {
                    title: '泰国数字彩票试点启动',
                    description: '首批5个省份开始数字彩票销售试点项目'
                },
                colombia: {
                    title: '哥伦比亚修订彩票税收政策',
                    description: '降低彩票税率至15%，刺激市场增长'
                },
                pakistan: {
                    title: '巴基斯坦彩票合法化进程',
                    description: '议会正在审议彩票合法化法案，预计年内通过'
                }
            },
            tech_trends: {
                title: '技术趋势',
                subtitle: '探索彩票行业最新技术应用与创新',
                ai_prediction: {
                    title: 'AI在客户行为预测中的应用',
                    description: '机器学习算法帮助运营商更好地理解客户需求，提升销售转化率'
                },
                anti_counterfeiting: {
                    title: '区块链防伪技术突破',
                    description: '基于区块链的彩票防伪系统，确保开奖过程透明可信'
                },
                intelligent_design: {
                    title: '智能游戏设计平台',
                    description: 'AI驱动的游戏设计工具，快速生成符合本地化需求的彩票游戏'
                },
                read_more: '阅读全文'
            },
            webinars: {
                title: '视频讲座',
                subtitle: '行业专家深度对话',
                description: '邀请全球彩票行业专家，分享最新市场洞察与实战经验',
                webinar1: {
                    title: '2024全球彩票市场回顾与展望',
                    speaker: 'Dr. Sarah Johnson',
                    role: '国际彩票协会主席',
                    description: '深度分析2024年全球彩票市场表现，预测2025年发展趋势'
                },
                webinar2: {
                    title: '数字化转型：传统彩票的新机遇',
                    speaker: 'Mark Chen',
                    role: 'LottoBridge CTO',
                    description: '分享数字化转型成功案例，探讨技术创新对彩票行业的影响'
                },
                webinar3: {
                    title: '新兴市场彩票投资机会分析',
                    speaker: 'Carlos Rodriguez',
                    role: '拉美彩票联盟秘书长',
                    description: '解析拉美、非洲等新兴市场的彩票投资机会与风险'
                },
                watch_btn: '观看回放'
            },
            subscribe: {
                title: '订阅行业简报',
                description: '每周获取最新的行业动态、政策更新和市场分析',
                email_placeholder: '输入您的邮箱地址',
                button: '立即订阅',
                privacy_notice: '订阅即表示您同意我们的',
                privacy_policy: '隐私政策'
            },
            game_innovation: {
                title: '全球彩票玩法创新报告',
                subtitle: '分析最新玩法趋势与用户体验优化方案',
                item1: {
                    title: '即开票与NFT结合实践',
                    description: '阿联酋试点"数字收藏版"即开票，中奖票可兑换NFT艺术品，年轻玩家占比提升至58%。',
                    tag1: 'NFT',
                    tag2: '年轻化'
                },
                item2: {
                    title: '微型赛事竞猜模式崛起',
                    description: '巴西推出"90秒赛事"即时竞猜，单日投注量突破200万笔，平均投注额下降但频次提升3倍。',
                    tag1: '微竞猜',
                    tag2: '即时开奖'
                },
                item3: {
                    title: '团体合买功能设计指南',
                    description: '分析印尼"Group Play"功能：组团合买转化率提升27%，但需注意奖金分配合规性设计。',
                    tag1: '社交功能',
                    tag2: '合买'
                },
                read_more: '阅读全文'
            },
            case_compare: {
                title: '拉美三国彩票改革比较',
                subtitle: '智利、秘鲁、阿根廷三国不同改革路径的深度分析',
                table: {
                    country: '国家',
                    policy_path: '政策路径',
                    success_factors: '成功要素',
                    risk_lessons: '风险教训'
                },
                chile: {
                    country: '🇨🇱 智利',
                    policy: '公开招标私营承包',
                    success: '独立发行系统+渠道合作',
                    risk: '缺乏印刷合规监管'
                },
                peru: {
                    country: '🇵🇪 秘鲁',
                    policy: '合资运营与跨国集团合作',
                    success: '提前设立合规标准',
                    risk: '玩家欺诈风险高'
                },
                argentina: {
                    country: '🇦🇷 阿根廷',
                    policy: '地区独立运营模式',
                    success: '地方票种灵活多样',
                    risk: '市场过度碎片化'
                },
                summary: {
                    title: '关键发现总结',
                    description: '通过对拉美三国彩票改革路径的比较分析，我们发现：',
                    point1: '私营化模式(智利)初期见效快，但长期监管挑战大',
                    point2: '合资模式(秘鲁)能快速引入国际经验，但需防范技术依赖',
                    point3: '地方自治模式(阿根廷)激发创新活力，但难以形成规模效应'
                },
                download_report: '下载完整比较报告(PDF)'
            },
            whitepapers: {
                title: '专业白皮书下载',
                subtitle: 'LottoBridge发布的全球调研系列深度报告',
                report1: {
                    title: '非洲彩票政策与市场布局2025',
                    description: '覆盖12国政策要点、玩法结构、机会地图与风险预警'
                },
                report2: {
                    title: '即开票玩法设计与票面创新指南',
                    description: '包含7种票面设计模板、3种安全方案与5个新兴市场案例'
                },
                report3: {
                    title: '全球终端设备发展趋势报告',
                    description: '分析56款主流终端的技术规格、兼容性与安全性测试结果'
                },
                download_btn: '下载报告'
            }
        },
        // 关于我们页面
        about: {
            page: {
                title: '关于我们 | LottoBridge'
            },
            hero: {
                title: '关于LottoBridge',
                description: '连接全球彩票市场的专业平台，为政府机构和私营运营商提供一站式解决方案',
                learn_team: '了解我们的团队',
                contact_us: '联系我们'
            },
            who_we_are: {
                title: '我们是谁',
                subtitle: '全球彩票出海一站式解决方案平台',
                paragraph1: 'LottoBridge成立于2023年，是一家专注于全球彩票市场的综合性服务平台。我们依托中国强大的彩票产业链资源，整合系统软件、终端硬件、票券印刷、热敏耗材等核心能力，为全球客户提供从市场调研到业务落地的完整解决方案。',
                paragraph2: '作为连接中国彩票产业链与全球市场的桥梁，我们不仅仅是一个B2B平台，更是一个打包式的彩票商业落地系统。我们帮助客户从"有没有机会"到"如何落地"一步到位，大幅降低进入新市场的风险和成本。'
            },
            vision: {
                title: '我们的愿景',
                subtitle: '成为全球彩票行业最值得信赖的合作伙伴',
                paragraph1: '在全球化的今天，彩票行业正面临着前所未有的发展机遇。各国政府越来越重视彩票作为公益事业筹资工具的作用，同时技术进步也为彩票行业带来了新的可能性。',
                paragraph2: '然而，进入一个新的彩票市场并非易事。从政策法规的理解，到技术方案的选择，再到供应链的建立，每一个环节都充满挑战。这正是LottoBridge存在的意义。',
                challenges: {
                    title: '我们帮助客户解决的核心挑战：',
                    challenge1: '市场准入门槛高，政策法规复杂',
                    challenge2: '技术方案选择困难，供应商分散',
                    challenge3: '本地化运营经验不足',
                    challenge4: '投资风险大，回报周期不确定'
                }
            },
            values: {
                title: '核心价值观',
                subtitle: '指导我们行动的基本原则',
                professionalism: {
                    title: '专业性',
                    description: '深耕彩票行业，提供最专业的技术方案和市场洞察'
                },
                internationalization: {
                    title: '国际化',
                    description: '全球视野，本地化服务，理解不同市场的独特需求'
                },
                transparency: {
                    title: '透明度',
                    description: '开放透明的合作方式，让客户清楚了解每个环节'
                },
                cooperation: {
                    title: '合作共赢',
                    description: '与客户建立长期合作关系，共同成长，分享成功'
                }
            },
            team: {
                title: '我们的团队',
                subtitle: '来自全球的彩票行业专家',
                members: {
                    zhang_wei: {
                        name: '张伟',
                        position: '创始人兼CEO',
                        description: '15年彩票行业经验，曾参与多个国家彩票系统建设项目，深度了解全球彩票市场政策与技术趋势。',
                        languages: '中文、英文、俄文'
                    },
                    maria_gonzalez: {
                        name: 'Maria Gonzalez',
                        position: '拉美市场总监',
                        description: '拉美地区彩票行业资深专家，拥有丰富的政府关系和市场开拓经验，精通西班牙语和葡萄牙语市场。',
                        languages: '西班牙文、葡萄牙文、英文'
                    },
                    li_ming: {
                        name: '李明',
                        position: '技术总监',
                        description: '资深软件架构师，专注于彩票系统开发10余年，主导设计了多个大型彩票平台，在系统安全和性能优化方面有深厚造诣。',
                        languages: '中文、英文'
                    },
                    sarah_johnson: {
                        name: 'Sarah Johnson',
                        position: '非洲市场总监',
                        description: '非洲市场开拓专家，在肯尼亚、尼日利亚等地有丰富的项目实施经验，深度了解非洲各国彩票政策环境。',
                        languages: '英文、法文、斯瓦希里文'
                    },
                    wang_qiang: {
                        name: '王强',
                        position: '供应链总监',
                        description: '20年制造业和供应链管理经验，负责整合中国优质彩票设备制造商资源，确保产品质量和交付时效。',
                        languages: '中文、英文'
                    },
                    chen_jing: {
                        name: '陈静',
                        position: '合规与法务总监',
                        description: '国际贸易和彩票行业法务专家，精通各国彩票法规和国际贸易规则，为客户提供专业的合规指导。',
                        languages: '中文、英文、法文'
                    }
                }
            },
            partners: {
                title: '合作伙伴',
                subtitle: '与行业领先企业建立战略合作关系'
            },
            credentials: {
                title: '资质认证',
                subtitle: '专业资质保障服务质量',
                iso: {
                    title: 'ISO 9001质量管理体系认证',
                    description: '通过国际标准化组织质量管理体系认证'
                },
                export: {
                    title: '印刷品出口资质',
                    description: '具备彩票印刷品出口的完整资质链条'
                },
                software: {
                    title: '彩票行业软件著作权',
                    description: '已登记2项核心系统软件著作权'
                },
                experience: {
                    title: '多国项目落地经验',
                    description: '尼日利亚、柬埔寨、乌兹别克斯坦等地项目已成功实施'
                },
                exhibitions: {
                    title: '展会与联盟参与',
                    description: '参展过迪拜博彩展、肯尼亚GBC、东南亚数博会等行业盛会'
                }
            },
            commitment: {
                title: '我们相信',
                subtitle: '技术、合规与信任，是推动全球彩票业务可持续发展的三大支柱',
                paragraph1: 'LottoBridge 致力于成为值得全球客户托付的"核心连接平台"。我们不仅提供产品和服务，更致力于建立长期合作伙伴关系，帮助客户在快速变化的全球彩票市场中取得成功。',
                promise_title: '我们的承诺：',
                promise1: '始终保持对行业趋势的前瞻性洞察',
                promise2: '坚持最高标准的合规与安全要求',
                promise3: '持续优化全球供应链与本地化服务能力',
                promise4: '与客户共同成长，分享成功'
            },
            cta: {
                title: '准备好与我们一起开拓全球市场了吗？',
                description: '无论您是政府机构、私营运营商还是技术提供商，LottoBridge都能为您提供最适合的解决方案',
                contact_now: '立即咨询',
                view_cases: '查看成功案例'
            }
        },
        // 联系我们页面
        contact: {
            page: {
                title: '联系我们 | LottoBridge'
            },
            hero: {
                title: '联系我们',
                description: '准备开启您的全球彩票业务？我们的专家团队随时为您提供专业咨询和定制化解决方案。',
                btn_submit: '提交合作意向',
                btn_direct: '直接联系我们'
            },
            form: {
                title: '合作咨询表单',
                description: '请填写以下信息，我们将在24小时内与您取得联系',
                company_name: '公司名称',
                company_name_placeholder: '请输入您的公司名称',
                contact_person: '联系人',
                contact_person_placeholder: '请输入联系人姓名',
                position: '职位',
                position_placeholder: '请输入您的职位',
                email: '邮箱地址',
                email_placeholder: '请输入您的邮箱地址',
                phone: '联系电话',
                phone_placeholder: '请输入您的联系电话',
                country: '国家/地区',
                country_placeholder: '请选择您的国家或地区',
                // 国家名称翻译
                country_china: '中国',
                country_usa: '美国',
                country_uk: '英国',
                country_japan: '日本',
                country_korea: '韩国',
                country_russia: '俄罗斯',
                country_brazil: '巴西',
                country_india: '印度',
                needs: '您的需求 *',
                need_report: '生成市场报告',
                need_system: '彩票系统',
                need_printing: '印刷与终端采购',
                need_compliance: '合规与落地',
                need_other: '其他',
                message: '补充信息',
                message_placeholder: '描述您项目背景、具体问题或目标',
                upload: '上传附件',
                upload_text: '拖放文件到此处或点击上传',
                upload_format: '支持PDF/PPT/DOC等格式，最大10MB',
                language_preference: '语言偏好',
                lang_english: '英语',
                lang_chinese: '中文',
                lang_russian: '俄语',
                lang_arabic: '阿拉伯语',
                privacy: '我已阅读并同意<a href="#">隐私政策</a> *',
                submit: '提交合作意向',
                schedule: '预约专家沟通',
                footer: '提交表单即表示您同意我们的隐私政策。我们承诺保护您的个人信息安全，不会向第三方泄露。'
            },
            direct: {
                title: '不想填写表单？',
                description: '您也可以直接通过以下方式联系我们',
                email: '邮箱',
                send_email: '发送邮件',
                send_message: '发送消息',
                contact_us: '联系我们',
                phone: '电话',
                work_hours: '工作时间：UTC+8 09:00–18:00',
                call: '拨打电话',
                wechat: '微信',
                scan_qr: '扫描二维码添加客服'
            },
            global: {
                title: '我们服务全球 100+ 国家与地区',
                description: 'LottoBridge 已在多个国家和地区成功实施项目',
                africa: '非洲地区',
                africa_desc: '我们在非洲多个国家设有代表处或合作伙伴，包括尼日利亚、肯尼亚、南非等',
                manager: '区域经理: Sarah Johnson',
                asia: '亚洲地区',
                asia_desc: '覆盖东南亚、南亚及中东市场，包括越南、柬埔寨、菲律宾、阿联酋等',
                manager_asia: '区域经理: David Chen',
                latam: '拉丁美洲',
                latam_desc: '服务墨西哥、巴西、哥伦比亚、阿根廷等拉美市场',
                manager_latam: '区域经理: Maria Gonzalez'
            },
            resources: {
                title: '资源下载',
                description: '下载我们的资料，深入了解LottoBridge的服务能力',
                platform_intro: {
                    title: '平台服务介绍',
                    description: '详细了解LottoBridge的核心产品与服务',
                    download: '下载PDF'
                },
                case_collection: {
                    title: '合作案例集',
                    description: '查看我们在全球的成功案例',
                    download: '下载PPT'
                },
                whitepaper: {
                    title: '白皮书',
                    description: '全球彩票行业发展趋势与机会分析',
                    download: '下载报告'
                }
            },
            ai_assistant: {
                title: 'AI智能助手',
                description: '有任何问题？我们的AI助手可以为您提供即时解答',
                chat_header: 'LottoBridge AI助手',
                welcome: '您好！我是LottoBridge AI助手，有什么可以帮助您的吗？',
                examples: {
                    question1: '如何在埃及开展彩票业务？',
                    question2: '彩票系统开发需要多长时间？',
                    question3: '你们的服务覆盖哪些国家？'
                },
                input_placeholder: '输入您的问题...',
                send: '发送'
            },
            cta: {
                title: '准备开始您的彩票项目？',
                description: '立即联系我们，获取专业的咨询服务和定制化解决方案',
                contact_btn: '立即咨询',
                report_btn: '获取市场报告'
            }
        },
        // 首页内容
        hero: {
            title: '全球彩票出海一站式解决方案平台',
            subtitle: '依托中国强大的彩票产业链资源，整合系统软件、终端硬件、票券印刷、热敏耗材等核心能力，帮助各国政府机构、私营运营商快速进入彩票市场',
            cta_primary: 'AI生成市场调研报告',
            cta_secondary: '联系我们的顾问'
        },
        features: {
            title: '我们能为您做什么',
            subtitle: 'LottoBridge不只是一个B2B平台，更是一个打包式的彩票商业落地系统，帮助客户从"有没有机会"到"如何落地"一步到位',
            consulting: {
                title: '前期咨询与市场规划',
                description: 'AI全球市场调研引擎一键生成100+国家彩票政策、市场规模、风险分析等专业报告'
            },
            products: {
                title: '产品与技术服务',
                description: '全彩彩票系统服务、终端设备供应链、彩票游戏设计与开发、票券印刷与热敏纸服务'
            },
            support: {
                title: '运营支持与落地服务',
                description: '培训与运营辅导、供需撮合与订单管理、出口与合规支持、战略合作伙伴匹配'
            }
        },
        solutions: {
            title: '我们的核心解决方案',
            subtitle: '针对不同市场需求的定制化产品与服务',
            software: {
                title: '彩票系统软件',
                description: '完整的彩票销售、开奖、结算系统，支持多种彩票玩法，满足不同国家监管要求'
            },
            hardware: {
                title: '终端硬件设备',
                description: '高性能彩票终端机、自助售票机、移动销售设备，适应各种销售场景'
            },
            printing: {
                title: '票券印刷服务',
                description: '安全防伪的即开票印刷，符合国际安全标准，支持定制化设计'
            },
            learn_more: '了解更多'
        },
        global: {
            title: '全球市场覆盖',
            subtitle: '我们的解决方案已在全球多个国家和地区成功落地',
            regions: {
                latin_america: '拉丁美洲',
                africa: '非洲',
                southeast_asia: '东南亚',
                central_eastern_europe: '中东欧',
                middle_east: '中东'
            }
        },
        testimonials: {
            title: '客户评价',
            subtitle: '听听我们的合作伙伴如何评价LottoBridge的服务',
            quote: 'LottoBridge为我们提供了完整的彩票系统解决方案，从市场调研到系统落地仅用了3个月时间。他们的专业团队和一站式服务大大降低了我们的运营风险。',
            author_name: 'Carlos Mendez',
            author_title: '墨西哥彩票运营商CEO'
        },
        cta: {
            title: '准备好进入全球彩票市场了吗？',
            subtitle: '无论您是政府机构、私营运营商还是技术提供商，LottoBridge都能为您提供最适合的解决方案',
            contact_now: '立即咨询',
            book_demo: '预约演示'
        },
        // Страница отраслевых инсайтов
        insights: {
            page: {
                title: 'Отраслевые инсайты | LottoBridge'
            },
            hero: {
                title: 'Инсайты глобальной лотерейной индустрии',
                description: 'Глубокий анализ тенденций глобального лотерейного рынка, политических изменений и технологических инноваций для поддержки вашего принятия решений',
                btn_view_trends: 'Посмотреть отчеты о трендах',
                btn_subscribe: 'Подписаться на отраслевой бюллетень'
            },
            nav_categories: {
                policy_tracking: 'Отслеживание политики и регулирования',
                market_trends: 'Отчеты о рыночных трендах',
                tech_trends: 'Анализ технологических трендов',
                case_studies: 'Кейсы',
                industry_reports: 'Отраслевые отчеты',
                webinars: 'Видеолекции'
            },
            trends: {
                title: 'Анализ трендов',
                subtitle: 'Тенденции развития глобальной лотерейной индустрии на основе анализа больших данных',
                card_title: 'Прогноз пяти основных трендов глобальной лотерейной индустрии 2025',
                card_description: 'Глобальная лотерейная индустрия переживает глубокую трансформацию',
                trend1: {
                    title: 'Ускоренная цифровая трансформация',
                    description: 'Мобильные продажи составят более 60%, облачные лотерейные системы становятся основным выбором'
                },
                trend2: {
                    title: 'Усиленные требования к соответствию регулированию',
                    description: 'Страны усиливают требования к соответствию AML и защите данных, значительно повышая технические барьеры'
                },
                trend3: {
                    title: 'Глубокое применение ИИ технологий',
                    description: 'Искусственный интеллект широко применяется в контроле рисков, анализе клиентов, дизайне игр и других областях'
                },
                trend4: {
                    title: 'Усиленное трансграничное сотрудничество',
                    description: 'Международные лотерейные альянсы и модели сотрудничества многонациональных операторов становятся все более зрелыми'
                },
                trend5: {
                    title: 'Фокус на устойчивое развитие',
                    description: 'ESG концепции интегрированы в лотерейные операции, зеленая лотерея и социальная ответственность становятся ключевыми словами'
                }
            },
            policy: {
                title: 'Отслеживание политики',
                subtitle: 'Отслеживание изменений в глобальной лотерейной политике и регулировании в реальном времени',
                nigeria: {
                    title: 'Принят новый законопроект о лотерее Нигерии',
                    description: 'Разрешает частным операторам участвовать, ожидается рост размера рынка на 300%'
                },
                thailand: {
                    title: 'Запуск пилотного проекта цифровой лотереи в Таиланде',
                    description: 'Первая партия из 5 провинций начинает пилотный проект продаж цифровой лотереи'
                },
                colombia: {
                    title: 'Колумбия пересматривает налоговую политику лотереи',
                    description: 'Снижает налоговую ставку лотереи до 15%, стимулируя рост рынка'
                },
                pakistan: {
                    title: 'Процесс легализации лотереи в Пакистане',
                    description: 'Парламент рассматривает законопроект о легализации лотереи, ожидается принятие в течение года'
                }
            },
            tech_trends: {
                title: 'Технологические тренды',
                subtitle: 'Исследование последних технологических применений и инноваций в лотерейной индустрии',
                ai_prediction: {
                    title: 'Применение ИИ в прогнозировании поведения клиентов',
                    description: 'Алгоритмы машинного обучения помогают операторам лучше понимать потребности клиентов и повышать конверсию продаж'
                },
                anti_counterfeiting: {
                    title: 'Прорыв в технологии защиты от подделки на блокчейне',
                    description: 'Система защиты от подделки лотереи на основе блокчейна обеспечивает прозрачный и надежный процесс розыгрыша'
                },
                intelligent_design: {
                    title: 'Платформа интеллектуального дизайна игр',
                    description: 'Инструменты дизайна игр на основе ИИ быстро генерируют лотерейные игры, отвечающие потребностям локализации'
                },
                read_more: 'Читать далее'
            },
            webinars: {
                title: 'Видеолекции',
                subtitle: 'Глубокий диалог с экспертами индустрии',
                description: 'Приглашение экспертов глобальной лотерейной индустрии для обмена последними рыночными инсайтами и практическим опытом',
                webinar1: {
                    title: 'Обзор и перспективы глобального лотерейного рынка 2024',
                    speaker: 'Д-р Сара Джонсон',
                    role: 'Президент, Международная лотерейная ассоциация',
                    description: 'Глубокий анализ производительности глобального лотерейного рынка 2024, прогноз тенденций развития 2025'
                },
                webinar2: {
                    title: 'Цифровая трансформация: новые возможности для традиционных лотерей',
                    speaker: 'Марк Чен',
                    role: 'CTO LottoBridge',
                    description: 'Обмен успешными кейсами цифровой трансформации, исследование влияния технологических инноваций на лотерейную индустрию'
                },
                webinar3: {
                    title: 'Анализ инвестиционных возможностей лотереи на развивающихся рынках',
                    speaker: 'Карлос Родригес',
                    role: 'Генеральный секретарь, Латиноамериканский лотерейный альянс',
                    description: 'Анализ инвестиционных возможностей и рисков лотереи на развивающихся рынках, таких как Латинская Америка и Африка'
                },
                watch_btn: 'Смотреть повтор'
            },
            subscribe: {
                title: 'Подписаться на отраслевой бюллетень',
                description: 'Получайте последние обновления индустрии, изменения политики и анализ рынка каждую неделю',
                email_placeholder: 'Введите ваш email адрес',
                button: 'Подписаться сейчас',
                privacy_notice: 'Подписываясь, вы соглашаетесь с нашей',
                privacy_policy: 'Политикой конфиденциальности'
            },
            game_innovation: {
                title: 'Игровые инновации',
                subtitle: 'Исследование последних инноваций в лотерейных играх и тенденций дизайна',
                article1: {
                    title: 'Блокчейн-лотерея: будущее прозрачных игр',
                    description: 'Технология блокчейн привносит беспрецедентную прозрачность и доверие в лотерейные игры, умные контракты обеспечивают честный процесс розыгрыша',
                    tag1: 'Блокчейн',
                    tag2: 'Инновации',
                    tag3: 'Прозрачность'
                },
                article2: {
                    title: 'Персонализированный лотерейный опыт на основе ИИ',
                    description: 'Искусственный интеллект анализирует предпочтения игроков для предоставления персонализированных рекомендаций игр и оптимизированного пользовательского опыта',
                    tag1: 'Искусственный интеллект',
                    tag2: 'Персонализация',
                    tag3: 'Пользовательский опыт'
                },
                article3: {
                    title: 'Кроссплатформенная интеграция: конвергенция мобильных и социальных игр',
                    description: 'Современные лотерейные игры интегрируют социальные элементы, позволяя игрокам делиться опытом и участвовать в групповых активностях на разных платформах',
                    tag1: 'Кроссплатформенность',
                    tag2: 'Социальные игры',
                    tag3: 'Мобильная интеграция'
                },
                read_more: 'Читать далее'
            },
            case_compare: {
                title: 'Сравнение кейсов',
                subtitle: 'Сравнительный анализ моделей развития лотерейного рынка в разных странах',
                table: {
                    country: 'Страна',
                    policy_model: 'Модель политики',
                    success_factors: 'Факторы успеха',
                    risk_lessons: 'Уроки рисков'
                },
                chile: {
                    policy_model: 'Государственная монополия с партнерством частных операторов',
                    success_factors: 'Строгое регулирование, прозрачные операции, ориентация на социальное благосостояние',
                    risk_lessons: 'Чрезмерная зависимость от традиционных каналов, медленная цифровая трансформация'
                },
                peru: {
                    policy_model: 'Смешанная модель, позволяющая частным операторам под государственным надзором',
                    success_factors: 'Гибкий доступ к рынку, разнообразные типы игр, активное продвижение',
                    risk_lessons: 'Пробелы в регулировании, недостаточные меры защиты потребителей'
                },
                argentina: {
                    policy_model: 'Провинциальная автономия с федеральной координацией',
                    success_factors: 'Локализованные операции, сильная региональная адаптация',
                    risk_lessons: 'Фрагментированный рынок, несогласованные стандарты между провинциями'
                },
                summary: {
                    title: 'Резюме ключевых выводов',
                    description: 'Через сравнительный анализ различных рыночных моделей мы выявляем три ключевых фактора успеха:',
                    finding1: 'Четкая регулятивная база и прозрачные операции являются основой успеха рынка',
                    finding2: 'Баланс между государственным надзором и рыночной гибкостью способствует здоровой конкуренции',
                    finding3: 'Цифровая трансформация и инновации критически важны для долгосрочного устойчивого развития'
                },
                download_report: 'Скачать полный отчет'
            },
            whitepapers: {
                title: 'Отраслевые белые книги',
                subtitle: 'Углубленные исследовательские отчеты и анализ индустрии',
                report1: {
                    title: 'Отчет о цифровой трансформации глобальной лотереи 2024',
                    description: 'Комплексный анализ тенденций, вызовов и возможностей цифровой трансформации в глобальной лотерейной индустрии'
                },
                report2: {
                    title: 'Руководство по инвестициям в лотерею на развивающихся рынках',
                    description: 'Детальный анализ возможностей, рисков и инвестиционных стратегий лотерейного рынка в развивающихся экономиках'
                },
                report3: {
                    title: 'Применение ИИ и блокчейна в лотерейной индустрии',
                    description: 'Исследование того, как искусственный интеллект и технология блокчейн преобразуют будущее лотерейных операций'
                },
                download_btn: 'Скачать отчет'
            }
        },
        // Кейсы
        case_studies: {
            page: {
                title: 'Кейсы | LottoBridge'
            },
            hero: {
                title: 'Глобальные истории успеха',
                description: 'Изучите наши успешные лотерейные проекты по всему миру и узнайте, как LottoBridge помогает клиентам достигать своих бизнес-целей',
                btn_view_all: 'Посмотреть все кейсы',
                btn_contact: 'Связаться с нами'
            },
            filters: {
                region: {
                    title: 'Регион',
                    all: 'Все регионы',
                    asia: 'Азия',
                    europe: 'Европа',
                    africa: 'Африка',
                    america: 'Америка'
                },
                project_type: {
                    title: 'Тип проекта',
                    all: 'Все типы',
                    system: 'Разработка системы',
                    printing: 'Печать билетов',
                    consulting: 'Консультационные услуги',
                    training: 'Операционное обучение'
                },
                service: {
                    title: 'Содержание услуг',
                    all: 'Все услуги',
                    lottery_system: 'Лотерейная система',
                    terminal: 'Терминальное оборудование',
                    game_design: 'Дизайн игр',
                    market_research: 'Исследование рынка'
                },
                year: {
                    title: 'Год',
                    all: 'Все годы',
                    year_2024: '2024',
                    year_2023: '2023',
                    year_2022: '2022'
                },
                reset_btn: 'Сбросить фильтры',
                apply_btn: 'Применить фильтры'
            },
            cases: {
                cambodia: {
                    title: 'Партнерство по локализации лотерейной системы',
                    type: 'Разработка системы + Развертывание терминалов',
                    feature1: 'Полная настройка лотерейной системы + локальное развертывание терминалов + обучение CRM модулю',
                    feature2: 'Поддержка кхмерского интерфейса системы и интеграции Android терминалов',
                    testimonial: '"Локальная сеть продаж запущена быстро, развернуто более 1200 POS терминалов, прогнозируемое годовое увеличение продаж на $22 млн, рост более 42%"'
                },
                uganda: {
                    title: 'Быстрое развертывание проекта мгновенных билетов',
                    type: 'Печать билетов + Логистический экспорт',
                    feature1: 'Консультации по категориям лотереи + безопасный дизайн билетов + печать мгновенных билетов',
                    feature2: 'Предоставлено 10 пользовательских типов билетов, все прошли проверку местного правительства',
                    testimonial: '"Цикл проекта всего 4 месяца, удовлетворенность билетами достигла 92%, термобумага и печатная продукция успешно прошли налоговую сертификацию, быстрый выход на рынок"'
                },
                brazil: {
                    title: 'Стратегические консультации и предварительное исследование системы',
                    type: 'Консультационное партнерство + Исследование рынка',
                    feature1: 'Анализ политики входа на рынок + исследование ИИ + планирование онлайн лотерейной системы',
                    feature2: 'Предоставлено 4 раунда политических обсуждений + связи с местными экспертами + поддержка белой книги',
                    testimonial: '"Помогли клиенту разработать 3-летнюю дорожную карту развития, поддерживая подтверждение направления стратегических инвестиций"'
                },
                uzbekistan: {
                    title: 'Полнофункциональное лотерейное решение',
                    type: 'Разработка системы + Операционное обучение',
                    feature1: 'Разработка лотерейной системы + терминальное оборудование + обучение операционной команды',
                    feature2: 'Поддержка узбекского языкового интерфейса, полное локализованное развертывание',
                    testimonial: '"Система работает стабильно в течение 18 месяцев, сеть продаж покрывает основные города по всей стране, среднемесячный рост продаж 35%"'
                },
                view_details: 'Посмотреть детали',
                download_brief: 'Скачать краткое описание'
            },
            cta: {
                title: 'Готовы начать свой лотерейный проект?',
                description: 'Свяжитесь с нашей экспертной командой для получения индивидуальных решений и консультаций по проекту',
                contact_btn: 'Связаться сейчас',
                download_btn: 'Скачать сборник кейсов'
            }
        },
        footer: {
            company: {
                description: '全球彩票行业一站式解决方案提供商，致力于为世界各国提供专业、可靠的彩票技术与服务。'
            },
            products: {
                title: '产品服务',
                lottery_system: '彩票系统服务',
                terminal_equipment: '终端设备服务',
                game_design: '游戏设计与开发',
                printing_service: '票券印刷服务',
                market_research: '市场调研服务'
            },
            resources: {
                title: '资源中心',
                case_studies: '案例研究',
                whitepapers: '白皮书下载',
                industry_reports: '行业报告',
                blog_news: '博客与新闻',
                faq: '常见问题',
                insights: '行业洞察',
                technical_docs: '技术文档',
                download_center: '下载中心'
            },
            contact: {
                title: '联系我们',
                address: '中国深圳市南山区'
            },
            copyright: '© 2024 LottoBridge. 保留所有权利。',
            privacy_policy: '隐私政策',
            terms_of_service: '使用条款'
        }
    },
    en: {
        // Page title
        page: {
            title: 'LottoBridge | Global Lottery Industry One-Stop Solution Platform'
        },
        nav: {
            home: 'Home',
            market_research: 'Market Research',
            products: 'Products & Services',
            insights: 'Industry Insights',
            case_studies: 'Case Studies',
            about: 'About Us',
            contact: 'Contact Us'
        },
        // Case Studies Page
        case_studies: {
            page: {
                title: 'Case Studies | LottoBridge'
            },
            hero: {
                title: 'Global Success Stories',
                description: 'Explore our successful lottery projects worldwide and learn how LottoBridge helps clients achieve their business goals',
                btn_view_all: 'View All Cases',
                btn_contact: 'Contact Us'
            },
            filters: {
                region: {
                    title: 'Region',
                    all: 'All Regions',
                    asia: 'Asia',
                    europe: 'Europe',
                    africa: 'Africa',
                    america: 'America'
                },
                project_type: {
                    title: 'Project Type',
                    all: 'All Types',
                    system: 'System Development',
                    printing: 'Ticket Printing',
                    consulting: 'Consulting Services',
                    training: 'Operation Training'
                },
                service: {
                    title: 'Service Content',
                    all: 'All Services',
                    lottery_system: 'Lottery System',
                    terminal: 'Terminal Equipment',
                    game_design: 'Game Design',
                    market_research: 'Market Research'
                },
                year: {
                    title: 'Year',
                    all: 'All Years',
                    year_2024: '2024',
                    year_2023: '2023',
                    year_2022: '2022'
                },
                reset_btn: 'Reset Filters',
                apply_btn: 'Apply Filters'
            },
            cases: {
                cambodia: {
                    title: 'Lottery System Localization Partnership',
                    type: 'System Development + Terminal Deployment',
                    feature1: 'Full lottery system customization + local terminal deployment + CRM module training',
                    feature2: 'Support for Khmer system interface and Android terminal integration',
                    testimonial: '"Local sales network launched rapidly, deployed over 1,200 POS terminals, projected annual sales increase of $22 million, growth over 42%"'
                },
                uganda: {
                    title: 'Instant Ticket Project Rapid Deployment',
                    type: 'Ticket Printing + Logistics Export',
                    feature1: 'Lottery category consulting + secure ticket design + instant ticket printing',
                    feature2: 'Provided 10 custom ticket types, all passed local government review',
                    testimonial: '"Project cycle only 4 months, ticket satisfaction survey reached 92%, thermal paper and printed products successfully passed tax certification, rapid market launch"'
                },
                brazil: {
                    title: 'Strategic Consulting & System Pre-research',
                    type: 'Consulting Partnership + Market Research',
                    feature1: 'Market entry policy analysis + AI research + online lottery system planning',
                    feature2: 'Provided 4 rounds of policy discussions + local expert connections + white paper support',
                    testimonial: '"Assisted client in developing 3-year development roadmap, supporting strategic investment direction confirmation"'
                },
                uzbekistan: {
                    title: 'Full-stack Lottery Solution',
                    type: 'System Development + Operation Training',
                    feature1: 'Lottery system development + terminal equipment + operation team training',
                    feature2: 'Support for Uzbek language interface, complete localization deployment',
                    testimonial: '"System running stably for 18 months, sales network covers major cities nationwide, monthly average sales growth 35%"'
                },
                view_details: 'View Details',
                download_brief: 'Download Brief'
            },
            cta: {
                title: 'Ready to Start Your Lottery Project?',
                description: 'Contact our expert team for customized solutions and project consultation',
                contact_btn: 'Contact Now',
                download_btn: 'Download Case Collection'
            }
        },
        // Industry Insights Page
        insights: {
            page: {
                title: 'Industry Insights | LottoBridge'
            },
            hero: {
                title: 'Global Lottery Industry Insights',
                description: 'In-depth analysis of global lottery market trends, policy developments, and technological innovations to support your decision-making',
                btn_view_trends: 'View Trend Reports',
                btn_subscribe: 'Subscribe to Industry Brief'
            },
            nav_categories: {
                policy_tracking: 'Policy & Regulation Tracking',
                market_trends: 'Market Trend Reports',
                tech_trends: 'Technology Trend Analysis',
                case_studies: 'Case Studies',
                industry_reports: 'Industry Reports',
                webinars: 'Video Lectures'
            },
            trends: {
                title: 'Trend Analysis',
                subtitle: 'Global lottery industry development trends based on big data analysis',
                card_title: '2025 Global Lottery Industry Five Major Trends Outlook',
                card_description: 'The global lottery industry is undergoing profound transformation',
                trend1: {
                    title: 'Accelerated Digital Transformation',
                    description: 'Mobile sales will account for over 60%, cloud lottery systems become mainstream choice'
                },
                trend2: {
                    title: 'Enhanced Regulatory Compliance Requirements',
                    description: 'Countries strengthen anti-money laundering, data protection compliance requirements, significantly raising technical barriers'
                },
                trend3: {
                    title: 'Deep AI Technology Application',
                    description: 'Artificial intelligence widely applied in risk control, customer analysis, game design and other fields'
                },
                trend4: {
                    title: 'Increased Cross-border Cooperation',
                    description: 'International lottery alliances and multinational operator cooperation models increasingly mature'
                },
                trend5: {
                    title: 'Focus on Sustainable Development',
                    description: 'ESG concepts integrated into lottery operations, green lottery and social responsibility become keywords'
                }
            },
            policy: {
                title: 'Policy Tracking',
                subtitle: 'Real-time tracking of global lottery policy and regulatory changes',
                nigeria: {
                    title: 'Nigeria New Lottery Bill Passed',
                    description: 'Allows private operators to participate, market size expected to grow 300%'
                },
                thailand: {
                    title: 'Thailand Digital Lottery Pilot Launched',
                    description: 'First batch of 5 provinces begin digital lottery sales pilot project'
                },
                colombia: {
                    title: 'Colombia Revises Lottery Tax Policy',
                    description: 'Reduces lottery tax rate to 15%, stimulating market growth'
                },
                pakistan: {
                    title: 'Pakistan Lottery Legalization Process',
                    description: 'Parliament reviewing lottery legalization bill, expected to pass within the year'
                }
            },
            tech_trends: {
                title: 'Technology Trends',
                subtitle: 'Exploring the latest technology applications and innovations in the lottery industry',
                ai_prediction: {
                    title: 'AI Applications in Customer Behavior Prediction',
                    description: 'Machine learning algorithms help operators better understand customer needs and improve sales conversion rates'
                },
                anti_counterfeiting: {
                    title: 'Blockchain Anti-counterfeiting Technology Breakthrough',
                    description: 'Blockchain-based lottery anti-counterfeiting system ensures transparent and trustworthy drawing process'
                },
                intelligent_design: {
                    title: 'Intelligent Game Design Platform',
                    description: 'AI-driven game design tools quickly generate lottery games that meet localization needs'
                },
                read_more: 'Read More'
            },
            webinars: {
                title: 'Video Lectures',
                subtitle: 'In-depth Dialogue with Industry Experts',
                description: 'Inviting global lottery industry experts to share latest market insights and practical experience',
                webinar1: {
                    title: '2024 Global Lottery Market Review and Outlook',
                    speaker: 'Dr. Sarah Johnson',
                    role: 'President, International Lottery Association',
                    description: 'In-depth analysis of 2024 global lottery market performance, predicting 2025 development trends'
                },
                webinar2: {
                    title: 'Digital Transformation: New Opportunities for Traditional Lotteries',
                    speaker: 'Mark Chen',
                    role: 'LottoBridge CTO',
                    description: 'Sharing digital transformation success cases, exploring the impact of technological innovation on the lottery industry'
                },
                webinar3: {
                    title: 'Emerging Market Lottery Investment Opportunity Analysis',
                    speaker: 'Carlos Rodriguez',
                    role: 'Secretary General, Latin American Lottery Alliance',
                    description: 'Analyzing lottery investment opportunities and risks in emerging markets like Latin America and Africa'
                },
                watch_btn: 'Watch Replay'
            },
            subscribe: {
                title: 'Subscribe to Industry Brief',
                description: 'Get the latest industry updates, policy changes, and market analysis weekly',
                email_placeholder: 'Enter your email address',
                button: 'Subscribe Now',
                privacy_notice: 'By subscribing, you agree to our',
                privacy_policy: 'Privacy Policy'
            },
            game_innovation: {
                title: 'Game Innovation',
                subtitle: 'Exploring the latest lottery game innovations and design trends',
                article1: {
                    title: 'Blockchain Lottery: The Future of Transparent Gaming',
                    description: 'Blockchain technology brings unprecedented transparency and trust to lottery games, with smart contracts ensuring fair drawing processes',
                    tag1: 'Blockchain',
                    tag2: 'Innovation',
                    tag3: 'Transparency'
                },
                article2: {
                    title: 'AI-Driven Personalized Lottery Experience',
                    description: 'Artificial intelligence analyzes player preferences to provide personalized game recommendations and optimized user experience',
                    tag1: 'Artificial Intelligence',
                    tag2: 'Personalization',
                    tag3: 'User Experience'
                },
                article3: {
                    title: 'Cross-Platform Integration: Mobile and Social Gaming Convergence',
                    description: 'Modern lottery games integrate social elements, enabling players to share experiences and participate in group activities across platforms',
                    tag1: 'Cross-Platform',
                    tag2: 'Social Gaming',
                    tag3: 'Mobile Integration'
                },
                read_more: 'Read More'
            },
            case_compare: {
                title: 'Case Comparison',
                subtitle: 'Comparative analysis of lottery market development models in different countries',
                table: {
                    country: 'Country',
                    policy_model: 'Policy Model',
                    success_factors: 'Success Factors',
                    risk_lessons: 'Risk Lessons'
                },
                chile: {
                    policy_model: 'Government monopoly with private operator partnerships',
                    success_factors: 'Strict regulation, transparent operations, social welfare orientation',
                    risk_lessons: 'Over-reliance on traditional channels, slow digital transformation'
                },
                peru: {
                    policy_model: 'Mixed model allowing private operators under government oversight',
                    success_factors: 'Flexible market access, diverse game types, active promotion',
                    risk_lessons: 'Regulatory gaps, insufficient consumer protection measures'
                },
                argentina: {
                    policy_model: 'Provincial autonomy with federal coordination',
                    success_factors: 'Localized operations, strong regional adaptation',
                    risk_lessons: 'Fragmented market, inconsistent standards across provinces'
                },
                summary: {
                    title: 'Key Findings Summary',
                    description: 'Through comparative analysis of different market models, we identify three key success factors:',
                    finding1: 'Clear regulatory framework and transparent operations are fundamental to market success',
                    finding2: 'Balancing government oversight with market flexibility promotes healthy competition',
                    finding3: 'Digital transformation and innovation are crucial for long-term sustainable development'
                },
                download_report: 'Download Full Report'
            },
            whitepapers: {
                title: 'Industry Whitepapers',
                subtitle: 'In-depth research reports and industry analysis',
                report1: {
                    title: '2024 Global Lottery Digital Transformation Report',
                    description: 'Comprehensive analysis of digital transformation trends, challenges, and opportunities in the global lottery industry'
                },
                report2: {
                    title: 'Emerging Markets Lottery Investment Guide',
                    description: 'Detailed analysis of lottery market opportunities, risks, and investment strategies in emerging economies'
                },
                report3: {
                    title: 'AI and Blockchain Applications in Lottery Industry',
                    description: 'Exploring how artificial intelligence and blockchain technology are reshaping the future of lottery operations'
                },
                download_btn: 'Download Report'
            }
        },
        // Products Page
        products: {
            page: {
                title: 'Products & Services | LottoBridge'
            },
            hero: {
                title: 'Global Lottery One-Stop Solutions',
                description: 'Integrating China\'s core lottery industry chain resources, providing full-process services from market research, system development, terminal equipment to operational support',
                btn_view_services: 'View Service Solutions',
                btn_contact_consultant: 'Contact Sales Consultant'
            },
            services: {
                title: 'Our Core Products & Services',
                description: 'LottoBridge provides not just a product list, but a one-stop implementable lottery solution package from "research, design, systems, equipment, training, export, cooperation"',
                lottery_system: {
                    title: 'Lottery System Services',
                    description: 'Complete lottery sales, drawing, and settlement system solutions, supporting various lottery games and meeting different countries\' regulatory requirements',
                    feature1: 'Support multi-language, multi-game, multi-terminal access',
                    feature2: 'Provide both SaaS cloud services and local private deployment solutions',
                    feature3: 'Support integration with regulatory platforms, financial systems, and big data analytics backends',
                    feature4: 'Include sales management, drawing management, anti-counterfeiting traceability, CRM customer management modules'
                },
                terminal_equipment: {
                    title: 'Lottery Terminal Equipment Services',
                    description: 'Provide various lottery sales terminal equipment, including self-service terminals, portable terminals, POS machines, etc., meeting different sales scenario requirements',
                    feature1: 'Self-service lottery sales terminals (supporting touch screen operation, multiple payment methods)',
                    feature2: 'Portable lottery sales terminals (suitable for mobile sales, small outlets)',
                    feature3: 'Lottery-specific POS machines (integrated printing, scanning, payment functions)',
                    feature4: 'Equipment remote monitoring, fault diagnosis, software upgrade services'
                },
                game_design: {
                    title: 'Lottery Game Design & Development',
                    description: 'Based on rich Chinese lottery market experience, customize lottery game products that comply with local regulations and culture for overseas clients',
                    feature1: 'Full-category game design including digital, lotto, sports betting, instant games',
                    feature2: 'Game rule localization, prize structure optimization, winning probability design',
                    feature3: 'Game UI/UX design, multimedia material production',
                    feature4: 'Game mathematical model verification, third-party audit support'
                },
                printing: {
                    title: 'Lottery Ticket Printing & Thermal Paper Services',
                    description: 'Provide high-quality lottery ticket printing services, including instant lottery tickets, thermal paper tickets, etc., ensuring anti-counterfeiting security and printing quality',
                    feature1: 'Instant lottery ticket printing (scratch-off, tear-off, etc.)',
                    feature2: 'Thermal paper lottery ticket printing (suitable for terminal equipment ticket printing)',
                    feature3: 'Anti-counterfeiting technology application (watermarks, security threads, special inks, etc.)',
                    feature4: 'Print quality inspection, packaging delivery, inventory management services'
                },
                consulting: {
                    title: 'Market Research & Consulting Services',
                    description: 'Professional team provides full-process consulting services from market entry analysis to business implementation',
                    feature1: 'AI-driven one-click generation of 132+ country market reports',
                    feature2: 'Including core data on legal environment, market size, mainstream games',
                    feature3: 'Provide business model construction and financial forecasting services',
                    feature4: 'Cooperation model and legal compliance recommendations'
                },
                training: {
                    title: 'Operational Training Services',
                    description: 'Provide systematic training for various stages of lottery operations, ensuring teams get up to speed quickly',
                    feature1: 'System operation training (sales terminals, backend management)',
                    feature2: 'Sales process and terminal maintenance training',
                    feature3: 'Agent management and commission policy design',
                    feature4: 'Data analysis and customer service training'
                }
            },
            cases: {
                title: 'Global Success Stories',
                description: 'Our solutions have been successfully implemented in multiple countries and regions, bringing innovation and growth to local lottery markets',
                mexico: {
                    title: 'Mexico Lottery System Project',
                    description: 'Provided complete digital lottery system for Mexico National Lottery, supporting multiple game types with annual sales exceeding $1 billion',
                    stat1: 'Annual Sales (USD)',
                    stat2: 'Sales Outlets'
                },
                south_africa: {
                    title: 'South Africa National Lottery Instant Ticket Supply',
                    description: 'Provided 120 million customized instant tickets for South Africa National Lottery, including 12 local cultural theme designs, delivered within 6 months'
                },
                vietnam: {
                    title: 'Vietnam Lottery Digital Transformation Project',
                    description: 'Assisted Vietnam Lottery Company in completing digital transformation, deploying cloud lottery system and training 300 technical personnel, achieving 40% sales increase'
                }
            },
            cta: {
                title: 'Ready to Start Your Lottery Business?',
                description: 'Contact our expert team to get customized solutions and detailed quotations',
                btn_contact: 'Contact Now',
                btn_market_report: 'View Market Reports',
                btn_download: 'Download Service Manual'
            }
        },
        // Market Research Page
        market_research: {
            page: {
                title: 'Market Research | LottoBridge'
            },
            hero: {
                title: 'Unlock Global Lottery Opportunities with AI-powered Market Research',
                subtitle: 'Quickly grasp global lottery market policies, scale, and opportunities',
                description: 'Powered by LottoBridge AI global market intelligence system, providing one-stop national lottery data insights to help you make informed market decisions',
                btn_select_country: 'Select Country',
                btn_generate_report: 'Generate Report',
                btn_view_sample: 'View Sample Report'
            },
            country_search: {
                title: 'Select Your Country of Interest',
                placeholder: 'Search countries or regions...',
                filter_all: 'All',
                filter_asia: 'Asia',
                filter_europe: 'Europe',
                filter_africa: 'Africa',
                filter_america: 'Americas',
                filter_english: 'English-speaking',
                filter_emerging: 'Emerging Markets',
                coverage: 'Currently covering 132 countries and regions'
            },
            recommended_markets: {
                title: 'Recommended Markets'
            },
            countries: {
                labels: {
                    market_status: 'Market Status:',
                    lottery_types: 'Lottery Types:',
                    annual_sales: 'Annual Sales Est.:',
                    main_structure: 'Main Structure:',
                    typical_games: 'Typical Games:'
                },
                buttons: {
                    view_details: 'View Details',
                    download_report: 'Download Report',
                    book_consultation: 'Book Consultation'
                },
                egypt: {
                    name: 'Egypt',
                    description: 'Largest lottery market in North Africa',
                    market_status: 'Legal Operation',
                    lottery_types: 'Lotto, Instant, Digital',
                    annual_sales: 'Approx. $430 million',
                    main_structure: 'National Lottery Authority',
                    typical_games: '6/49, 4D, Scratch-off'
                },
                mexico: {
                    name: 'Mexico',
                    description: 'Leading market in Latin America',
                    market_status: 'Private Access',
                    lottery_types: 'Lotto, Sports Betting',
                    annual_sales: 'Approx. $1.25 billion',
                    main_structure: 'Cooperative Operators',
                    typical_games: 'Melate, Chispazo'
                },
                philippines: {
                    name: 'Philippines',
                    description: 'High-growth market in Southeast Asia',
                    market_status: 'Private Access',
                    lottery_types: 'Lotto, Instant, Electronic Games',
                    annual_sales: 'Approx. $870 million',
                    main_structure: 'Private Independent Operation',
                    typical_games: 'Ultra Lotto 6/58'
                }
            },
            report_preview: {
                title: 'Egypt Lottery Market In-depth Report',
                tabs: {
                    overview: 'Country Overview',
                    regulations: 'Laws & Regulations',
                    market_size: 'Market Size',
                    product_structure: 'Product Structure',
                    key_players: 'Key Players',
                    business_opportunities: 'Business Opportunities'
                },
                content: {
                    overview: {
                        title: 'Country Overview',
                        demographics: 'Egypt is the most populous country in the Arab world with over 100 million people, 60% of whom are under 30 years old. Internet penetration reaches 65%, and mobile payment usage is growing rapidly.',
                        history: 'Lottery has a long history in Egypt, dating back to the 1960s. The revised "Lottery and Gaming Law" in 2018 laid the foundation for market modernization.',
                        legal_development: 'Lottery Legal Development Process',
                        timeline_1960: '1960: Egypt first introduced the national lottery system',
                        timeline_2018: '2018: Revised "Lottery and Gaming Law", allowing private operators to participate',
                        timeline_2021: '2021: Launched digital lottery pilot project'
                    },
                    regulations: {
                        regulations_info: 'Egypt lottery is regulated by the "Lottery and Gaming Law" (2018 revised edition), enforced by the Ministry of Finance Lottery Regulatory Authority. All lottery operators must obtain government licenses and comply with strict financial reporting requirements.',
                        policy_framework: 'Current Policy Framework'
                    },
                    market_size: {
                        historical_sales: 'Historical sales data shows that Egypt\'s lottery market has maintained steady growth over the past 5 years, with an average annual growth rate of about 12%. Total sales in 2023 reached $430 million, with lotto games accounting for 65%, instant tickets 25%, and digital games 10%.',
                        growth_potential: 'Growth Potential Rating',
                        growth_potential_rating: 'Growth Potential: ★★★★☆'
                    }
                },
                download: {
                    title: 'Download Complete Report',
                    description: 'Get detailed analysis report of Egypt lottery market, including investment recommendations and business opportunity assessment',
                    form: {
                        email: 'Email Address',
                        company: 'Company Name',
                        country: 'Country/Region',
                        country_placeholder: 'Please Select',
                        china: 'China',
                        usa: 'United States',
                        subscribe_label: 'Subscribe to industry updates',
                        submit_button: 'Download Now'
                    }
                },
                recent_updates: {
                    title: 'Recent Updates',
                    uzbekistan: {
                        title: 'Uzbekistan Lottery Market Report',
                        update_time: 'Updated: Dec 2024',
                        tag1: 'Emerging Market',
                        tag2: 'Private Access',
                        tag3: 'High Growth Potential'
                    },
                    cambodia: {
                        title: 'Cambodia Lottery Market Report',
                        update_time: 'Updated: Jan 2025',
                        tag1: 'Government Partnership',
                        tag2: 'POS Terminals',
                        tag3: 'Centralized Distribution'
                    },
                    nigeria: {
                        title: 'Nigeria Lottery Market Report',
                        update_time: 'Updated: Nov 2024',
                        tag1: 'High Population',
                        tag2: 'Low Penetration',
                        tag3: 'Regulatory Gray Area'
                    }
                },
                testimonials: {
                    title: 'Customer Reviews',
                    testimonial_text: 'LottoBridge\'s market report provided valuable insights for our entry into the Egyptian market, helping us develop a successful localization strategy.',
                    testimonial_author: 'James Zhang',
                    testimonial_title: 'International Business Director'
                },
                cta: {
                    title: 'Ready to Enter the Egyptian Lottery Market?',
                    description: 'Contact our expert team for customized market entry strategies and solutions',
                    contact: 'Contact Expert',
                    demo: 'Book Demo'
                }
            }
        },
        // Contact Page
        contact: {
            page: {
                title: 'Contact Us | LottoBridge'
            },
            hero: {
                title: 'Contact Us',
                description: 'Ready to start your global lottery business? Our expert team is ready to provide professional consultation and customized solutions.',
                btn_submit: 'Submit Partnership Inquiry',
                btn_direct: 'Contact Us Directly'
            },
            form: {
                title: 'Partnership Inquiry Form',
                description: 'Please fill out the form below and our team will contact you within 24 hours',
                company_name: 'Company Name *',
                company_name_placeholder: 'Please enter your company name',
                contact_person: 'Contact Person *',
                contact_person_placeholder: 'Please enter contact person name',
                position: 'Position',
                position_placeholder: 'Please enter your position',
                email: 'Email Address *',
                phone: 'Phone / WhatsApp',
                country: 'Country/Region',
                // Country names translations
                country_china: 'China',
                country_usa: 'United States',
                country_uk: 'United Kingdom',
                country_japan: 'Japan',
                country_korea: 'South Korea',
                country_russia: 'Russia',
                country_brazil: 'Brazil',
                country_india: 'India',
                needs: 'Your Needs *',
                need_report: 'Generate Market Report',
                need_system: 'Lottery System',
                need_printing: 'Printing & Terminal Procurement',
                need_compliance: 'Compliance & Implementation',
                need_other: 'Other',
                message: 'Additional Information',
                message_placeholder: 'Describe your project background, specific questions or goals',
                upload: 'Upload Attachments',
                upload_text: 'Drag and drop files here or click to upload',
                upload_format: 'Supports PDF/PPT/DOC formats, max 10MB',
                language_preference: 'Language Preference',
                lang_english: 'English',
                lang_chinese: 'Chinese',
                lang_russian: 'Russian',
                lang_arabic: 'Arabic',
                privacy: 'I have read and agree to the <a href="#">Privacy Policy</a> *',
                submit: 'Submit Partnership Inquiry',
                schedule: 'Schedule Expert Consultation',
                footer: 'By submitting this form, you agree that we will process your personal information according to our privacy policy'
            },
            direct: {
                title: 'Don\'t want to fill out the form?',
                description: 'You can also contact us directly through the following methods',
                email: 'Email',
                send_email: 'Send Email',
                send_message: 'Send Message',
                contact_us: 'Contact Us',
                phone: 'Phone',
                work_hours: 'Working Hours: UTC+8 09:00–18:00',
                call: 'Make a Call',
                wechat: 'WeChat',
                scan_qr: 'Scan QR code to add customer service'
            },
            global: {
                title: 'We Serve 100+ Countries and Regions Worldwide',
                description: 'LottoBridge has successfully implemented projects in multiple countries and regions',
                africa: 'Africa',
                africa_desc: 'We have representative offices or partners in multiple African countries, including Nigeria, Kenya, South Africa, etc.',
                manager: 'Regional Manager: Sarah Johnson',
                asia: 'Asia',
                asia_desc: 'Covering Southeast Asia, South Asia and Middle East markets, including Vietnam, Cambodia, Philippines, UAE, etc.',
                manager_asia: 'Regional Manager: David Chen',
                latam: 'Latin America',
                latam_desc: 'Serving Mexico, Brazil, Colombia, Argentina and other Latin American markets',
                manager_latam: 'Regional Manager: Maria Gonzalez'
            }
        },
        hero: {
            title: 'Global Lottery Industry One-Stop Solution Platform',
            subtitle: 'Leveraging China\'s robust lottery industry chain resources to help clients worldwide quickly enter the lottery market',
            cta_primary: 'AI-Generated Market Research Report',
            cta_secondary: 'Contact Our Consultants'
        },
        features: {
            title: 'What We Can Do for You',
            subtitle: 'LottoBridge is not just a B2B platform, but a comprehensive lottery business implementation system that helps clients go from "opportunity assessment" to "implementation" in one step',
            consulting: {
                title: 'Pre-consultation & Market Planning',
                description: 'AI global market research engine generates professional reports on lottery policies, market size, and risk analysis for 100+ countries with one click'
            },
            products: {
                title: 'Products & Technical Services',
                description: 'Complete lottery system services, terminal equipment supply chain, lottery game design & development, ticket printing & thermal paper services'
            },
            support: {
                title: 'Operational Support & Implementation Services',
                description: 'Training & operational guidance, supply-demand matching & order management, export & compliance support, strategic partner matching'
            }
        },
        solutions: {
            title: 'Our Core Solutions',
            subtitle: 'Customized products and services for different market needs',
            software: {
                title: 'Lottery System Software',
                description: 'Complete lottery sales, drawing, and settlement systems supporting various lottery games and meeting different countries\' regulatory requirements'
            },
            hardware: {
                title: 'Terminal Hardware Equipment',
                description: 'High-performance lottery terminals, self-service ticket machines, mobile sales devices adapted to various sales scenarios'
            },
            printing: {
                title: 'Ticket Printing Services',
                description: 'Secure anti-counterfeiting instant ticket printing compliant with international security standards, supporting customized design'
            },
            learn_more: 'Learn More'
        },
        global: {
            title: 'Global Market Coverage',
            subtitle: 'Our solutions have been successfully implemented in multiple countries and regions worldwide',
            regions: {
                latin_america: 'Latin America',
                africa: 'Africa',
                southeast_asia: 'Southeast Asia',
                central_eastern_europe: 'Central & Eastern Europe',
                middle_east: 'Middle East'
            }
        },
        testimonials: {
            title: 'Client Testimonials',
            subtitle: 'Hear how our partners evaluate LottoBridge\'s services',
            quote: 'LottoBridge provided us with a complete lottery system solution, taking only 3 months from market research to system implementation. Their professional team and one-stop service greatly reduced our operational risks.',
            author_name: 'Carlos Mendez',
            author_title: 'CEO, Mexican Lottery Operator'
        },
        cta: {
            title: 'Ready to Enter the Global Lottery Market?',
            subtitle: 'Whether you are a government agency, private operator, or technology provider, LottoBridge can provide you with the most suitable solution',
            contact_now: 'Consult Now',
            book_demo: 'Schedule Demo'
        },
        footer: {
            company_name: 'LottoBridge',
            company_description: 'Global lottery industry one-stop solution platform, leveraging China\'s robust lottery industry chain resources to help clients worldwide quickly enter the lottery market.',
            products_services: 'Products & Services',
            market_research: 'Market Research & Consulting',
            lottery_systems: 'Lottery System Solutions',
            terminal_equipment: 'Terminal Equipment Supply',
            game_design: 'Game Design & Development',
            ticket_printing: 'Ticket Printing Services',
            resource_center: 'Resource Center',
            industry_reports: 'Industry Reports',
            case_studies: 'Case Studies',
            whitepapers: 'Whitepapers Download',
            blog_news: 'Blog & News',
            faq: 'FAQ',
            contact_us: 'Contact Us',
            address: 'Century Avenue 1000, Pudong New Area, Shanghai, China',
            rights_reserved: 'All rights reserved.',
            privacy_policy: 'Privacy Policy',
            terms_of_use: 'Terms of Use',
            company: {
                description: 'Global lottery industry one-stop solution platform, leveraging China\'s robust lottery industry chain resources to help clients worldwide quickly enter the lottery market.'
            },
            products: {
                title: 'Products & Services',
                lottery_system: 'Lottery System Solutions',
                terminal_equipment: 'Terminal Equipment Supply',
                game_design: 'Game Design & Development',
                printing: 'Ticket Printing Services',
                market_research: 'Market Research & Consulting'
            },
            resources: {
                title: 'Resource Center',
                case_studies: 'Case Studies',
                whitepapers: 'Whitepapers Download',
                industry_reports: 'Industry Reports',
                blog_news: 'Blog & News',
                faq: 'FAQ',
                insights: 'Industry Insights',
                technical_docs: 'Technical Documentation',
                download_center: 'Download Center'
            },
            contact: {
                title: 'Contact Us',
                address: 'Century Avenue 1000, Pudong New Area, Shanghai, China'
            },
            copyright: 'All rights reserved.',
            privacy_policy: 'Privacy Policy',
            terms_of_service: 'Terms of Service'
        },
        // About Us Page
        about: {
            page: {
                title: 'About Us | LottoBridge'
            },
            hero: {
                title: 'About LottoBridge',
                description: 'A professional platform connecting global lottery markets, providing one-stop solutions for government agencies and private operators',
                learn_team: 'Meet Our Team',
                contact_us: 'Contact Us'
            },
            who_we_are: {
                title: 'Who We Are',
                subtitle: 'Global Lottery One-Stop Solution Platform',
                paragraph1: 'Founded in 2023, LottoBridge is a comprehensive service platform focused on the global lottery market. Leveraging China\'s robust lottery industry chain resources, we integrate core capabilities including system software, terminal hardware, ticket printing, and thermal consumables to provide complete solutions from market research to business implementation for global clients.',
                paragraph2: 'As a bridge connecting China\'s lottery industry chain with global markets, we are not just a B2B platform, but a packaged lottery business implementation system. We help clients go from "is there an opportunity" to "how to implement" in one step, significantly reducing the risks and costs of entering new markets.'
            },
            vision: {
                title: 'Our Vision',
                subtitle: 'To become the most trusted partner in the global lottery industry',
                paragraph1: 'In today\'s globalized world, the lottery industry is facing unprecedented development opportunities. Governments increasingly recognize the role of lotteries as fundraising tools for public welfare, while technological advances have brought new possibilities to the lottery industry.',
                paragraph2: 'However, entering a new lottery market is not easy. From understanding policies and regulations, to choosing technical solutions, to establishing supply chains, every step is full of challenges. This is exactly why LottoBridge exists.',
                challenges: {
                    title: 'Core challenges we help clients solve:',
                    challenge1: 'High market entry barriers and complex policies and regulations',
                    challenge2: 'Difficult technical solution selection and scattered suppliers',
                    challenge3: 'Insufficient localization operation experience',
                    challenge4: 'High investment risks and uncertain return cycles'
                }
            },
            values: {
                title: 'Core Values',
                subtitle: 'Basic principles guiding our actions',
                professionalism: {
                    title: 'Professionalism',
                    description: 'Deep expertise in the lottery industry, providing the most professional technical solutions and market insights'
                },
                internationalization: {
                    title: 'Internationalization',
                    description: 'Global perspective with localized services, understanding the unique needs of different markets'
                },
                transparency: {
                    title: 'Transparency',
                    description: 'Open and transparent cooperation methods, ensuring clients clearly understand every step'
                },
                cooperation: {
                    title: 'Win-Win Cooperation',
                    description: 'Building long-term partnerships with clients, growing together and sharing success'
                }
            },
            team: {
                title: 'Our Team',
                subtitle: 'Lottery industry experts from around the world',
                members: {
                    zhang_wei: {
                        name: 'Zhang Wei',
                        position: 'Founder & CEO',
                        description: '15 years of lottery industry experience, participated in multiple national lottery system construction projects, with deep understanding of global lottery market policies and technology trends.',
                        languages: 'Chinese, English, Russian'
                    },
                    maria_gonzalez: {
                        name: 'Maria Gonzalez',
                        position: 'Latin America Market Director',
                        description: 'Senior expert in Latin American lottery industry with rich government relations and market development experience, fluent in Spanish and Portuguese markets.',
                        languages: 'Spanish, Portuguese, English'
                    },
                    li_ming: {
                        name: 'Li Ming',
                        position: 'Chief Technology Officer',
                        description: 'Senior software architect focused on lottery system development for over 10 years, led the design of multiple large-scale lottery platforms with deep expertise in system security and performance optimization.',
                        languages: 'Chinese, English'
                    },
                    sarah_johnson: {
                        name: 'Sarah Johnson',
                        position: 'Africa Market Director',
                        description: 'African market development expert with rich project implementation experience in Kenya, Nigeria and other regions, with deep understanding of lottery policy environments across African countries.',
                        languages: 'English, French, Swahili'
                    },
                    wang_qiang: {
                        name: 'Wang Qiang',
                        position: 'Supply Chain Director',
                        description: '20 years of manufacturing and supply chain management experience, responsible for integrating high-quality Chinese lottery equipment manufacturer resources, ensuring product quality and delivery efficiency.',
                        languages: 'Chinese, English'
                    },
                    chen_jing: {
                        name: 'Chen Jing',
                        position: 'Compliance & Legal Director',
                        description: 'International trade and lottery industry legal expert, proficient in lottery regulations and international trade rules of various countries, providing professional compliance guidance for clients.',
                        languages: 'Chinese, English, French'
                    }
                }
            },
            partners: {
                title: 'Partners',
                subtitle: 'Establishing strategic partnerships with industry-leading companies'
            },
            credentials: {
                title: 'Qualifications & Certifications',
                subtitle: 'Professional qualifications ensuring service quality',
                iso: {
                    title: 'ISO 9001 Quality Management System Certification',
                    description: 'Certified by International Organization for Standardization Quality Management System'
                },
                export: {
                    title: 'Printed Products Export Qualification',
                    description: 'Complete qualification chain for lottery printed products export'
                },
                software: {
                    title: 'Lottery Industry Software Copyright',
                    description: '2 core system software copyrights registered'
                },
                experience: {
                    title: 'Multi-country Project Implementation Experience',
                    description: 'Projects successfully implemented in Nigeria, Cambodia, Uzbekistan and other locations'
                },
                exhibitions: {
                    title: 'Exhibition & Alliance Participation',
                    description: 'Participated in industry events including Dubai Gaming Expo, Kenya GBC, Southeast Asia Digital Expo'
                }
            },
            commitment: {
                title: 'We Believe',
                subtitle: 'Technology, compliance, and trust are the three pillars driving sustainable development of global lottery business',
                paragraph1: 'LottoBridge is committed to becoming a trusted "core connection platform" for global clients. We not only provide products and services, but are dedicated to building long-term partnerships, helping clients succeed in the rapidly changing global lottery market.',
                promise_title: 'Our Commitment:',
                promise1: 'Always maintain forward-looking insights into industry trends',
                promise2: 'Adhere to the highest standards of compliance and security requirements',
                promise3: 'Continuously optimize global supply chain and localization service capabilities',
                promise4: 'Grow together with clients and share success'
            },
            cta: {
                title: 'Ready to Explore Global Markets with Us?',
                description: 'Whether you are a government agency, private operator, or technology provider, LottoBridge can provide the most suitable solutions for you',
                contact_now: 'Contact Now',
                view_cases: 'View Success Stories'
            }
        }
    },
    fr: {
        // Titre de la page
        page: {
            title: 'LottoBridge | Plateforme de solutions complètes pour l\'industrie mondiale de la loterie'
        },
        nav: {
            home: 'Accueil',
            market_research: 'Recherche de Marché',
            products: 'Produits et Services',
            insights: 'Perspectives Industrielles',
            case_studies: 'Études de Cas',
            about: 'À Propos de Nous',
            contact: 'Nous Contacter'
        },
        // Page Perspectives Industrielles
        insights: {
            page: {
                title: 'Perspectives Industrielles | LottoBridge'
            },
            hero: {
                title: 'Perspectives de l\'Industrie Mondiale de la Loterie',
                description: 'Analyse approfondie des tendances du marché mondial de la loterie, développements politiques et innovations technologiques pour soutenir votre prise de décision',
                btn_view_trends: 'Voir les Rapports de Tendances',
                btn_subscribe: 'S\'abonner au Bulletin Industriel'
            },
            nav_categories: {
                policy_tracking: 'Suivi des Politiques et Réglementations',
                market_trends: 'Rapports de Tendances du Marché',
                tech_trends: 'Analyse des Tendances Technologiques',
                case_studies: 'Études de Cas',
                industry_reports: 'Rapports Industriels',
                webinars: 'Conférences Vidéo'
            },
            trends: {
                title: 'Analyse des Tendances',
                subtitle: 'Tendances de développement de l\'industrie mondiale de la loterie basées sur l\'analyse de big data',
                card_title: 'Perspectives des Cinq Principales Tendances de l\'Industrie Mondiale de la Loterie 2025',
                card_description: 'L\'industrie mondiale de la loterie subit une transformation profonde',
                trend1: {
                    title: 'Transformation Numérique Accélérée',
                    description: 'Les ventes mobiles représenteront plus de 60%, les systèmes de loterie cloud deviennent le choix principal'
                },
                trend2: {
                    title: 'Exigences de Conformité Réglementaire Renforcées',
                    description: 'Les pays renforcent les exigences de conformité anti-blanchiment et protection des données, élevant significativement les barrières techniques'
                },
                trend3: {
                    title: 'Application Profonde de la Technologie IA',
                    description: 'L\'intelligence artificielle largement appliquée dans le contrôle des risques, analyse client, conception de jeux et autres domaines'
                },
                trend4: {
                    title: 'Coopération Transfrontalière Accrue',
                    description: 'Les alliances de loterie internationales et modèles de coopération d\'opérateurs multinationaux deviennent de plus en plus matures'
                },
                trend5: {
                    title: 'Focus sur le Développement Durable',
                    description: 'Les concepts ESG intégrés dans les opérations de loterie, loterie verte et responsabilité sociale deviennent des mots-clés'
                }
            },
            policy: {
                title: 'Suivi des Politiques',
                subtitle: 'Suivi en temps réel des changements de politique et réglementation de loterie mondiale',
                nigeria: {
                    title: 'Nouveau Projet de Loi sur la Loterie du Nigeria Adopté',
                    description: 'Permet aux opérateurs privés de participer, taille du marché attendue de croître de 300%'
                },
                thailand: {
                    title: 'Lancement du Pilote de Loterie Numérique en Thaïlande',
                    description: 'Premier lot de 5 provinces commence le projet pilote de ventes de loterie numérique'
                },
                colombia: {
                    title: 'La Colombie Révise la Politique Fiscale de la Loterie',
                    description: 'Réduit le taux de taxe de loterie à 15%, stimulant la croissance du marché'
                },
                pakistan: {
                    title: 'Processus de Légalisation de la Loterie au Pakistan',
                    description: 'Le parlement examine le projet de loi de légalisation de la loterie, attendu d\'être adopté dans l\'année'
                }
            },
            tech_trends: {
                title: 'Tendances Technologiques',
                subtitle: 'Explorer les dernières applications technologiques et innovations dans l\'industrie de la loterie',
                ai_prediction: {
                    title: 'Applications IA dans la Prédiction du Comportement Client',
                    description: 'Les algorithmes d\'apprentissage automatique aident les opérateurs à mieux comprendre les besoins clients et améliorer les taux de conversion des ventes'
                },
                anti_counterfeiting: {
                    title: 'Percée de la Technologie Anti-contrefaçon Blockchain',
                    description: 'Système anti-contrefaçon de loterie basé sur blockchain assure un processus de tirage transparent et fiable'
                },
                intelligent_design: {
                    title: 'Plateforme de Conception de Jeux Intelligente',
                    description: 'Outils de conception de jeux pilotés par IA génèrent rapidement des jeux de loterie répondant aux besoins de localisation'
                },
                read_more: 'Lire Plus'
            },
            webinars: {
                title: 'Conférences Vidéo',
                subtitle: 'Dialogue Approfondi avec les Experts de l\'Industrie',
                description: 'Inviter des experts de l\'industrie mondiale de la loterie à partager les dernières perspectives du marché et expérience pratique',
                webinar1: {
                    title: 'Revue et Perspectives du Marché Mondial de la Loterie 2024',
                    speaker: 'Dr. Sarah Johnson',
                    role: 'Présidente, Association Internationale de la Loterie',
                    description: 'Analyse approfondie de la performance du marché mondial de la loterie 2024, prédiction des tendances de développement 2025'
                },
                webinar2: {
                    title: 'Transformation Numérique : Nouvelles Opportunités pour les Loteries Traditionnelles',
                    speaker: 'Mark Chen',
                    role: 'CTO LottoBridge',
                    description: 'Partage de cas de succès de transformation numérique, exploration de l\'impact de l\'innovation technologique sur l\'industrie de la loterie'
                },
                webinar3: {
                    title: 'Analyse des Opportunités d\'Investissement en Loterie des Marchés Émergents',
                    speaker: 'Carlos Rodriguez',
                    role: 'Secrétaire Général, Alliance de Loterie Latino-Américaine',
                    description: 'Analyse des opportunités et risques d\'investissement en loterie dans les marchés émergents comme l\'Amérique Latine et l\'Afrique'
                },
                watch_btn: 'Regarder la Rediffusion'
            },
            subscribe: {
                title: 'S\'abonner au Bulletin Industriel',
                description: 'Obtenez les dernières mises à jour de l\'industrie, changements de politique et analyse de marché chaque semaine',
                email_placeholder: 'Entrez votre adresse e-mail',
                button: 'S\'abonner Maintenant',
                privacy_notice: 'En vous abonnant, vous acceptez notre',
                privacy_policy: 'Politique de Confidentialité'
            }
        },
        // Page Produits
        products: {
            page: {
                title: 'Produits et Services | LottoBridge'
            },
            hero: {
                title: 'Solutions Globales de Loterie Tout-en-Un',
                description: 'Intégrant les ressources de la chaîne industrielle de loterie de base de la Chine, fournissant des services complets de la recherche de marché, développement de systèmes, équipements terminaux au support opérationnel',
                btn_view_services: 'Voir les Solutions de Service',
                btn_contact_consultant: 'Contacter un Consultant Commercial'
            },
            services: {
                title: 'Nos Produits et Services Principaux',
                description: 'LottoBridge fournit non seulement une liste de produits, mais un package de solutions de loterie implémentables tout-en-un de "recherche, conception, systèmes, équipements, formation, exportation, coopération"',
                lottery_system: {
                    title: 'Services de Système de Loterie',
                    description: 'Solutions complètes de système de vente, tirage et règlement de loterie, supportant divers jeux de loterie et répondant aux exigences réglementaires de différents pays',
                    feature1: 'Support multi-langue, multi-jeu, accès multi-terminal',
                    feature2: 'Fournir des services cloud SaaS et des solutions de déploiement privé local',
                    feature3: 'Support d\'intégration avec les plateformes réglementaires, systèmes financiers et backends d\'analyse de big data',
                    feature4: 'Inclure la gestion des ventes, gestion des tirages, traçabilité anti-contrefaçon, modules de gestion CRM client'
                },
                terminal_equipment: {
                    title: 'Services d\'Équipement Terminal de Loterie',
                    description: 'Fournir divers équipements terminaux de vente de loterie, incluant terminaux libre-service, terminaux portables, machines POS, etc., répondant aux exigences de différents scénarios de vente',
                    feature1: 'Terminaux de vente de loterie libre-service (supportant opération écran tactile, méthodes de paiement multiples)',
                    feature2: 'Terminaux de vente de loterie portables (adaptés pour vente mobile, petits points de vente)',
                    feature3: 'Machines POS spécialisées loterie (fonctions d\'impression, scan, paiement intégrées)',
                    feature4: 'Surveillance à distance d\'équipement, diagnostic de panne, services de mise à jour logicielle'
                },
                game_design: {
                    title: 'Conception et Développement de Jeux de Loterie',
                    description: 'Basé sur la riche expérience du marché de loterie chinois, personnaliser des produits de jeux de loterie conformes aux réglementations et culture locales pour les clients étrangers',
                    feature1: 'Conception de jeux toutes catégories incluant numérique, loto, paris sportifs, jeux instantanés',
                    feature2: 'Localisation des règles de jeu, optimisation de structure de prix, conception de probabilité de gain',
                    feature3: 'Conception UI/UX de jeu, production de matériel multimédia',
                    feature4: 'Vérification de modèle mathématique de jeu, support d\'audit tiers'
                },
                printing: {
                    title: 'Services d\'Impression de Billets de Loterie et Papier Thermique',
                    description: 'Fournir des services d\'impression de billets de loterie de haute qualité, incluant billets de loterie instantanés, billets papier thermique, etc., assurant sécurité anti-contrefaçon et qualité d\'impression',
                    feature1: 'Impression de billets de loterie instantanés (grattage, déchirement, etc.)',
                    feature2: 'Impression de billets de loterie papier thermique (adaptés pour impression de billets d\'équipement terminal)',
                    feature3: 'Application de technologie anti-contrefaçon (filigranes, fils de sécurité, encres spéciales, etc.)',
                    feature4: 'Inspection de qualité d\'impression, livraison d\'emballage, services de gestion d\'inventaire'
                },
                consulting: {
                    title: 'Services de Recherche de Marché et Conseil',
                    description: 'Équipe professionnelle fournit des services de conseil complets de l\'analyse d\'entrée de marché à l\'implémentation commerciale',
                    feature1: 'Génération en un clic de rapports de marché de 132+ pays pilotée par IA',
                    feature2: 'Incluant données de base sur environnement légal, taille de marché, jeux principaux',
                    feature3: 'Fournir construction de modèle commercial et services de prévision financière',
                    feature4: 'Recommandations de modèle de coopération et conformité légale'
                },
                training: {
                    title: 'Services de Formation Opérationnelle',
                    description: 'Fournir formation systématique pour diverses étapes d\'opérations de loterie, assurant que les équipes deviennent rapidement opérationnelles',
                    feature1: 'Formation d\'opération système (terminaux de vente, gestion backend)',
                    feature2: 'Formation de processus de vente et maintenance de terminal',
                    feature3: 'Gestion d\'agent et conception de politique de commission',
                    feature4: 'Formation d\'analyse de données et service client'
                }
            },
            cases: {
                title: 'Histoires de Succès Mondiales',
                description: 'Nos solutions ont été implémentées avec succès dans plusieurs pays et régions, apportant innovation et croissance aux marchés de loterie locaux',
                mexico: {
                    title: 'Projet de Système de Loterie du Mexique',
                    description: 'Fourni système de loterie numérique complet pour la Loterie Nationale du Mexique, supportant plusieurs types de jeux avec ventes annuelles dépassant 1 milliard de dollars',
                    stat1: 'Ventes Annuelles (USD)',
                    stat2: 'Points de Vente'
                },
                south_africa: {
                    title: 'Fourniture de Billets Instantanés Loterie Nationale Afrique du Sud',
                    description: 'Fourni 120 millions de billets instantanés personnalisés pour la Loterie Nationale d\'Afrique du Sud, incluant 12 conceptions thématiques culturelles locales, livrés en 6 mois'
                },
                vietnam: {
                    title: 'Projet de Transformation Numérique Loterie Vietnam',
                    description: 'Assisté la Compagnie de Loterie du Vietnam dans la transformation numérique complète, déployant système de loterie cloud et formant 300 personnels techniques, réalisant 40% d\'augmentation des ventes'
                }
            },
            cta: {
                title: 'Prêt à Entrer sur le Marché Mondial de la Loterie?',
                subtitle: 'Que vous soyez une agence gouvernementale, un opérateur privé ou un fournisseur de technologie, LottoBridge peut vous fournir la solution la plus appropriée',
                contact_now: 'Consulter Maintenant',
                book_demo: 'Planifier une Démo'
            }
        },
        // Page de Recherche de Marché
        market_research: {
            page: {
                title: 'Recherche de Marché | LottoBridge'
            },
            hero: {
                title: 'Débloquez les Opportunités Mondiales de Loterie avec la Recherche de Marché Alimentée par l\'IA',
                subtitle: 'Saisissez rapidement les politiques, l\'échelle et les opportunités du marché mondial de la loterie',
                description: 'Alimenté par le système d\'intelligence de marché mondial LottoBridge AI, fournissant des informations de données de loterie nationales en un seul endroit pour vous aider à prendre des décisions de marché éclairées',
                btn_select_country: 'Sélectionner un Pays',
                btn_generate_report: 'Générer un Rapport',
                btn_view_sample: 'Voir un Exemple de Rapport'
            },
            country_search: {
                title: 'Sélectionnez Votre Pays d\'Intérêt',
                placeholder: 'Rechercher des pays ou régions...',
                filter_all: 'Tous',
                filter_asia: 'Asie',
                filter_europe: 'Europe',
                filter_africa: 'Afrique',
                filter_america: 'Amériques',
                filter_english: 'Anglophones',
                filter_emerging: 'Marchés Émergents',
                coverage: 'Couvre actuellement 132 pays et régions'
            },
            recommended_markets: {
                title: 'Marchés Recommandés'
            },
            countries: {
                labels: {
                    market_status: 'Statut du Marché:',
                    lottery_types: 'Types de Loterie:',
                    annual_sales: 'Ventes Annuelles Est.:',
                    main_structure: 'Structure Principale:',
                    typical_games: 'Jeux Typiques:'
                },
                buttons: {
                    view_details: 'Voir les Détails',
                    download_report: 'Télécharger le Rapport',
                    book_consultation: 'Réserver une Consultation'
                },
                egypt: {
                    name: 'Égypte',
                    description: 'Plus grand marché de loterie en Afrique du Nord',
                    market_status: 'Opération Légale',
                    lottery_types: 'Loto, Instantané, Numérique',
                    annual_sales: 'Environ 430 millions $',
                    main_structure: 'Autorité Nationale de Loterie',
                    typical_games: '6/49, 4D, Grattage'
                },
                mexico: {
                    name: 'Mexique',
                    description: 'Marché leader en Amérique Latine',
                    market_status: 'Accès Privé',
                    lottery_types: 'Loto, Paris Sportifs',
                    annual_sales: 'Environ 1,25 milliard $',
                    main_structure: 'Opérateurs Coopératifs',
                    typical_games: 'Melate, Chispazo'
                },
                philippines: {
                    name: 'Philippines',
                    description: 'Marché à forte croissance en Asie du Sud-Est',
                    market_status: 'Accès Privé',
                    lottery_types: 'Loto, Instantané, Jeux Électroniques',
                    annual_sales: 'Environ 870 millions $',
                    main_structure: 'Opération Privée Indépendante',
                    typical_games: 'Ultra Lotto 6/58'
                }
            },
            report_preview: {
                title: 'Rapport Approfondi du Marché de Loterie Égyptien',
                tabs: {
                    overview: 'Aperçu du Pays',
                    regulations: 'Lois et Réglementations',
                    market_size: 'Taille du Marché',
                    product_structure: 'Structure des Produits',
                    key_players: 'Acteurs Clés',
                    business_opportunities: 'Opportunités Commerciales'
                },
                content: {
                    overview: {
                        title: 'Aperçu du Pays',
                        demographics: 'L\'Égypte est le pays le plus peuplé du monde arabe avec plus de 100 millions d\'habitants, dont 60% ont moins de 30 ans. La pénétration d\'Internet atteint 65%, et l\'utilisation des paiements mobiles croît rapidement.',
                        history: 'La loterie a une longue histoire en Égypte, remontant aux années 1960. La "Loi sur la Loterie et les Jeux" révisée en 2018 a posé les bases de la modernisation du marché.',
                        legal_development: 'Processus de Développement Légal de la Loterie',
                        timeline_1960: '1960: L\'Égypte a d\'abord introduit le système national de loterie',
                        timeline_2018: '2018: Révision de la "Loi sur la Loterie et les Jeux", permettant aux opérateurs privés de participer',
                        timeline_2021: '2021: Lancement du projet pilote de loterie numérique'
                    }
                }
            },
            download: {
                title: 'Télécharger le Rapport PDF Complet',
                description: 'Inscrivez-vous pour télécharger le rapport complet + mises à jour mondiales mensuelles, entièrement gratuit !',
                form: {
                    email: 'Adresse E-mail',
                    company: 'Nom de l\'Entreprise',
                    country: 'Pays',
                    country_placeholder: 'Veuillez Sélectionner',
                    china: 'Chine',
                    usa: 'États-Unis',
                    subscribe: 'S\'abonner au rapport mensuel d\'intelligence de marché LottoBridge',
                    submit: 'Obtenir Maintenant'
                }
            },
            recent_updates: {
                title: 'Rapports Récemment Mis à Jour',
                uzbekistan: {
                    title: 'Rapport du Marché de Loterie d\'Ouzbékistan',
                    update_time: 'Mis à jour : Déc 2024',
                    tag1: 'Marché Émergent',
                    tag2: 'Accès Privé',
                    tag3: 'Potentiel de Croissance Élevé'
                },
                cambodia: {
                    title: 'Rapport du Marché de Loterie du Cambodge',
                    update_time: 'Mis à jour : Jan 2025',
                    tag1: 'Partenariat Gouvernemental',
                    tag2: 'Terminaux POS',
                    tag3: 'Distribution Centralisée'
                },
                nigeria: {
                    title: 'Rapport du Marché de Loterie du Nigeria',
                    update_time: 'Mis à jour : Nov 2024',
                    tag1: 'Population Élevée',
                    tag2: 'Faible Pénétration',
                    tag3: 'Zone Grise Réglementaire'
                }
            },
            testimonials: {
                title: 'Évaluations Clients',
                testimonial1: {
                    text: 'Nous avons obtenu des rapports de recherche de loterie pour 5 pays d\'Amérique latine via LottoBridge, et avons finalement choisi le Mexique comme premier choix d\'implémentation. L\'analyse des politiques et les prévisions de taille de marché dans le rapport étaient très précises, nous faisant économiser beaucoup de temps de recherche préliminaire.',
                    author_name: 'Zhang Wei',
                    author_title: 'PDG, Fournisseur de Services Technologiques de Loterie d\'Asie du Sud-Est'
                }
            },
            cta: {
                title: 'Vous n\'avez pas trouvé l\'intelligence de marché dont vous avez besoin ?',
                description: 'Notre équipe d\'experts peut vous fournir des services de recherche de marché personnalisés',
                btn_custom_research: 'Soumettre une Demande de Recherche Personnalisée',
                btn_contact_support: 'Contacter le Service Client'
            }
        },
        hero: {
            title: 'Plateforme de solutions complètes pour l\'industrie mondiale de la loterie',
            subtitle: 'Exploitant les ressources robustes de la chaîne industrielle de la loterie chinoise pour aider les clients du monde entier à entrer rapidement sur le marché de la loterie',
            cta_primary: 'Rapport d\'Étude de Marché Généré par IA',
            cta_secondary: 'Contacter Nos Consultants'
        },
        features: {
            title: 'Ce Que Nous Pouvons Faire Pour Vous',
            subtitle: 'LottoBridge n\'est pas seulement une plateforme B2B, mais un système complet de mise en œuvre d\'activités de loterie qui aide les clients à passer de "l\'évaluation des opportunités" à "la mise en œuvre" en une seule étape',
            consulting: {
                title: 'Pré-consultation et Planification de Marché',
                desc: 'Le moteur de recherche de marché mondial IA génère des rapports professionnels sur les politiques de loterie, la taille du marché et l\'analyse des risques pour plus de 100 pays en un clic'
            },
            products: {
                title: 'Produits et Services Techniques',
                desc: 'Services complets de système de loterie, chaîne d\'approvisionnement d\'équipements terminaux, conception et développement de jeux de loterie, services d\'impression de billets et de papier thermique'
            },
            support: {
                title: 'Support Opérationnel et Services de Mise en Œuvre',
                desc: 'Formation et orientation opérationnelle, correspondance offre-demande et gestion des commandes, support d\'exportation et de conformité, correspondance de partenaires stratégiques'
            }
        },
        solutions: {
            title: 'Nos Solutions Principales',
            subtitle: 'Produits et services personnalisés pour différents besoins de marché',
            software: {
                title: 'Logiciel de Système de Loterie',
                description: 'Systèmes complets de vente, tirage et règlement de loterie supportant divers jeux de loterie et répondant aux exigences réglementaires de différents pays'
            },
            hardware: {
                title: 'Équipement Matériel Terminal',
                description: 'Terminaux de loterie haute performance, machines de billets en libre-service, dispositifs de vente mobiles adaptés à divers scénarios de vente'
            },
            printing: {
                title: 'Services d\'Impression de Billets',
                description: 'Impression de billets instantanés anti-contrefaçon sécurisée conforme aux normes de sécurité internationales, supportant la conception personnalisée'
            },
            learn_more: 'En Savoir Plus'
        },
        global: {
            title: 'Couverture de Marché Mondiale',
            subtitle: 'Nos solutions ont été mises en œuvre avec succès dans plusieurs pays et régions du monde',
            regions: {
                latinAmerica: 'Amérique Latine',
                africa: 'Afrique',
                southeastAsia: 'Asie du Sud-Est',
                centralEasternEurope: 'Europe Centrale et Orientale',
                middleEast: 'Moyen-Orient'
            }
        },
        testimonials: {
            title: 'Témoignages Clients',
            subtitle: 'Écoutez comment nos partenaires évaluent les services de LottoBridge',
            quote: 'LottoBridge nous a fourni une solution complète de système de loterie, ne prenant que 3 mois de la recherche de marché à la mise en œuvre du système. Leur équipe professionnelle et leur service tout-en-un ont considérablement réduit nos risques opérationnels.',
            author: 'Carlos Mendez',
            position: 'PDG, Opérateur de Loterie Mexicain'
        },
        cta: {
            title: 'Prêt à Entrer sur le Marché Mondial de la Loterie ?',
            subtitle: 'Que vous soyez une agence gouvernementale, un opérateur privé ou un fournisseur de technologie, LottoBridge peut vous fournir la solution la plus adaptée',
            btn1: 'Consulter Maintenant',
            btn2: 'Programmer une Démo'
        },
        footer: {
            company: {
                description: 'LottoBridge est une plateforme B2B leader de l\'industrie mondiale de la loterie, dédiée à fournir aux clients des solutions tout-en-un de la recherche de marché à l\'implémentation de système.'
            },
            products: {
                title: 'Produits et Services',
                lottery_system: 'Solutions de Systèmes de Loterie',
                terminal_equipment: 'Fourniture d\'Équipements Terminaux',
                game_design: 'Conception et Développement de Jeux',
                printing: 'Services d\'Impression de Billets',
                market_research: 'Recherche de Marché et Conseil'
            },
            resources: {
                title: 'Centre de Ressources',
                case_studies: 'Études de Cas',
                whitepapers: 'Téléchargement de Livres Blancs',
                industry_reports: 'Rapports de l\'Industrie',
                blog_news: 'Blog et Actualités',
                faq: 'FAQ',
                insights: 'Perspectives Industrielles',
                technical_docs: 'Documentation Technique',
                download_center: 'Centre de Téléchargement'
            },
            contact: {
                title: 'Nous Contacter',
                address: 'Avenue du Siècle 1000, Nouvelle Zone de Pudong, Shanghai, Chine',
                form: {
                    company_name: 'Nom de l\'Entreprise',
                    contact_person: 'Personne de Contact',
                    position: 'Poste',
                    email: 'Adresse E-mail',
                    phone: 'Numéro de Téléphone',
                    country: 'Pays/Région',
                    needs: 'Besoins Commerciaux',
                    message: 'Message',
                    upload: 'Télécharger des Fichiers',
                    language_preference: 'Préférence Linguistique',
                    privacy: 'J\'accepte la',
                    privacy_policy: 'Politique de Confidentialité',
                    submit: 'Soumettre',
                    schedule: 'Planifier une Consultation',
                    countries: {
                        china: 'Chine',
                        usa: 'États-Unis',
                        uk: 'Royaume-Uni',
                        japan: 'Japon',
                        korea: 'Corée du Sud',
                        russia: 'Russie',
                        brazil: 'Brésil',
                        india: 'Inde'
                    }
                }
            },
            copyright: 'Tous droits réservés.',
            privacy_policy: 'Politique de Confidentialité',
            terms_of_service: 'Conditions de Service'
        },
        about: {
            page: {
                title: 'À Propos de Nous | LottoBridge'
            },
            hero: {
                title: 'À Propos de LottoBridge',
                description: 'Une plateforme professionnelle connectant les marchés mondiaux de la loterie, fournissant des solutions tout-en-un pour les agences gouvernementales et les opérateurs privés',
                learn_team: 'Rencontrer Notre Équipe',
                contact_us: 'Nous Contacter'
            },
            who_we_are: {
                title: 'Qui Nous Sommes',
                subtitle: 'Plateforme de Solutions Complètes de Loterie Mondiale',
                paragraph1: 'Fondée en 2023, LottoBridge est une plateforme de services complets axée sur le marché mondial de la loterie. En tirant parti des ressources robustes de la chaîne industrielle de la loterie chinoise, nous intégrons les capacités principales incluant les logiciels système, le matériel terminal, l\'impression de billets et les consommables thermiques pour fournir des solutions complètes de la recherche de marché à l\'implémentation commerciale pour les clients mondiaux.',
                paragraph2: 'En tant que pont reliant la chaîne industrielle de la loterie chinoise aux marchés mondiaux, nous ne sommes pas seulement une plateforme B2B, mais un système d\'implémentation commerciale de loterie packagé. Nous aidons les clients à passer de "y a-t-il une opportunité" à "comment implémenter" en une étape, réduisant significativement les risques et coûts d\'entrée sur de nouveaux marchés.'
            },
            vision: {
                title: 'Notre Vision',
                subtitle: 'Devenir le partenaire le plus fiable de l\'industrie mondiale de la loterie',
                paragraph1: 'Dans le monde globalisé d\'aujourd\'hui, l\'industrie de la loterie fait face à des opportunités de développement sans précédent. Les gouvernements reconnaissent de plus en plus le rôle des loteries comme outils de collecte de fonds pour le bien-être public, tandis que les avancées technologiques ont apporté de nouvelles possibilités à l\'industrie de la loterie.',
                paragraph2: 'Cependant, entrer sur un nouveau marché de loterie n\'est pas facile. De la compréhension des politiques et réglementations, au choix de solutions techniques, à l\'établissement de chaînes d\'approvisionnement, chaque étape est pleine de défis. C\'est exactement pourquoi LottoBridge existe.',
                challenges: {
                    title: 'Défis principaux que nous aidons les clients à résoudre :',
                    challenge1: 'Barrières d\'entrée de marché élevées et politiques et réglementations complexes',
                    challenge2: 'Sélection difficile de solutions techniques et fournisseurs dispersés',
                    challenge3: 'Expérience d\'opération de localisation insuffisante',
                    challenge4: 'Risques d\'investissement élevés et cycles de retour incertains'
                }
            },
            values: {
                title: 'Valeurs Fondamentales',
                subtitle: 'Principes de base guidant nos actions',
                professionalism: {
                    title: 'Professionnalisme',
                    description: 'Expertise approfondie dans l\'industrie de la loterie, fournissant les solutions techniques et perspectives de marché les plus professionnelles'
                },
                internationalization: {
                    title: 'Internationalisation',
                    description: 'Perspective mondiale avec services localisés, comprenant les besoins uniques de différents marchés'
                },
                transparency: {
                    title: 'Transparence',
                    description: 'Méthodes de coopération ouvertes et transparentes, assurant que les clients comprennent clairement chaque étape'
                },
                cooperation: {
                    title: 'Coopération Gagnant-Gagnant',
                    description: 'Construire des partenariats à long terme avec les clients, grandir ensemble et partager le succès'
                }
            },
            team: {
                title: 'Notre Équipe',
                subtitle: 'Experts de l\'industrie de la loterie du monde entier',
                members: {
                    zhang_wei: {
                        name: 'Zhang Wei',
                        position: 'Fondateur et PDG',
                        description: '15 ans d\'expérience dans l\'industrie de la loterie, a participé à plusieurs projets de construction de systèmes de loterie nationaux, avec une compréhension approfondie des politiques et tendances technologiques du marché mondial de la loterie.',
                        languages: 'Chinois, Anglais, Russe'
                    },
                    maria_gonzalez: {
                        name: 'Maria Gonzalez',
                        position: 'Directrice du Marché Amérique Latine',
                        description: 'Experte senior de l\'industrie de la loterie latino-américaine avec une riche expérience en relations gouvernementales et développement de marché, maîtrisant les marchés espagnol et portugais.',
                        languages: 'Espagnol, Portugais, Anglais'
                    },
                    li_ming: {
                        name: 'Li Ming',
                        position: 'Directeur Technique Principal',
                        description: 'Architecte logiciel senior axé sur le développement de systèmes de loterie depuis plus de 10 ans, a dirigé la conception de plusieurs plateformes de loterie à grande échelle avec une expertise approfondie en sécurité système et optimisation des performances.',
                        languages: 'Chinois, Anglais'
                    },
                    sarah_johnson: {
                        name: 'Sarah Johnson',
                        position: 'Directrice du Marché Africain',
                        description: 'Experte en développement de marché africain avec une riche expérience d\'implémentation de projets au Kenya, Nigeria et autres régions, avec une compréhension approfondie des environnements politiques de loterie à travers les pays africains.',
                        languages: 'Anglais, Français, Swahili'
                    },
                    wang_qiang: {
                        name: 'Wang Qiang',
                        position: 'Directeur de la Chaîne d\'Approvisionnement',
                        description: '20 ans d\'expérience en fabrication et gestion de chaîne d\'approvisionnement, responsable de l\'intégration des ressources de fabricants d\'équipements de loterie chinois de haute qualité, assurant la qualité des produits et l\'efficacité de livraison.',
                        languages: 'Chinois, Anglais'
                    },
                    chen_jing: {
                        name: 'Chen Jing',
                        position: 'Directrice Conformité et Juridique',
                        description: 'Experte en commerce international et droit de l\'industrie de la loterie, maîtrisant les réglementations de loterie et règles de commerce international de divers pays, fournissant des conseils de conformité professionnels pour les clients.',
                        languages: 'Chinois, Anglais, Français'
                    }
                }
            },
            partners: {
                title: 'Partenaires',
                subtitle: 'Établir des partenariats stratégiques avec des entreprises leaders de l\'industrie'
            },
            credentials: {
                title: 'Qualifications et Certifications',
                subtitle: 'Qualifications professionnelles assurant la qualité du service',
                iso: {
                    title: 'Certification Système de Gestion de la Qualité ISO 9001',
                    description: 'Certifié par le Système de Gestion de la Qualité de l\'Organisation Internationale de Normalisation'
                },
                export: {
                    title: 'Qualification d\'Exportation de Produits Imprimés',
                    description: 'Chaîne de qualification complète pour l\'exportation de produits imprimés de loterie'
                },
                software: {
                    title: 'Droits d\'Auteur Logiciel Industrie Loterie',
                    description: '2 droits d\'auteur de logiciels système principaux enregistrés'
                },
                experience: {
                    title: 'Expérience d\'Implémentation de Projets Multi-pays',
                    description: 'Projets implémentés avec succès au Nigeria, Cambodge, Ouzbékistan et autres lieux'
                },
                exhibitions: {
                    title: 'Participation à Expositions et Alliances',
                    description: 'Participé à des événements industriels incluant Dubai Gaming Expo, Kenya GBC, Southeast Asia Digital Expo'
                }
            },
            commitment: {
                title: 'Nous Croyons',
                subtitle: 'La technologie, la conformité et la confiance sont les trois piliers conduisant le développement durable des affaires de loterie mondiale',
                paragraph1: 'LottoBridge s\'engage à devenir une "plateforme de connexion centrale" de confiance pour les clients mondiaux. Nous ne fournissons pas seulement des produits et services, mais nous nous consacrons à construire des partenariats à long terme, aidant les clients à réussir dans le marché mondial de la loterie en évolution rapide.',
                promise_title: 'Notre Engagement :',
                promise1: 'Maintenir toujours des perspectives avant-gardistes sur les tendances de l\'industrie',
                promise2: 'Adhérer aux plus hauts standards de conformité et exigences de sécurité',
                promise3: 'Optimiser continuellement la chaîne d\'approvisionnement mondiale et les capacités de service de localisation',
                promise4: 'Grandir ensemble avec les clients et partager le succès'
            },
            cta: {
                title: 'Prêt à Explorer les Marchés Mondiaux avec Nous ?',
                description: 'Que vous soyez une agence gouvernementale, un opérateur privé ou un fournisseur de technologie, LottoBridge peut fournir les solutions les plus appropriées pour vous',
                contact_now: 'Contacter Maintenant',
                view_cases: 'Voir les Histoires de Succès'
            }
        }
    },
    es: {
        // Título de la página
        page: {
            title: 'LottoBridge | Plataforma de Soluciones Integrales para Exportación de Loterías Globales'
        },
        nav: {
            home: 'Inicio',
            market_research: 'Investigación de Mercado',
            products: 'Productos y Servicios',
            insights: 'Perspectivas de la Industria',
            case_studies: 'Casos de Estudio',
            about: 'Acerca de Nosotros',
            contact: 'Contáctanos'
        },
        // Página de Perspectivas de la Industria
        insights: {
            page: {
                title: 'Perspectivas de la Industria | LottoBridge'
            },
            hero: {
                title: 'Perspectivas de la Industria Global de Loterías',
                description: 'Análisis profundo de tendencias del mercado global de loterías, desarrollos políticos e innovaciones tecnológicas para apoyar tu toma de decisiones',
                btn_view_trends: 'Ver Informes de Tendencias',
                btn_subscribe: 'Suscribirse al Boletín de la Industria'
            },
            nav_categories: {
                policy_tracking: 'Seguimiento de Políticas y Regulaciones',
                market_trends: 'Informes de Tendencias del Mercado',
                tech_trends: 'Análisis de Tendencias Tecnológicas',
                case_studies: 'Casos de Estudio',
                industry_reports: 'Informes de la Industria',
                webinars: 'Conferencias en Video'
            },
            trends: {
                title: 'Análisis de Tendencias',
                subtitle: 'Tendencias de desarrollo de la industria global de loterías basadas en análisis de big data',
                card_title: 'Perspectivas de las Cinco Principales Tendencias de la Industria Global de Loterías 2025',
                card_description: 'La industria global de loterías está experimentando una transformación profunda',
                trend1: {
                    title: 'Transformación Digital Acelerada',
                    description: 'Las ventas móviles representarán más del 60%, los sistemas de lotería en la nube se convierten en la opción principal'
                },
                trend2: {
                    title: 'Requisitos de Cumplimiento Regulatorio Reforzados',
                    description: 'Los países refuerzan los requisitos de cumplimiento AML y protección de datos, elevando significativamente las barreras técnicas'
                },
                trend3: {
                    title: 'Aplicación Profunda de Tecnología IA',
                    description: 'La inteligencia artificial ampliamente aplicada en control de riesgos, análisis de clientes, diseño de juegos y otros campos'
                },
                trend4: {
                    title: 'Cooperación Transfronteriza Mejorada',
                    description: 'Las alianzas internacionales de loterías y modelos de cooperación de operadores multinacionales se vuelven cada vez más maduros'
                },
                trend5: {
                    title: 'Enfoque en el Desarrollo Sostenible',
                    description: 'Los conceptos ESG integrados en las operaciones de lotería, lotería verde y responsabilidad social se convierten en palabras clave'
                }
            },
            policy: {
                title: 'Seguimiento de Políticas',
                subtitle: 'Seguimiento en tiempo real de cambios en políticas y regulaciones de lotería global',
                nigeria: {
                    title: 'Nuevo Proyecto de Ley de Lotería de Nigeria Aprobado',
                    description: 'Permite a operadores privados participar, se espera que el tamaño del mercado crezca un 300%'
                },
                thailand: {
                    title: 'Lanzamiento del Piloto de Lotería Digital de Tailandia',
                    description: 'El primer lote de 5 provincias comienza el proyecto piloto de ventas de lotería digital'
                },
                colombia: {
                    title: 'Colombia Revisa la Política Fiscal de Lotería',
                    description: 'Reduce la tasa de impuesto de lotería al 15%, estimulando el crecimiento del mercado'
                },
                pakistan: {
                    title: 'Proceso de Legalización de Lotería en Pakistán',
                    description: 'El parlamento examina el proyecto de ley de legalización de lotería, se espera que sea aprobado dentro del año'
                }
            },
            tech_trends: {
                title: 'Tendencias Tecnológicas',
                subtitle: 'Explorar las últimas aplicaciones tecnológicas e innovaciones en la industria de loterías',
                ai_prediction: {
                    title: 'Aplicaciones de IA en Predicción de Comportamiento del Cliente',
                    description: 'Los algoritmos de aprendizaje automático ayudan a los operadores a comprender mejor las necesidades del cliente y mejorar las tasas de conversión de ventas'
                },
                anti_counterfeiting: {
                    title: 'Avance en Tecnología Anti-falsificación Blockchain',
                    description: 'El sistema anti-falsificación de lotería basado en blockchain asegura un proceso de sorteo transparente y confiable'
                },
                intelligent_design: {
                    title: 'Plataforma de Diseño de Juegos Inteligente',
                    description: 'Las herramientas de diseño de juegos impulsadas por IA generan rápidamente juegos de lotería que satisfacen las necesidades de localización'
                },
                read_more: 'Leer Más'
            },
            webinars: {
                title: 'Conferencias en Video',
                subtitle: 'Diálogo Profundo con Expertos de la Industria',
                description: 'Invitando a expertos de la industria global de loterías para compartir las últimas perspectivas del mercado y experiencia práctica',
                webinar1: {
                    title: 'Revisión y Perspectivas del Mercado Global de Loterías 2024',
                    speaker: 'Dra. Sarah Johnson',
                    role: 'Presidenta, Asociación Internacional de Loterías',
                    description: 'Análisis profundo del rendimiento del mercado global de loterías 2024, predicción de tendencias de desarrollo 2025'
                },
                webinar2: {
                    title: 'Transformación Digital: Nuevas Oportunidades para Loterías Tradicionales',
                    speaker: 'Mark Chen',
                    role: 'CTO LottoBridge',
                    description: 'Compartir casos de éxito de transformación digital, explorar el impacto de la innovación tecnológica en la industria de loterías'
                },
                webinar3: {
                    title: 'Análisis de Oportunidades de Inversión en Loterías de Mercados Emergentes',
                    speaker: 'Carlos Rodríguez',
                    role: 'Secretario General, Alianza de Loterías Latinoamericanas',
                    description: 'Análisis de oportunidades y riesgos de inversión en loterías en mercados emergentes como América Latina y África'
                },
                watch_btn: 'Ver Repetición'
            },
            subscribe: {
                title: 'Suscribirse al Boletín de la Industria',
                description: 'Obtén las últimas actualizaciones de la industria, cambios de políticas y análisis de mercado cada semana',
                email_placeholder: 'Ingresa tu dirección de correo electrónico',
                button: 'Suscribirse Ahora',
                privacy_notice: 'Al suscribirte, aceptas nuestra',
                privacy_policy: 'Política de Privacidad'
            }
        },
        // Página de Productos
        products: {
            page: {
                title: 'Productos y Servicios | LottoBridge'
            },
            hero: {
                title: 'Soluciones Globales de Lotería Todo-en-Uno',
                description: 'Integrando los recursos de la cadena industrial central de lotería de China, proporcionando servicios de proceso completo desde investigación de mercado, desarrollo de sistemas, equipos terminales hasta soporte operacional',
                btn_view_services: 'Ver Soluciones de Servicio',
                btn_contact_consultant: 'Contactar Consultor de Ventas'
            },
            services: {
                title: 'Nuestros Productos y Servicios Principales',
                description: 'LottoBridge proporciona no solo una lista de productos, sino un paquete de soluciones de lotería implementables todo-en-uno de "investigación, diseño, sistemas, equipos, entrenamiento, exportación, cooperación"',
                lottery_system: {
                    title: 'Servicios de Sistema de Lotería',
                    description: 'Soluciones completas de sistema de venta, sorteo y liquidación de lotería, soportando varios juegos de lotería y cumpliendo con los requisitos regulatorios de diferentes países',
                    feature1: 'Soporte multi-idioma, multi-juego, acceso multi-terminal',
                    feature2: 'Proporcionar servicios cloud SaaS y soluciones de despliegue privado local',
                    feature3: 'Soporte integración con plataformas regulatorias, sistemas financieros y backends de análisis de big data',
                    feature4: 'Incluir gestión de ventas, gestión de sorteos, trazabilidad anti-falsificación, módulos de gestión CRM de clientes'
                },
                terminal_equipment: {
                    title: 'Servicios de Equipos Terminales de Lotería',
                    description: 'Proporcionar varios equipos terminales de venta de lotería, incluyendo terminales de autoservicio, terminales portátiles, máquinas POS, etc., cumpliendo con los requisitos de diferentes escenarios de venta',
                    feature1: 'Terminales de venta de lotería de autoservicio (soportando operación de pantalla táctil, múltiples métodos de pago)',
                    feature2: 'Terminales de venta de lotería portátiles (adecuados para ventas móviles, pequeños puntos de venta)',
                    feature3: 'Máquinas POS especializadas en lotería (funciones integradas de impresión, escaneo, pago)',
                    feature4: 'Monitoreo remoto de equipos, diagnóstico de fallas, servicios de actualización de software'
                },
                game_design: {
                    title: 'Diseño y Desarrollo de Juegos de Lotería',
                    description: 'Basado en la rica experiencia del mercado de lotería chino, personalizar productos de juegos de lotería que cumplan con las regulaciones y cultura locales para clientes extranjeros',
                    feature1: 'Diseño de juegos de categoría completa incluyendo digital, loto, apuestas deportivas, juegos instantáneos',
                    feature2: 'Localización de reglas de juego, optimización de estructura de premios, diseño de probabilidad de ganar',
                    feature3: 'Diseño UI/UX de juego, producción de material multimedia',
                    feature4: 'Verificación de modelo matemático de juego, soporte de auditoría de terceros'
                },
                printing: {
                    title: 'Servicios de Impresión de Boletos de Lotería y Papel Térmico',
                    description: 'Proporcionar servicios de impresión de boletos de lotería de alta calidad, incluyendo boletos de lotería instantáneos, boletos de papel térmico, etc., asegurando seguridad anti-falsificación y calidad de impresión',
                    feature1: 'Impresión de boletos de lotería instantáneos (raspaditas, desprendibles, etc.)',
                    feature2: 'Impresión de boletos de lotería de papel térmico (adecuados para impresión de boletos de equipos terminales)',
                    feature3: 'Aplicación de tecnología anti-falsificación (marcas de agua, hilos de seguridad, tintas especiales, etc.)',
                    feature4: 'Inspección de calidad de impresión, entrega de empaque, servicios de gestión de inventario'
                },
                consulting: {
                    title: 'Servicios de Investigación de Mercado y Consultoría',
                    description: 'Equipo profesional proporciona servicios de consultoría de proceso completo desde análisis de entrada al mercado hasta implementación comercial',
                    feature1: 'Generación con un clic de informes de mercado de 132+ países impulsada por IA',
                    feature2: 'Incluyendo datos centrales sobre entorno legal, tamaño de mercado, juegos principales',
                    feature3: 'Proporcionar construcción de modelo de negocio y servicios de pronóstico financiero',
                    feature4: 'Modelo de cooperación y recomendaciones de cumplimiento legal'
                },
                training: {
                    title: 'Servicios de Entrenamiento Operacional',
                    description: 'Proporcionar entrenamiento sistemático para varias etapas de operaciones de lotería, asegurando que los equipos se pongan en marcha rápidamente',
                    feature1: 'Entrenamiento de operación de sistema (terminales de venta, gestión backend)',
                    feature2: 'Entrenamiento de proceso de ventas y mantenimiento de terminales',
                    feature3: 'Gestión de agentes y diseño de política de comisiones',
                    feature4: 'Entrenamiento de análisis de datos y servicio al cliente'
                }
            },
            cases: {
                title: 'Historias de Éxito Globales',
                description: 'Nuestras soluciones han sido implementadas exitosamente en múltiples países y regiones, trayendo innovación y crecimiento a los mercados de lotería locales',
                mexico: {
                    title: 'Proyecto de Sistema de Lotería de México',
                    description: 'Proporcionó sistema de lotería digital completo para la Lotería Nacional de México, soportando múltiples tipos de juegos con ventas anuales superiores a $1 mil millones',
                    stat1: 'Ventas Anuales (USD)',
                    stat2: 'Puntos de Venta'
                },
                south_africa: {
                    title: 'Suministro de Boletos Instantáneos Lotería Nacional de Sudáfrica',
                    description: 'Proporcionó 120 millones de boletos instantáneos personalizados para la Lotería Nacional de Sudáfrica, incluyendo 12 diseños temáticos culturales locales, entregados en 6 meses'
                },
                vietnam: {
                    title: 'Proyecto de Transformación Digital Lotería de Vietnam',
                    description: 'Asistió a la Compañía de Lotería de Vietnam en completar la transformación digital, desplegando sistema de lotería en la nube y entrenando 300 personal técnico, logrando 40% de aumento en ventas'
                }
            },
            cta: {
                title: '¿Listo para Comenzar Tu Negocio de Lotería?',
                description: 'Contacta a nuestro equipo experto para obtener soluciones personalizadas y cotizaciones detalladas',
                btn_contact: 'Contactar Ahora',
                btn_market_report: 'Ver Informes de Mercado',
                btn_download: 'Descargar Manual de Servicios'
            }
        },
        // Página de Investigación de Mercado
        market_research: {
            page: {
                title: 'Investigación de Mercado | LottoBridge'
            },
            hero: {
                title: 'Desbloquea Oportunidades Globales de Lotería con Investigación de Mercado Impulsada por IA',
                subtitle: 'Comprende rápidamente las políticas, escala y oportunidades del mercado global de lotería',
                description: 'Impulsado por el sistema de inteligencia de mercado global LottoBridge AI, proporcionando información de datos de lotería nacional en un solo lugar para ayudarte a tomar decisiones de mercado informadas',
                btn_select_country: 'Seleccionar País',
                btn_generate_report: 'Generar Informe',
                btn_view_sample: 'Ver Informe de Muestra'
            },
            country_search: {
                title: 'Selecciona Tu País de Interés',
                placeholder: 'Buscar países o regiones...',
                filter_all: 'Todos',
                filter_asia: 'Asia',
                filter_europe: 'Europa',
                filter_africa: 'África',
                filter_america: 'Américas',
                filter_english: 'Habla Inglesa',
                filter_emerging: 'Mercados Emergentes',
                coverage: 'Actualmente cubre 132 países y regiones'
            },
            recommended_markets: {
                title: 'Mercados Recomendados'
            },
            countries: {
                labels: {
                    market_status: 'Estado del Mercado:',
                    lottery_types: 'Tipos de Lotería:',
                    annual_sales: 'Ventas Anuales Est.:',
                    main_structure: 'Estructura Principal:',
                    typical_games: 'Juegos Típicos:'
                },
                buttons: {
                    view_details: 'Ver Detalles',
                    download_report: 'Descargar Informe',
                    book_consultation: 'Reservar Consulta'
                },
                egypt: {
                    name: 'Egipto',
                    description: 'El mayor mercado de lotería en África del Norte',
                    market_status: 'Operación Legal',
                    lottery_types: 'Loto, Instantáneo, Digital',
                    annual_sales: 'Aprox. $430 millones',
                    main_structure: 'Autoridad Nacional de Lotería',
                    typical_games: '6/49, 4D, Raspaditas'
                },
                mexico: {
                    name: 'México',
                    description: 'Mercado líder en América Latina',
                    market_status: 'Acceso Privado',
                    lottery_types: 'Loto, Apuestas Deportivas',
                    annual_sales: 'Aprox. $1.25 mil millones',
                    main_structure: 'Operadores Cooperativos',
                    typical_games: 'Melate, Chispazo'
                },
                philippines: {
                    name: 'Filipinas',
                    description: 'Mercado de alto crecimiento en el Sudeste Asiático',
                    market_status: 'Acceso Privado',
                    lottery_types: 'Loto, Instantáneo, Juegos Electrónicos',
                    annual_sales: 'Aprox. $870 millones',
                    main_structure: 'Operación Privada Independiente',
                    typical_games: 'Ultra Lotto 6/58'
                }
            },
            report_preview: {
                title: 'Informe Profundo del Mercado de Lotería Egipcio',
                tabs: {
                    overview: 'Resumen del País',
                    regulations: 'Leyes y Regulaciones',
                    market_size: 'Tamaño del Mercado',
                    product_structure: 'Estructura de Productos',
                    key_players: 'Actores Clave',
                    business_opportunities: 'Oportunidades de Negocio'
                },
                content: {
                    overview: {
                        title: 'Resumen del País',
                        demographics: 'Egipto es el país más poblado del mundo árabe con más de 100 millones de habitantes, el 60% de los cuales son menores de 30 años. La penetración de Internet alcanza el 65%, y el uso de pagos móviles está creciendo rápidamente.',
                        history: 'La lotería tiene una larga historia en Egipto, que se remonta a la década de 1960. La "Ley de Lotería y Juegos" revisada en 2018 sentó las bases para la modernización del mercado.',
                        legal_development: 'Proceso de Desarrollo Legal de la Lotería',
                        timeline_1960: '1960: Egipto introdujo por primera vez el sistema nacional de lotería',
                        timeline_2018: '2018: Revisión de la "Ley de Lotería y Juegos", permitiendo la participación de operadores privados',
                        timeline_2021: '2021: Lanzamiento del proyecto piloto de lotería digital'
                    }
                }
            },
            download: {
                title: 'Obtener Informe PDF Completo',
                description: '¡Regístrate para descargar el informe completo + actualizaciones mensuales globales, completamente gratis!',
                form: {
                    email: 'Correo Electrónico',
                    company: 'Nombre de la Empresa',
                    country: 'País',
                    country_placeholder: 'Por favor selecciona',
                    china: 'China',
                    usa: 'Estados Unidos',
                    subscribe: 'Suscribirse al Boletín Mensual de Inteligencia de Mercado de LottoBridge',
                    submit: 'Obtener Ahora'
                }
            },
            recent_updates: {
                title: 'Informes Actualizados Recientemente',
                uzbekistan: {
                    title: 'Informe del Mercado de Lotería de Uzbekistán',
                    update_time: 'Actualizado: Dic 2024',
                    tag1: 'Mercado Emergente',
                    tag2: 'Acceso Privado',
                    tag3: 'Alto Potencial de Crecimiento'
                },
                cambodia: {
                    title: 'Informe del Mercado de Lotería de Camboya',
                    update_time: 'Actualizado: Ene 2025',
                    tag1: 'Cooperación Gubernamental',
                    tag2: 'Terminal POS',
                    tag3: 'Emisión Centralizada'
                },
                nigeria: {
                    title: 'Informe del Mercado de Lotería de Nigeria',
                    update_time: 'Actualizado: Nov 2024',
                    tag1: 'Alta Población',
                    tag2: 'Baja Penetración',
                    tag3: 'Zona Gris Regulatoria'
                }
            },
            testimonials: {
                title: 'Testimonios de Clientes',
                testimonial1: {
                    text: 'Obtuvimos informes de investigación de lotería de 5 países latinoamericanos a través de LottoBridge, y finalmente elegimos México como nuestra primera opción. El análisis de políticas y las predicciones de tamaño de mercado en el informe fueron muy precisos, ahorrándonos mucho tiempo de investigación preliminar.',
                    author_name: 'Zhang Wei',
                    author_title: 'CEO de Proveedor de Servicios Técnicos de Lotería del Sudeste Asiático'
                }
            },
            cta: {
                title: '¿No encontraste la inteligencia de mercado que necesitas?',
                description: 'Nuestro equipo de expertos puede proporcionarte servicios de investigación de mercado personalizados',
                btn_custom_research: 'Enviar Solicitud de Investigación Personalizada',
                btn_contact_support: 'Contactar Atención al Cliente'
            }
        },
        hero: {
            title: 'Plataforma de Soluciones Integrales para Exportación de Loterías Globales',
            subtitle: 'Aprovechando los sólidos recursos de la cadena industrial de lotería de China, integrando software de sistemas, hardware terminal, impresión de boletos y consumibles térmicos para ayudar a agencias gubernamentales y operadores privados de todo el mundo a ingresar rápidamente al mercado de lotería',
            cta_primary: 'Informe de Investigación de Mercado Generado por IA',
            cta_secondary: 'Contactar Nuestros Consultores'
        },
        features: {
            title: 'Lo Que Podemos Hacer Por Ti',
            subtitle: 'LottoBridge no es solo una plataforma B2B, sino un sistema integral de implementación de negocios de lotería que ayuda a los clientes a pasar de "evaluación de oportunidades" a "implementación" en un solo paso',
            consulting: {
                title: 'Pre-consulta y Planificación de Mercado',
                desc: 'El motor de investigación de mercado global de IA genera informes profesionales sobre políticas de lotería, tamaño de mercado y análisis de riesgos para más de 100 países con un clic'
            },
            products: {
                title: 'Productos y Servicios Técnicos',
                desc: 'Servicios completos de sistema de lotería, cadena de suministro de equipos terminales, diseño y desarrollo de juegos de lotería, servicios de impresión de boletos y papel térmico'
            },
            support: {
                title: 'Soporte Operacional y Servicios de Implementación',
                desc: 'Entrenamiento y orientación operacional, coincidencia de oferta-demanda y gestión de pedidos, soporte de exportación y cumplimiento, coincidencia de socios estratégicos'
            }
        },
        solutions: {
            title: 'Nuestras Soluciones Principales',
            subtitle: 'Productos y servicios personalizados para diferentes necesidades de mercado',
            software: {
                title: 'Software de Sistema de Lotería',
                description: 'Sistemas completos de venta, sorteo y liquidación de lotería que soportan varios juegos de lotería y cumplen con los requisitos regulatorios de diferentes países'
            },
            hardware: {
                title: 'Equipo de Hardware Terminal',
                description: 'Terminales de lotería de alto rendimiento, máquinas de boletos de autoservicio, dispositivos de venta móviles adaptados a varios escenarios de venta'
            },
            printing: {
                title: 'Servicios de Impresión de Boletos',
                description: 'Impresión segura de boletos instantáneos anti-falsificación conforme a estándares de seguridad internacionales, soportando diseño personalizado'
            },
            learn_more: 'Saber Más'
        },
        global: {
            title: 'Cobertura de Mercado Global',
            subtitle: 'Nuestras soluciones han sido implementadas exitosamente en múltiples países y regiones del mundo',
            regions: {
                latinAmerica: 'América Latina',
                africa: 'África',
                southeastAsia: 'Sudeste Asiático',
                centralEasternEurope: 'Europa Central y Oriental',
                middleEast: 'Medio Oriente'
            }
        },
        testimonials: {
            title: 'Testimonios de Clientes',
            subtitle: 'Escucha cómo nuestros socios evalúan los servicios de LottoBridge',
            quote: 'LottoBridge nos proporcionó una solución completa de sistema de lotería, tomando solo 3 meses desde la investigación de mercado hasta la implementación del sistema. Su equipo profesional y servicio integral redujeron significativamente nuestros riesgos operacionales.',
            author: 'Carlos Mendez',
            position: 'CEO, Operador de Lotería Mexicano'
        },
        cta: {
            title: '¿Listo para Ingresar al Mercado Global de Lotería?',
            subtitle: 'Ya seas una agencia gubernamental, operador privado o proveedor de tecnología, LottoBridge puede proporcionarte la solución más adecuada',
            contact_now: 'Consultar Ahora',
            book_demo: 'Programar Demo'
        },
        footer: {
            company: {
                description: 'Plataforma de soluciones integrales para exportación de loterías globales, aprovechando los sólidos recursos de la cadena industrial de lotería de China para ayudar a clientes de todo el mundo a ingresar rápidamente al mercado de lotería.'
            },
            products: {
                title: 'Productos y Servicios',
                lottery_system: 'Soluciones de Sistemas de Lotería',
                terminal_equipment: 'Suministro de Equipos Terminales',
                game_design: 'Diseño y Desarrollo de Juegos',
                printing: 'Servicios de Impresión de Boletos',
                market_research: 'Investigación de Mercado y Consultoría'
            },
            resources: {
                title: 'Centro de Recursos',
                case_studies: 'Estudios de Caso',
                whitepapers: 'Descarga de Libros Blancos',
                industry_reports: 'Informes de la Industria',
                blog_news: 'Blog y Noticias',
                faq: 'Preguntas Frecuentes',
                insights: 'Perspectivas de la Industria',
                technical_docs: 'Documentación Técnica',
                download_center: 'Centro de Descarga'
            },
            contact: {
                title: 'Contáctanos',
                address: 'Avenida del Siglo 1000, Nueva Área de Pudong, Shanghái, China',
                form: {
                    company_name: 'Nombre de la Empresa',
                    contact_person: 'Persona de Contacto',
                    position: 'Cargo',
                    email: 'Dirección de Correo Electrónico',
                    phone: 'Número de Teléfono',
                    country: 'País/Región',
                    needs: 'Necesidades Comerciales',
                    message: 'Mensaje',
                    upload: 'Subir Archivos',
                    language_preference: 'Preferencia de Idioma',
                    privacy: 'Acepto la',
                    privacy_policy: 'Política de Privacidad',
                    submit: 'Enviar',
                    schedule: 'Programar Consulta',
                    countries: {
                        china: 'China',
                        usa: 'Estados Unidos',
                        uk: 'Reino Unido',
                        japan: 'Japón',
                        korea: 'Corea del Sur',
                        russia: 'Rusia',
                        brazil: 'Brasil',
                        india: 'India'
                    }
                }
            },
            copyright: 'Todos los derechos reservados.',
            privacy_policy: 'Política de Privacidad',
            terms_of_service: 'Términos de Servicio'
        },
        // Página Acerca de
        about: {
            page: {
                title: 'Acerca de Nosotros | LottoBridge'
            },
            hero: {
                title: 'Conectando el Mundo con Soluciones de Lotería de China',
                subtitle: 'Su Socio de Confianza para el Éxito Global de Loterías',
                description: 'LottoBridge es la plataforma líder que conecta la experiencia en loterías de China con oportunidades globales, proporcionando soluciones integrales desde investigación de mercado hasta implementación operativa.'
            },
            who_we_are: {
                title: '¿Quiénes Somos?',
                description: 'LottoBridge es una plataforma innovadora que aprovecha la vasta experiencia y recursos de la industria de loterías de China para servir a mercados globales. Como puente entre la experiencia china en loterías y las oportunidades internacionales, nos especializamos en proporcionar soluciones integrales que abarcan toda la cadena de valor de las loterías.',
                highlight: 'Desde 2020, hemos facilitado con éxito más de 50 proyectos de loterías en 25 países, generando más de $2 mil millones en ventas acumuladas.'
            },
            vision: {
                title: 'Nuestra Visión',
                main: 'Ser la plataforma global líder que democratiza el acceso a soluciones de lotería de clase mundial, permitiendo que cualquier país o región establezca y opere sistemas de lotería exitosos.',
                challenges: {
                    title: 'Desafíos que Resolvemos',
                    challenge1: {
                        title: 'Barreras de Entrada Altas',
                        description: 'Los sistemas de lotería tradicionales requieren inversiones masivas y experiencia técnica que muchos mercados emergentes no poseen.'
                    },
                    challenge2: {
                        title: 'Complejidad Regulatoria',
                        description: 'Navegar por diferentes marcos legales y requisitos de cumplimiento en múltiples jurisdicciones.'
                    },
                    challenge3: {
                        title: 'Brecha de Conocimiento',
                        description: 'Falta de experiencia operativa y mejores prácticas en mercados que son nuevos en las loterías modernas.'
                    }
                }
            },
            values: {
                title: 'Nuestros Valores Fundamentales',
                innovation: {
                    title: 'Innovación',
                    description: 'Aprovechamos continuamente la tecnología más avanzada y las mejores prácticas de la industria de loterías de China para crear soluciones de vanguardia.'
                },
                integrity: {
                    title: 'Integridad',
                    description: 'Mantenemos los más altos estándares de transparencia, equidad y cumplimiento ético en todas nuestras operaciones.'
                },
                partnership: {
                    title: 'Asociación',
                    description: 'Creemos en construir relaciones a largo plazo basadas en confianza mutua, respeto y éxito compartido.'
                },
                excellence: {
                    title: 'Excelencia',
                    description: 'Nos comprometemos a entregar calidad superior en cada proyecto, desde la concepción inicial hasta la implementación completa.'
                }
            },
            team: {
                title: 'Nuestro Equipo de Expertos',
                description: 'Nuestro equipo diverso combina décadas de experiencia en la industria de loterías con experiencia en tecnología, regulación y operaciones globales.',
                ceo: {
                    name: 'Dr. Li Wei',
                    position: 'CEO y Fundador',
                    description: 'Ex-director de China Welfare Lottery con más de 20 años de experiencia en la industria. Pionero en la modernización de sistemas de lotería en Asia.',
                    expertise: 'Estrategia de Lotería, Desarrollo de Mercado'
                },
                cto: {
                    name: 'Zhang Ming',
                    position: 'Director de Tecnología',
                    description: 'Arquitecto de sistemas líder con experiencia en el desarrollo de plataformas de lotería a gran escala que manejan millones de transacciones diarias.',
                    expertise: 'Arquitectura de Sistemas, Blockchain, IA'
                },
                legal: {
                    name: 'Sarah Johnson',
                    position: 'Directora Legal',
                    description: 'Abogada internacional especializada en regulación de juegos y cumplimiento con experiencia en más de 30 jurisdicciones.',
                    expertise: 'Cumplimiento Regulatorio, Derecho Internacional'
                },
                operations: {
                    name: 'Carlos Rodriguez',
                    position: 'Director de Operaciones',
                    description: 'Veterano de la industria con experiencia práctica en el lanzamiento y gestión de operaciones de lotería en mercados emergentes.',
                    expertise: 'Gestión Operativa, Capacitación, Soporte'
                }
            },
            partners: {
                title: 'Nuestros Socios Estratégicos',
                description: 'Colaboramos con organizaciones líderes en toda la cadena de valor de las loterías para ofrecer soluciones integrales.',
                tech_partners: 'Socios Tecnológicos',
                regulatory_partners: 'Asesores Regulatorios',
                operational_partners: 'Socios Operativos'
            },
            credentials: {
                title: 'Nuestras Calificaciones',
                certifications: 'Certificaciones',
                cert1: 'Certificación ISO 27001 para Gestión de Seguridad de la Información',
                cert2: 'Certificación GLI (Gaming Laboratories International)',
                cert3: 'Cumplimiento SOC 2 Tipo II',
                awards: 'Premios y Reconocimientos',
                award1: 'Premio a la Innovación en Lotería Global 2023',
                award2: 'Mejor Proveedor de Soluciones Tecnológicas - Asia Gaming Awards 2022',
                award3: 'Premio a la Excelencia en Exportación - Cámara de Comercio de China 2021'
            },
            commitment: {
                title: 'Nuestro Compromiso',
                description: 'Estamos dedicados a promover el crecimiento responsable de la industria de loterías a nivel mundial, asegurando que nuestras soluciones no solo generen ingresos sino que también contribuyan al desarrollo social y económico de las comunidades que servimos.',
                responsibility: 'Juego Responsable',
                sustainability: 'Prácticas Sostenibles',
                community: 'Impacto Comunitario'
            },
            cta: {
                title: '¿Listo para Transformar Su Mercado de Loterías?',
                description: 'Únase a los líderes globales que han elegido LottoBridge como su socio de confianza para el éxito en loterías.',
                btn_contact: 'Contáctanos Hoy',
                btn_schedule: 'Programar Consulta',
                btn_download: 'Descargar Brochure de la Empresa'
            }
        }
    },
    ko: {
        // 페이지 제목
        page: {
            title: 'LottoBridge | 글로벌 복권 수출 원스톱 솔루션 플랫폼'
        },
        nav: {
            home: '홈',
            market_research: '시장 조사',
            products: '제품 및 서비스',
            insights: '업계 인사이트',
            case_studies: '사례 연구',
            about: '회사 소개',
            contact: '문의하기'
        },
        // 제품 페이지
        products: {
            page: {
                title: '제품 및 서비스 | LottoBridge'
            },
            hero: {
                title: '글로벌 복권 원스톱 솔루션',
                description: '중국의 핵심 복권 산업 체인 자원을 통합하여 시장 조사, 시스템 개발, 터미널 장비부터 운영 지원까지 전 과정 서비스 제공',
                btn_view_services: '서비스 솔루션 보기',
                btn_contact_consultant: '영업 컨설턴트 연락'
            },
            services: {
                title: '핵심 제품 및 서비스',
                description: 'LottoBridge는 단순한 제품 목록이 아닌 "연구, 설계, 시스템, 장비, 교육, 수출, 협력"의 원스톱 구현 가능한 복권 솔루션 패키지를 제공합니다',
                lottery_system: {
                    title: '복권 시스템 서비스',
                    description: '다양한 복권 게임을 지원하고 각국의 규제 요구사항을 충족하는 완전한 복권 판매, 추첨, 정산 시스템 솔루션',
                    feature1: '다국어, 다게임, 다터미널 접근 지원',
                    feature2: 'SaaS 클라우드 서비스 및 로컬 프라이빗 배포 솔루션 제공',
                    feature3: '규제 플랫폼, 금융 시스템, 빅데이터 분석 백엔드와의 통합 지원',
                    feature4: '판매 관리, 추첨 관리, 위조 방지 추적, CRM 고객 관리 모듈 포함'
                },
                terminal_equipment: {
                    title: '복권 터미널 장비 서비스',
                    description: '셀프서비스 터미널, 휴대용 터미널, POS 머신 등 다양한 복권 판매 터미널 장비를 제공하여 다양한 판매 시나리오 요구사항 충족',
                    feature1: '셀프서비스 복권 판매 터미널 (터치스크린 조작, 다중 결제 방식 지원)',
                    feature2: '휴대용 복권 판매 터미널 (모바일 판매, 소규모 매장에 적합)',
                    feature3: '복권 전용 POS 머신 (인쇄, 스캔, 결제 기능 통합)',
                    feature4: '장비 원격 모니터링, 고장 진단, 소프트웨어 업그레이드 서비스'
                },
                game_design: {
                    title: '복권 게임 설계 및 개발',
                    description: '풍부한 중국 복권 시장 경험을 바탕으로 해외 고객을 위해 현지 규제 및 문화에 맞는 복권 게임 제품 맞춤 제작',
                    feature1: '숫자형, 로또, 스포츠 베팅, 즉석 게임을 포함한 전 카테고리 게임 설계',
                    feature2: '게임 규칙 현지화, 상금 구조 최적화, 당첨 확률 설계',
                    feature3: '게임 UI/UX 설계, 멀티미디어 자료 제작',
                    feature4: '게임 수학적 모델 검증, 제3자 감사 지원'
                },
                printing: {
                    title: '복권 티켓 인쇄 및 열전사 용지 서비스',
                    description: '즉석 복권 티켓, 열전사 용지 티켓 등 고품질 복권 티켓 인쇄 서비스를 제공하여 위조 방지 보안 및 인쇄 품질 보장',
                    feature1: '즉석 복권 티켓 인쇄 (스크래치, 찢기 등)',
                    feature2: '열전사 용지 복권 티켓 인쇄 (터미널 장비 티켓 인쇄에 적합)',
                    feature3: '위조 방지 기술 적용 (워터마크, 보안 실, 특수 잉크 등)',
                    feature4: '인쇄 품질 검사, 포장 배송, 재고 관리 서비스'
                },
                consulting: {
                    title: '시장 조사 및 컨설팅 서비스',
                    description: '전문 팀이 시장 진입 분석부터 비즈니스 구현까지 전 과정 컨설팅 서비스 제공',
                    feature1: 'AI 기반 132개 이상 국가 시장 보고서 원클릭 생성',
                    feature2: '법적 환경, 시장 규모, 주요 게임에 대한 핵심 데이터 포함',
                    feature3: '비즈니스 모델 구축 및 재무 예측 서비스 제공',
                    feature4: '협력 모델 및 법적 준수 권장사항'
                },
                training: {
                    title: '운영 교육 서비스',
                    description: '복권 운영의 다양한 단계에 대한 체계적인 교육을 제공하여 팀이 빠르게 운영할 수 있도록 보장',
                    feature1: '시스템 운영 교육 (판매 터미널, 백엔드 관리)',
                    feature2: '판매 프로세스 및 터미널 유지보수 교육',
                    feature3: '에이전트 관리 및 수수료 정책 설계',
                    feature4: '데이터 분석 및 고객 서비스 교육'
                }
            },
            cases: {
                title: '글로벌 성공 사례',
                description: '우리의 솔루션은 여러 국가와 지역에서 성공적으로 구현되어 현지 복권 시장에 혁신과 성장을 가져왔습니다',
                mexico: {
                    title: '멕시코 복권 시스템 프로젝트',
                    description: '멕시코 국가 복권을 위한 완전한 디지털 복권 시스템을 제공하여 여러 게임 유형을 지원하며 연간 매출이 10억 달러를 초과',
                    stat1: '연간 매출 (USD)',
                    stat2: '판매점'
                },
                south_africa: {
                    title: '남아프리카 국가 복권 즉석 티켓 공급',
                    description: '남아프리카 국가 복권을 위해 1억 2천만 장의 맞춤형 즉석 티켓을 제공하여 12개의 현지 문화 테마 디자인을 포함하여 6개월 내 배송 완료'
                },
                vietnam: {
                    title: '베트남 복권 디지털 전환 프로젝트',
                    description: '베트남 복권 회사의 디지털 전환 완료를 지원하여 클라우드 복권 시스템을 배포하고 300명의 기술 인력을 교육하여 40% 매출 증가 달성'
                }
            },
            cta: {
                title: '복권 비즈니스를 시작할 준비가 되셨나요?',
                description: '전문가 팀에 연락하여 맞춤형 솔루션과 상세한 견적을 받아보세요',
                btn_contact: '지금 연락',
                btn_market_report: '시장 보고서 보기',
                btn_download: '서비스 매뉴얼 다운로드'
            }
        },
        // 시장 조사 페이지
        market_research: {
            page: {
                title: '시장 조사 | LottoBridge'
            },
            hero: {
                title: 'AI 기반 시장 조사로 글로벌 복권 기회 발굴',
                subtitle: '글로벌 복권 시장의 정책, 규모, 기회를 빠르게 파악',
                description: 'LottoBridge AI 글로벌 시장 인텔리전스 시스템으로 구동되어 국가별 복권 데이터 정보를 한 곳에서 제공하여 정보에 기반한 시장 결정을 내릴 수 있도록 지원',
                btn_select_country: '국가 선택',
                btn_generate_report: '보고서 생성',
                btn_view_sample: '샘플 보고서 보기'
            },
            country_search: {
                title: '관심 국가를 선택하세요',
                placeholder: '국가 또는 지역 검색...',
                filter_all: '전체',
                filter_asia: '아시아',
                filter_europe: '유럽',
                filter_africa: '아프리카',
                filter_america: '아메리카',
                filter_english: '영어권',
                filter_emerging: '신흥 시장',
                coverage: '현재 132개 국가 및 지역 커버'
            },
            recommended_markets: {
                title: '추천 시장'
            },
            countries: {
                labels: {
                    market_status: '시장 상태:',
                    lottery_types: '복권 유형:',
                    annual_sales: '연간 매출 추정:',
                    main_structure: '주요 구조:',
                    typical_games: '대표 게임:'
                },
                buttons: {
                    view_details: '세부 정보 보기',
                    download_report: '보고서 다운로드',
                    book_consultation: '상담 예약'
                },
                egypt: {
                    name: '이집트',
                    description: '북아프리카 최대 복권 시장',
                    market_status: '합법 운영',
                    lottery_types: '로또, 즉석, 디지털',
                    annual_sales: '약 4억 3천만 달러',
                    main_structure: '국가 복권 당국',
                    typical_games: '6/49, 4D, 스크래치'
                },
                mexico: {
                    name: '멕시코',
                    description: '라틴 아메리카 선도 시장',
                    market_status: '민간 접근',
                    lottery_types: '로또, 스포츠 베팅',
                    annual_sales: '약 12억 5천만 달러',
                    main_structure: '협동조합 운영자',
                    typical_games: 'Melate, Chispazo'
                },
                philippines: {
                    name: '필리핀',
                    description: '동남아시아 고성장 시장',
                    market_status: '민간 접근',
                    lottery_types: '로또, 즉석, 전자 게임',
                    annual_sales: '약 8억 7천만 달러',
                    main_structure: '독립 민간 운영',
                    typical_games: 'Ultra Lotto 6/58'
                }
            },
            report_preview: {
                title: '이집트 복권 시장 심층 보고서',
                tabs: {
                    overview: '국가 개요',
                    regulations: '법률 및 규제',
                    market_size: '시장 규모',
                    product_structure: '제품 구조',
                    key_players: '주요 참여자',
                    business_opportunities: '비즈니스 기회'
                },
                content: {
                    overview: {
                        title: '국가 개요',
                        demographics: '이집트는 1억 명 이상의 인구를 가진 아랍 세계에서 가장 인구가 많은 국가로, 60%가 30세 미만입니다. 인터넷 보급률은 65%에 달하며, 모바일 결제 사용이 빠르게 증가하고 있습니다.',
                        history: '복권은 이집트에서 1960년대로 거슬러 올라가는 긴 역사를 가지고 있습니다. 2018년에 개정된 "복권 및 게임법"은 시장 현대화의 기초를 마련했습니다.',
                        legal_development: '복권 법적 발전 과정',
                        timeline_1960: '1960년: 이집트가 처음으로 국가 복권 시스템 도입',
                        timeline_2018: '2018년: "복권 및 게임법" 개정, 민간 운영자 참여 허용',
                        timeline_2021: '2021년: 디지털 복권 파일럿 프로젝트 시작'
                    }
                }
            },
            download: {
                title: 'PDF 전체 보고서 받기',
                description: '등록하여 전체 보고서 + 월간 글로벌 업데이트를 완전 무료로 다운로드하세요!',
                form: {
                    email: '이메일',
                    company: '회사명',
                    country: '국가',
                    country_placeholder: '선택해주세요',
                    china: '중국',
                    usa: '미국',
                    subscribe: 'LottoBridge 월간 시장 인텔리전스 뉴스레터 구독',
                    submit: '지금 받기'
                }
            },
            recent_updates: {
                title: '최근 업데이트된 보고서',
                uzbekistan: {
                    title: '우즈베키스탄 복권 시장 보고서',
                    update_time: '업데이트: 2024년 12월',
                    tag1: '신흥 시장',
                    tag2: '민간 진입',
                    tag3: '높은 성장 잠재력'
                },
                cambodia: {
                    title: '캄보디아 복권 시장 보고서',
                    update_time: '업데이트: 2025년 1월',
                    tag1: '정부 협력',
                    tag2: 'POS 터미널',
                    tag3: '중앙 발행'
                },
                nigeria: {
                    title: '나이지리아 복권 시장 보고서',
                    update_time: '업데이트: 2024년 11월',
                    tag1: '대규모 인구',
                    tag2: '낮은 보급률',
                    tag3: '규제 그레이 존'
                }
            },
            testimonials: {
                title: '고객 추천사',
                testimonial1: {
                    text: 'LottoBridge를 통해 라틴 아메리카 5개국의 복권 연구 보고서를 받았고, 최종적으로 멕시코를 첫 번째 선택으로 결정했습니다. 보고서의 정책 분석과 시장 규모 예측이 매우 정확하여 초기 연구 시간을 많이 절약할 수 있었습니다.',
                    author_name: '장웨이',
                    author_title: '동남아시아 복권 기술 서비스 제공업체 CEO'
                }
            },
            cta: {
                title: '필요한 시장 인텔리전스를 찾지 못하셨나요?',
                description: '전문가 팀이 맞춤형 시장 조사 서비스를 제공할 수 있습니다',
                btn_custom_research: '맞춤 연구 요청 제출',
                btn_contact_support: '고객 서비스 문의'
            }
        },
        hero: {
            title: '글로벌 복권 수출 원스톱 솔루션 플랫폼',
            subtitle: '중국의 강력한 복권 산업 체인 자원을 활용하여 시스템 소프트웨어, 터미널 하드웨어, 티켓 인쇄, 열전사 소모품을 통합하여 전 세계 정부 기관과 민간 운영업체가 복권 시장에 빠르게 진입할 수 있도록 지원',
            cta_primary: 'AI 생성 시장 조사 보고서',
            cta_secondary: '컨설턴트에게 문의'
        },
        features: {
            title: '저희가 제공할 수 있는 서비스',
            subtitle: 'LottoBridge는 단순한 B2B 플랫폼이 아니라 고객이 "기회 평가"에서 "구현"까지 한 번에 진행할 수 있도록 돕는 포괄적인 복권 비즈니스 구현 시스템입니다',
            consulting: {
                title: '사전 컨설팅 및 시장 계획',
                description: 'AI 글로벌 시장 조사 엔진이 100개 이상 국가의 복권 정책, 시장 규모, 위험 분석에 대한 전문 보고서를 원클릭으로 생성'
            },
            products: {
                title: '제품 및 기술 서비스',
                description: '완전한 복권 시스템 서비스, 터미널 장비 공급망, 복권 게임 설계 및 개발, 티켓 인쇄 및 열전사 용지 서비스'
            },
            support: {
                title: '운영 지원 및 구현 서비스',
                description: '교육 및 운영 지도, 공급-수요 매칭 및 주문 관리, 수출 및 규정 준수 지원, 전략적 파트너 매칭'
            }
        },
        solutions: {
            title: '핵심 솔루션',
            subtitle: '다양한 시장 요구에 맞는 맞춤형 제품 및 서비스',
            software: {
                title: '복권 시스템 소프트웨어',
                description: '다양한 복권 게임을 지원하고 각국의 규제 요구사항을 충족하는 완전한 복권 판매, 추첨, 정산 시스템'
            },
            hardware: {
                title: '터미널 하드웨어 장비',
                description: '다양한 판매 시나리오에 적응하는 고성능 복권 터미널, 셀프서비스 티켓 머신, 모바일 판매 장치'
            },
            printing: {
                title: '티켓 인쇄 서비스',
                description: '국제 보안 표준을 준수하고 맞춤형 디자인을 지원하는 안전한 위조 방지 즉석 티켓 인쇄'
            },
            learn_more: '자세히 보기'
        },
        global: {
            title: '글로벌 시장 커버리지',
            subtitle: '저희 솔루션은 전 세계 여러 국가와 지역에서 성공적으로 구현되었습니다',
            regions: {
                latin_america: '라틴 아메리카',
                africa: '아프리카',
                southeast_asia: '동남아시아',
                central_eastern_europe: '중동부 유럽',
                middle_east: '중동'
            }
        },
        testimonials: {
            title: '고객 추천사',
            subtitle: '파트너들이 LottoBridge 서비스를 어떻게 평가하는지 들어보세요',
            quote: 'LottoBridge는 시장 조사부터 시스템 구현까지 단 3개월 만에 완전한 복권 시스템 솔루션을 제공했습니다. 그들의 전문 팀과 원스톱 서비스는 우리의 운영 위험을 크게 줄였습니다.',
            author_name: 'Carlos Mendez',
            author_title: '멕시코 복권 운영업체 CEO'
        },
        cta: {
            title: '글로벌 복권 시장 진입 준비가 되셨나요?',
            subtitle: '정부 기관, 민간 운영업체 또는 기술 제공업체든 관계없이 LottoBridge가 가장 적합한 솔루션을 제공할 수 있습니다',
            contact_now: '지금 상담',
            book_demo: '데모 예약'
        },
        footer: {
            company: {
                description: '중국의 강력한 복권 산업 체인 자원을 활용하여 전 세계 고객이 복권 시장에 빠르게 진입할 수 있도록 돕는 글로벌 복권 수출 원스톱 솔루션 플랫폼.'
            },
            products: {
                title: '제품 및 서비스',
                lottery_system: '복권 시스템 솔루션',
                terminal_equipment: '터미널 장비 공급',
                game_design: '게임 설계 및 개발',
                printing: '티켓 인쇄 서비스',
                market_research: '시장 조사 및 컨설팅'
            },
            resources: {
                title: '리소스 센터',
                case_studies: '사례 연구',
                whitepapers: '백서 다운로드',
                industry_reports: '업계 보고서',
                blog_news: '블로그 및 뉴스',
                faq: '자주 묻는 질문',
                insights: '업계 인사이트',
                technical_docs: '기술 문서',
                download_center: '다운로드 센터'
            },
            contact: {
                title: '문의하기',
                address: '중국 상하이시 푸둥신구 센추리 애비뉴 1000번지',
                form: {
                    company_name: '회사명',
                    contact_person: '담당자',
                    position: '직책',
                    email: '이메일 주소',
                    phone: '전화번호',
                    country: '국가/지역',
                    needs: '비즈니스 요구사항',
                    message: '메시지',
                    upload: '파일 업로드',
                    language_preference: '언어 선호도',
                    privacy: '동의합니다',
                    privacy_policy: '개인정보 보호정책',
                    submit: '제출',
                    schedule: '상담 예약',
                    countries: {
                        china: '중국',
                        usa: '미국',
                        uk: '영국',
                        japan: '일본',
                        korea: '한국',
                        russia: '러시아',
                        brazil: '브라질',
                        india: '인도'
                    }
                }
            },
            copyright: '모든 권리 보유.',
            privacy_policy: '개인정보 보호정책',
            terms_of_service: '서비스 약관'
        },
        // 회사 소개 페이지
        about: {
            page: {
                title: '회사 소개 | LottoBridge'
            },
            hero: {
                title: '중국의 복권 솔루션으로 세계를 연결하다',
                subtitle: '글로벌 복권 성공을 위한 신뢰할 수 있는 파트너',
                description: 'LottoBridge는 중국의 복권 전문성과 글로벌 기회를 연결하는 선도적인 플랫폼으로, 시장 조사부터 운영 구현까지 포괄적인 솔루션을 제공합니다.'
            },
            who_we_are: {
                title: '우리는 누구인가?',
                description: 'LottoBridge는 중국 복권 산업의 방대한 경험과 자원을 활용하여 글로벌 시장에 서비스를 제공하는 혁신적인 플랫폼입니다. 중국의 복권 전문성과 국제적 기회 사이의 다리 역할을 하며, 복권 가치 사슬 전반에 걸친 포괄적인 솔루션 제공을 전문으로 합니다.',
                highlight: '2020년부터 25개국에서 50개 이상의 복권 프로젝트를 성공적으로 촉진하여 누적 매출 20억 달러 이상을 달성했습니다.'
            },
            vision: {
                title: '우리의 비전',
                main: '세계적 수준의 복권 솔루션에 대한 접근을 민주화하여 모든 국가나 지역이 성공적인 복권 시스템을 구축하고 운영할 수 있도록 하는 글로벌 선도 플랫폼이 되는 것입니다.',
                challenges: {
                    title: '우리가 해결하는 과제들',
                    challenge1: {
                        title: '높은 진입 장벽',
                        description: '전통적인 복권 시스템은 많은 신흥 시장이 보유하지 못한 대규모 투자와 기술적 전문성을 요구합니다.'
                    },
                    challenge2: {
                        title: '규제 복잡성',
                        description: '여러 관할권에서 다양한 법적 프레임워크와 규정 준수 요구사항을 탐색하는 것.'
                    },
                    challenge3: {
                        title: '지식 격차',
                        description: '현대 복권에 새로운 시장에서 운영 경험과 모범 사례의 부족.'
                    }
                }
            },
            values: {
                title: '우리의 핵심 가치',
                innovation: {
                    title: '혁신',
                    description: '중국 복권 산업의 최첨단 기술과 모범 사례를 지속적으로 활용하여 최첨단 솔루션을 만듭니다.'
                },
                integrity: {
                    title: '성실성',
                    description: '모든 운영에서 투명성, 공정성, 윤리적 준수의 최고 기준을 유지합니다.'
                },
                partnership: {
                    title: '파트너십',
                    description: '상호 신뢰, 존중, 공유된 성공을 바탕으로 한 장기적인 관계 구축을 믿습니다.'
                },
                excellence: {
                    title: '우수성',
                    description: '초기 개념부터 완전한 구현까지 모든 프로젝트에서 우수한 품질을 제공하는 데 전념합니다.'
                }
            },
            team: {
                title: '우리의 전문가 팀',
                description: '우리의 다양한 팀은 수십 년간의 복권 산업 경험과 기술, 규제, 글로벌 운영 전문성을 결합합니다.',
                ceo: {
                    name: '리웨이 박사',
                    position: 'CEO 겸 창립자',
                    description: '20년 이상의 업계 경험을 가진 전 중국복지복권 이사. 아시아 복권 시스템 현대화의 선구자.',
                    expertise: '복권 전략, 시장 개발'
                },
                cto: {
                    name: '장밍',
                    position: '최고기술책임자',
                    description: '매일 수백만 건의 거래를 처리하는 대규모 복권 플랫폼 개발 경험을 가진 선도적인 시스템 설계자.',
                    expertise: '시스템 아키텍처, 블록체인, AI'
                },
                legal: {
                    name: '사라 존슨',
                    position: '법무이사',
                    description: '30개 이상의 관할권에서 경험을 가진 게임 규제 및 규정 준수 전문 국제 변호사.',
                    expertise: '규제 준수, 국제법'
                },
                operations: {
                    name: '카를로스 로드리게스',
                    position: '운영이사',
                    description: '신흥 시장에서 복권 운영 출시 및 관리에 대한 실무 경험을 가진 업계 베테랑.',
                    expertise: '운영 관리, 교육, 지원'
                }
            },
            partners: {
                title: '우리의 전략적 파트너',
                description: '복권 가치 사슬 전반에 걸친 선도적인 조직들과 협력하여 포괄적인 솔루션을 제공합니다.',
                tech_partners: '기술 파트너',
                regulatory_partners: '규제 고문',
                operational_partners: '운영 파트너'
            },
            credentials: {
                title: '우리의 자격',
                certifications: '인증',
                cert1: '정보보안 관리를 위한 ISO 27001 인증',
                cert2: 'GLI (Gaming Laboratories International) 인증',
                cert3: 'SOC 2 Type II 준수',
                awards: '수상 및 인정',
                award1: '2023 글로벌 복권 혁신상',
                award2: '최우수 기술 솔루션 제공업체 - 2022 아시아 게이밍 어워드',
                award3: '수출 우수상 - 2021 중국 상공회의소'
            },
            commitment: {
                title: '우리의 약속',
                description: '우리는 전 세계적으로 복권 산업의 책임감 있는 성장을 촉진하는 데 전념하며, 우리의 솔루션이 수익을 창출할 뿐만 아니라 우리가 서비스하는 지역사회의 사회적, 경제적 발전에도 기여하도록 보장합니다.',
                responsibility: '책임감 있는 게임',
                sustainability: '지속 가능한 관행',
                community: '지역사회 영향'
            },
            cta: {
                title: '복권 시장을 변화시킬 준비가 되셨나요?',
                description: 'LottoBridge를 복권 성공을 위한 신뢰할 수 있는 파트너로 선택한 글로벌 리더들과 함께하세요.',
                btn_contact: '오늘 연락하기',
                btn_schedule: '상담 예약',
                btn_download: '회사 브로셔 다운로드'
            }
        }
    },
    ar: {
        // عنوان الصفحة
        page: {
            title: 'LottoBridge | منصة الحلول الشاملة لتصدير اليانصيب العالمي'
        },
        nav: {
            home: 'الرئيسية',
            market_research: 'أبحاث السوق',
            products: 'المنتجات والخدمات',
            insights: 'رؤى الصناعة',
            case_studies: 'دراسات الحالة',
            about: 'من نحن',
            contact: 'اتصل بنا'
        },
        // صفحة المنتجات والخدمات
        products: {
            page: {
                title: 'المنتجات والخدمات | LottoBridge'
            },
            hero: {
                title: 'حلول اليانصيب الشاملة العالمية',
                description: 'دمج موارد سلسلة صناعة اليانصيب الأساسية في الصين، وتوفير خدمات شاملة من أبحاث السوق وتطوير الأنظمة ومعدات المحطات الطرفية إلى دعم التشغيل',
                btn_view_services: 'عرض حلول الخدمات',
                btn_contact_consultant: 'اتصل بمستشار المبيعات'
            },
            services: {
                title: 'المنتجات والخدمات الأساسية',
                description: 'لا تقدم LottoBridge مجرد قائمة منتجات، بل حزمة حلول يانصيب شاملة قابلة للتنفيذ "البحث والتصميم والنظام والمعدات والتدريب والتصدير والتعاون"',
                lottery_system: {
                    title: 'خدمات نظام اليانصيب',
                    description: 'حلول نظام يانصيب كاملة تدعم أنواع ألعاب يانصيب متنوعة وتلبي متطلبات التنظيم في مختلف البلدان للمبيعات والسحب والتسوية',
                    feature1: 'دعم الوصول متعدد اللغات والألعاب والمحطات الطرفية',
                    feature2: 'توفير حلول خدمة SaaS السحابية والنشر الخاص المحلي',
                    feature3: 'دعم التكامل مع منصات التنظيم والأنظمة المالية وخلفية تحليل البيانات الضخمة',
                    feature4: 'تشمل وحدات إدارة المبيعات وإدارة السحب وتتبع مكافحة التزوير وإدارة علاقات العملاء CRM'
                },
                terminal_equipment: {
                    title: 'خدمات معدات محطة اليانصيب الطرفية',
                    description: 'توفير معدات محطة مبيعات يانصيب متنوعة مثل المحطات الطرفية ذاتية الخدمة والمحطات الطرفية المحمولة وآلات POS لتلبية متطلبات سيناريوهات المبيعات المختلفة',
                    feature1: 'محطة مبيعات يانصيب ذاتية الخدمة (تشغيل شاشة لمس، دعم طرق دفع متعددة)',
                    feature2: 'محطة مبيعات يانصيب محمولة (مبيعات متنقلة، مناسبة للمتاجر الصغيرة)',
                    feature3: 'آلة POS مخصصة لليانصيب (تكامل وظائف الطباعة والمسح والدفع)',
                    feature4: 'خدمات مراقبة المعدات عن بُعد وتشخيص الأعطال وترقية البرامج'
                },
                game_design: {
                    title: 'تصميم وتطوير ألعاب اليانصيب',
                    description: 'بناءً على الخبرة الغنية في السوق الصيني لليانصيب، تخصيص منتجات ألعاب يانصيب للعملاء الخارجيين تتوافق مع اللوائح والثقافة المحلية',
                    feature1: 'تصميم ألعاب شاملة تشمل الأرقام واليانصيب والمراهنات الرياضية والألعاب الفورية',
                    feature2: 'توطين قواعد الألعاب وتحسين هيكل الجوائز وتصميم احتمالات الفوز',
                    feature3: 'تصميم واجهة المستخدم/تجربة المستخدم للألعاب وإنتاج المواد متعددة الوسائط',
                    feature4: 'التحقق من النماذج الرياضية للألعاب ودعم المراجعة من طرف ثالث'
                },
                printing: {
                    title: 'خدمات طباعة تذاكر اليانصيب والورق الحراري',
                    description: 'توفير خدمات طباعة تذاكر يانصيب عالية الجودة مثل تذاكر اليانصيب الفورية وتذاكر الورق الحراري، مع ضمان الأمان ضد التزوير وجودة الطباعة',
                    feature1: 'طباعة تذاكر اليانصيب الفورية (خدش، تمزيق، إلخ)',
                    feature2: 'طباعة تذاكر يانصيب الورق الحراري (مناسبة لطباعة تذاكر معدات المحطة الطرفية)',
                    feature3: 'تطبيق تكنولوجيا مكافحة التزوير (علامة مائية، ختم أمان، حبر خاص، إلخ)',
                    feature4: 'خدمات فحص جودة الطباعة والتعبئة والشحن وإدارة المخزون'
                },
                consulting: {
                    title: 'خدمات أبحاث السوق والاستشارات',
                    description: 'فريق محترف يقدم خدمات استشارية شاملة من تحليل دخول السوق إلى تنفيذ الأعمال',
                    feature1: 'إنتاج تقارير السوق لأكثر من 132 دولة بنقرة واحدة بناءً على الذكاء الاصطناعي',
                    feature2: 'تشمل البيانات الأساسية للبيئة القانونية وحجم السوق والألعاب الرئيسية',
                    feature3: 'توفير خدمات بناء النماذج التجارية والتنبؤ المالي',
                    feature4: 'نماذج التعاون وتوصيات الامتثال القانوني'
                },
                training: {
                    title: 'خدمات التدريب التشغيلي',
                    description: 'توفير تدريب منهجي لمراحل مختلفة من تشغيل اليانصيب لضمان قدرة الفريق على التشغيل بسرعة',
                    feature1: 'تدريب تشغيل النظام (محطة المبيعات الطرفية، إدارة الخلفية)',
                    feature2: 'تدريب عملية المبيعات وصيانة المحطة الطرفية',
                    feature3: 'إدارة الوكلاء وتصميم سياسة العمولة',
                    feature4: 'تدريب تحليل البيانات وخدمة العملاء'
                }
            },
            cases: {
                title: 'قصص النجاح العالمية',
                description: 'تم تنفيذ حلولنا بنجاح في عدة دول ومناطق، مما جلب الابتكار والنمو لأسواق اليانصيب المحلية',
                mexico: {
                    title: 'مشروع نظام اليانصيب المكسيكي',
                    description: 'توفير نظام يانصيب رقمي كامل لليانصيب الوطني المكسيكي، يدعم أنواع ألعاب متعددة مع مبيعات سنوية تتجاوز مليار دولار',
                    stat1: 'المبيعات السنوية (دولار أمريكي)',
                    stat2: 'نقاط البيع'
                },
                south_africa: {
                    title: 'توريد تذاكر فورية لليانصيب الوطني لجنوب أفريقيا',
                    description: 'توفير 120 مليون تذكرة فورية مخصصة لليانصيب الوطني لجنوب أفريقيا، تشمل 12 تصميم موضوع ثقافي محلي، مع اكتمال التسليم خلال 6 أشهر'
                },
                vietnam: {
                    title: 'مشروع التحول الرقمي لليانصيب الفيتنامي',
                    description: 'مساعدة شركة اليانصيب الفيتنامية على إكمال التحول الرقمي، نشر نظام يانصيب سحابي وتدريب 300 موظف تقني، تحقيق نمو مبيعات بنسبة 40%'
                }
            },
            cta: {
                title: 'هل أنت مستعد لبدء أعمال اليانصيب؟',
                description: 'اتصل بفريق الخبراء لدينا للحصول على حلول مخصصة وعروض أسعار مفصلة',
                btn_contact: 'اتصل الآن',
                btn_market_report: 'عرض تقرير السوق',
                btn_download: 'تحميل دليل الخدمات'
            }
        },
        // صفحة دراسات الحالة
        case_studies: {
            page: {
                title: 'دراسات الحالة | LottoBridge'
            },
            hero: {
                title: 'قصص النجاح العالمية',
                description: 'استكشف مشاريع اليانصيب الناجحة في جميع أنحاء العالم وتعلم كيف تساعد LottoBridge العملاء في تحقيق أهدافهم التجارية',
                btn_view_all: 'عرض جميع الحالات',
                btn_contact: 'اتصل بنا'
            },
            filters: {
                region: {
                    title: 'المنطقة',
                    all: 'جميع المناطق',
                    asia: 'آسيا',
                    europe: 'أوروبا',
                    africa: 'أفريقيا',
                    america: 'أمريكا'
                },
                project_type: {
                    title: 'نوع المشروع',
                    all: 'جميع الأنواع',
                    system: 'تطوير النظام',
                    printing: 'طباعة التذاكر',
                    consulting: 'الخدمات الاستشارية',
                    training: 'التدريب التشغيلي'
                },
                service: {
                    title: 'محتوى الخدمة',
                    all: 'جميع الخدمات',
                    lottery_system: 'نظام اليانصيب',
                    terminal: 'معدات المحطة الطرفية',
                    game_design: 'تصميم الألعاب',
                    market_research: 'أبحاث السوق'
                },
                year: {
                    title: 'السنة',
                    all: 'جميع السنوات',
                    year_2024: '2024',
                    year_2023: '2023',
                    year_2022: '2022'
                },
                reset_btn: 'إعادة تعيين المرشحات',
                apply_btn: 'تطبيق المرشحات'
            },
            cases: {
                cambodia: {
                    title: 'شراكة توطين نظام اليانصيب',
                    type: 'تطوير النظام + نشر المحطات الطرفية',
                    feature1: 'تخصيص كامل لنظام اليانصيب + نشر محطات طرفية محلية + تدريب وحدة CRM',
                    feature2: 'دعم واجهة النظام الخميرية وتكامل المحطات الطرفية أندرويد',
                    testimonial: '"تم إطلاق شبكة المبيعات المحلية بسرعة، تم نشر أكثر من 1200 محطة POS، زيادة مبيعات سنوية متوقعة بقيمة 22 مليون دولار، نمو أكثر من 42%"'
                },
                uganda: {
                    title: 'النشر السريع لمشروع التذاكر الفورية',
                    type: 'طباعة التذاكر + التصدير اللوجستي',
                    feature1: 'استشارات فئات اليانصيب + تصميم تذاكر آمنة + طباعة تذاكر فورية',
                    feature2: 'تم توفير 10 أنواع تذاكر مخصصة، جميعها اجتازت مراجعة الحكومة المحلية',
                    testimonial: '"دورة المشروع 4 أشهر فقط، وصل استطلاع رضا التذاكر إلى 92%، الورق الحراري والمنتجات المطبوعة اجتازت بنجاح شهادة الضرائب، إطلاق سريع في السوق"'
                },
                brazil: {
                    title: 'الاستشارات الاستراتيجية والبحث المسبق للنظام',
                    type: 'شراكة استشارية + أبحاث السوق',
                    feature1: 'تحليل سياسة دخول السوق + بحث الذكاء الاصطناعي + تخطيط نظام اليانصيب عبر الإنترنت',
                    feature2: 'تم توفير 4 جولات من المناقشات السياسية + اتصالات الخبراء المحليين + دعم الكتاب الأبيض',
                    testimonial: '"ساعد العميل في تطوير خارطة طريق التنمية لمدة 3 سنوات، دعم تأكيد اتجاه الاستثمار الاستراتيجي"'
                },
                uzbekistan: {
                    title: 'حل اليانصيب الشامل',
                    type: 'تطوير النظام + التدريب التشغيلي',
                    feature1: 'تطوير نظام اليانصيب + معدات المحطة الطرفية + تدريب فريق التشغيل',
                    feature2: 'دعم واجهة اللغة الأوزبكية، نشر توطين كامل',
                    testimonial: '"النظام يعمل بثبات لمدة 18 شهراً، شبكة المبيعات تغطي المدن الرئيسية في جميع أنحاء البلاد، متوسط نمو المبيعات الشهرية 35%"'
                },
                view_details: 'عرض التفاصيل',
                download_brief: 'تحميل الملخص'
            },
            cta: {
                title: 'هل أنت مستعد لبدء مشروع اليانصيب الخاص بك؟',
                description: 'اتصل بفريق الخبراء لدينا للحصول على حلول مخصصة واستشارات المشروع',
                contact_btn: 'اتصل الآن',
                download_btn: 'تحميل مجموعة الحالات'
            }
        },
        // صفحة رؤى الصناعة
        insights: {
            page: {
                title: 'رؤى الصناعة | LottoBridge'
            },
            hero: {
                title: 'رؤى صناعة اليانصيب العالمية',
                description: 'تحليل عميق لاتجاهات السوق العالمي لليانصيب والتطورات السياسية والابتكارات التكنولوجية لدعم اتخاذ قراراتك',
                btn_view_trends: 'عرض تقارير الاتجاهات',
                btn_subscribe: 'الاشتراك في النشرة الصناعية'
            },
            nav_categories: {
                policy_tracking: 'تتبع السياسات واللوائح',
                market_trends: 'تقارير اتجاهات السوق',
                tech_trends: 'تحليل الاتجاهات التكنولوجية',
                case_studies: 'دراسات الحالة',
                industry_reports: 'التقارير الصناعية',
                webinars: 'المحاضرات المرئية'
            },
            trends: {
                title: 'تحليل الاتجاهات',
                subtitle: 'اتجاهات تطوير صناعة اليانصيب العالمية بناءً على تحليل البيانات الضخمة',
                card_title: 'توقعات الاتجاهات الخمسة الرئيسية لصناعة اليانصيب العالمية 2025',
                card_description: 'تشهد صناعة اليانصيب العالمية تحولاً عميقاً',
                trend1: {
                    title: 'التحول الرقمي المتسارع',
                    description: 'ستمثل المبيعات المحمولة أكثر من 60%، وتصبح أنظمة اليانصيب السحابية الخيار الرئيسي'
                },
                trend2: {
                    title: 'متطلبات الامتثال التنظيمي المعززة',
                    description: 'تعزز البلدان متطلبات الامتثال لمكافحة غسل الأموال وحماية البيانات، مما يرفع الحواجز التقنية بشكل كبير'
                },
                trend3: {
                    title: 'التطبيق العميق لتكنولوجيا الذكاء الاصطناعي',
                    description: 'يُطبق الذكاء الاصطناعي على نطاق واسع في مراقبة المخاطر وتحليل العملاء وتصميم الألعاب ومجالات أخرى'
                },
                trend4: {
                    title: 'التعاون العابر للحدود المعزز',
                    description: 'تصبح التحالفات الدولية لليانصيب ونماذج التعاون للمشغلين متعددي الجنسيات أكثر نضجاً'
                },
                trend5: {
                    title: 'التركيز على التنمية المستدامة',
                    description: 'تُدمج مفاهيم ESG في عمليات اليانصيب، وتصبح اليانصيب الأخضر والمسؤولية الاجتماعية كلمات مفتاحية'
                }
            },
            policy: {
                title: 'تتبع السياسات',
                subtitle: 'تتبع في الوقت الفعلي لتغييرات السياسات واللوائح العالمية لليانصيب',
                nigeria: {
                    title: 'اعتماد مشروع قانون اليانصيب الجديد في نيجيريا',
                    description: 'يسمح للمشغلين الخاصين بالمشاركة، ومن المتوقع أن ينمو حجم السوق بنسبة 300%'
                },
                thailand: {
                    title: 'إطلاق تجربة اليانصيب الرقمي في تايلاند',
                    description: 'تبدأ الدفعة الأولى من 5 مقاطعات مشروع تجريبي لمبيعات اليانصيب الرقمي'
                },
                colombia: {
                    title: 'كولومبيا تراجع السياسة الضريبية لليانصيب',
                    description: 'تخفض معدل ضريبة اليانصيب إلى 15%، مما يحفز نمو السوق'
                },
                pakistan: {
                    title: 'عملية إضفاء الشرعية على اليانصيب في باكستان',
                    description: 'يدرس البرلمان مشروع قانون إضفاء الشرعية على اليانصيب، ومن المتوقع اعتماده خلال العام'
                }
            },
            tech_trends: {
                title: 'الاتجاهات التكنولوجية',
                subtitle: 'استكشاف أحدث التطبيقات التكنولوجية والابتكارات في صناعة اليانصيب',
                ai_prediction: {
                    title: 'تطبيقات الذكاء الاصطناعي في التنبؤ بسلوك العملاء',
                    description: 'تساعد خوارزميات التعلم الآلي المشغلين على فهم احتياجات العملاء بشكل أفضل وتحسين معدلات تحويل المبيعات'
                },
                anti_counterfeiting: {
                    title: 'اختراق في تكنولوجيا مكافحة التزوير بالبلوك تشين',
                    description: 'يضمن نظام مكافحة تزوير اليانصيب القائم على البلوك تشين عملية سحب شفافة وموثوقة'
                },
                intelligent_design: {
                    title: 'منصة تصميم الألعاب الذكية',
                    description: 'تولد أدوات تصميم الألعاب المدعومة بالذكاء الاصطناعي بسرعة ألعاب يانصيب تلبي احتياجات التوطين'
                },
                read_more: 'اقرأ المزيد'
            },
            webinars: {
                title: 'المحاضرات المرئية',
                subtitle: 'حوار عميق مع خبراء الصناعة',
                description: 'دعوة خبراء صناعة اليانصيب العالمية لمشاركة أحدث رؤى السوق والخبرة العملية',
                webinar1: {
                    title: 'مراجعة وتوقعات السوق العالمي لليانصيب 2024',
                    speaker: 'د. سارة جونسون',
                    role: 'الرئيسة، الجمعية الدولية لليانصيب',
                    description: 'تحليل عميق لأداء السوق العالمي لليانصيب 2024، والتنبؤ باتجاهات التطوير 2025'
                },
                webinar2: {
                    title: 'التحول الرقمي: فرص جديدة لليانصيب التقليدي',
                    speaker: 'مارك تشين',
                    role: 'المدير التقني LottoBridge',
                    description: 'مشاركة حالات نجاح التحول الرقمي، واستكشاف تأثير الابتكار التكنولوجي على صناعة اليانصيب'
                },
                webinar3: {
                    title: 'تحليل فرص الاستثمار في يانصيب الأسواق الناشئة',
                    speaker: 'كارلوس رودريغيز',
                    role: 'الأمين العام، تحالف اليانصيب اللاتيني الأمريكي',
                    description: 'تحليل فرص ومخاطر الاستثمار في اليانصيب في الأسواق الناشئة مثل أمريكا اللاتينية وأفريقيا'
                },
                watch_btn: 'مشاهدة الإعادة'
            },
            subscribe: {
                title: 'الاشتراك في النشرة الصناعية',
                description: 'احصل على أحدث تحديثات الصناعة وتغييرات السياسات وتحليل السوق كل أسبوع',
                email_placeholder: 'أدخل عنوان بريدك الإلكتروني',
                button: 'اشترك الآن',
                privacy_notice: 'بالاشتراك، فإنك توافق على',
                privacy_policy: 'سياسة الخصوصية'
            }
        },
        // صفحة أبحاث السوق
        market_research: {
            page: {
                title: 'أبحاث السوق | LottoBridge'
            },
            hero: {
                title: 'اكتشف الفرص العالمية لليانصيب مع أبحاث السوق المدعومة بالذكاء الاصطناعي',
                subtitle: 'فهم سياسات وحجم وفرص سوق اليانصيب العالمي بسرعة',
                description: 'مدعوم بنظام ذكاء السوق العالمي LottoBridge AI، يوفر معلومات بيانات اليانصيب الوطنية في مكان واحد لمساعدتك على اتخاذ قرارات السوق المدروسة',
                btn_select_country: 'اختر البلد',
                btn_generate_report: 'إنشاء تقرير',
                btn_view_sample: 'عرض تقرير نموذجي'
            },
            country_search: {
                title: 'اختر بلد اهتمامك',
                placeholder: 'البحث عن البلدان أو المناطق...',
                filter_all: 'الكل',
                filter_asia: 'آسيا',
                filter_europe: 'أوروبا',
                filter_africa: 'أفريقيا',
                filter_america: 'الأمريكتان',
                filter_english: 'الناطقة بالإنجليزية',
                filter_emerging: 'الأسواق الناشئة',
                coverage: 'يغطي حاليًا 132 دولة ومنطقة'
            },
            recommended_markets: {
                title: 'الأسواق الموصى بها'
            },
            countries: {
                labels: {
                    market_status: 'حالة السوق:',
                    lottery_types: 'أنواع اليانصيب:',
                    annual_sales: 'المبيعات السنوية المقدرة:',
                    main_structure: 'الهيكل الرئيسي:',
                    typical_games: 'الألعاب النموذجية:'
                },
                buttons: {
                    view_details: 'عرض التفاصيل',
                    download_report: 'تحميل التقرير',
                    book_consultation: 'حجز استشارة'
                },
                egypt: {
                    name: 'مصر',
                    description: 'أكبر سوق يانصيب في شمال أفريقيا',
                    market_status: 'تشغيل قانوني',
                    lottery_types: 'لوتو، فوري، رقمي',
                    annual_sales: 'حوالي 430 مليون دولار',
                    main_structure: 'هيئة اليانصيب الوطنية',
                    typical_games: '6/49، 4D، خدش'
                },
                mexico: {
                    name: 'المكسيك',
                    description: 'السوق الرائد في أمريكا اللاتينية',
                    market_status: 'وصول خاص',
                    lottery_types: 'لوتو، رهان رياضي',
                    annual_sales: 'حوالي 1.25 مليار دولار',
                    main_structure: 'مشغلون تعاونيون',
                    typical_games: 'Melate، Chispazo'
                },
                philippines: {
                    name: 'الفلبين',
                    description: 'سوق عالي النمو في جنوب شرق آسيا',
                    market_status: 'وصول خاص',
                    lottery_types: 'لوتو، فوري، ألعاب إلكترونية',
                    annual_sales: 'حوالي 870 مليون دولار',
                    main_structure: 'تشغيل خاص مستقل',
                    typical_games: 'Ultra Lotto 6/58'
                }
            },
            report_preview: {
                title: 'تقرير متعمق لسوق اليانصيب المصري',
                tabs: {
                    overview: 'نظرة عامة على البلد',
                    regulations: 'القوانين واللوائح',
                    market_size: 'حجم السوق',
                    product_structure: 'هيكل المنتج',
                    key_players: 'اللاعبون الرئيسيون',
                    business_opportunities: 'الفرص التجارية'
                },
                content: {
                    overview: {
                        title: 'نظرة عامة على البلد',
                        demographics: 'مصر هي أكثر البلدان العربية اكتظاظًا بالسكان مع أكثر من 100 مليون نسمة، 60% منهم تحت سن 30 عامًا. يصل انتشار الإنترنت إلى 65%، واستخدام المدفوعات المحمولة ينمو بسرعة.',
                        history: 'لليانصيب تاريخ طويل في مصر، يعود إلى الستينيات. قانون "اليانصيب والألعاب" المُنقح في 2018 وضع الأسس لتحديث السوق.',
                        legal_development: 'عملية التطوير القانوني لليانصيب',
                        timeline_1960: '1960: مصر أدخلت لأول مرة نظام اليانصيب الوطني',
                        timeline_2018: '2018: مراجعة "قانون اليانصيب والألعاب"، السماح لمشغلين خاصين بالمشاركة',
                        timeline_2021: '2021: إطلاق مشروع تجريبي لليانصيب الرقمي'
                    }
                }
            },
            download: {
                title: 'احصل على التقرير الكامل بصيغة PDF',
                description: 'سجل لتحميل التقرير الكامل + التحديثات الشهرية العالمية، مجاناً تماماً!',
                form: {
                    email: 'البريد الإلكتروني',
                    company: 'اسم الشركة',
                    country: 'البلد',
                    country_placeholder: 'يرجى الاختيار',
                    china: 'الصين',
                    usa: 'الولايات المتحدة',
                    subscribe: 'الاشتراك في النشرة الشهرية لاستخبارات السوق من LottoBridge',
                    submit: 'احصل عليه الآن'
                }
            },
            recent_updates: {
                title: 'التقارير المحدثة مؤخراً',
                uzbekistan: {
                    title: 'تقرير سوق اليانصيب في أوزبكستان',
                    update_time: 'محدث: ديسمبر 2024',
                    tag1: 'سوق ناشئ',
                    tag2: 'دخول خاص',
                    tag3: 'إمكانية نمو عالية'
                },
                cambodia: {
                    title: 'تقرير سوق اليانصيب في كمبوديا',
                    update_time: 'محدث: يناير 2025',
                    tag1: 'تعاون حكومي',
                    tag2: 'محطة POS',
                    tag3: 'إصدار مركزي'
                },
                nigeria: {
                    title: 'تقرير سوق اليانصيب في نيجيريا',
                    update_time: 'محدث: نوفمبر 2024',
                    tag1: 'عدد سكان كبير',
                    tag2: 'انتشار منخفض',
                    tag3: 'منطقة رمادية تنظيمية'
                }
            },
            testimonials: {
                title: 'شهادات العملاء',
                testimonial1: {
                    text: 'حصلنا على تقارير أبحاث اليانصيب لـ 5 دول في أمريكا اللاتينية من خلال LottoBridge، واخترنا في النهاية المكسيك كخيارنا الأول. كان تحليل السياسات وتوقعات حجم السوق في التقرير دقيقاً جداً، مما وفر علينا الكثير من وقت البحث الأولي.',
                    author_name: 'تشانغ وي',
                    author_title: 'الرئيس التنفيذي لمزود خدمات التكنولوجيا لليانصيب في جنوب شرق آسيا'
                }
            },
            cta: {
                title: 'لم تجد استخبارات السوق التي تحتاجها؟',
                description: 'يمكن لفريق خبرائنا تقديم خدمات أبحاث السوق المخصصة لك',
                btn_custom_research: 'تقديم طلب بحث مخصص',
                btn_contact_support: 'اتصل بخدمة العملاء'
            }
        },
        hero: {
            title: 'منصة الحلول الشاملة لتصدير اليانصيب العالمي',
            subtitle: 'الاستفادة من موارد سلسلة صناعة اليانصيب القوية في الصين، ودمج برامج النظام، وأجهزة المحطات الطرفية، وطباعة التذاكر، والمواد الاستهلاكية الحرارية لمساعدة الوكالات الحكومية والمشغلين الخاصين في جميع أنحاء العالم على دخول سوق اليانصيب بسرعة',
            cta_primary: 'تقرير أبحاث السوق المُولد بالذكاء الاصطناعي',
            cta_secondary: 'اتصل بمستشارينا'
        },
        features: {
            title: 'ما يمكننا فعله لك',
            subtitle: 'LottoBridge ليس مجرد منصة B2B، بل نظام شامل لتنفيذ أعمال اليانصيب يساعد العملاء على الانتقال من "تقييم الفرص" إلى "التنفيذ" في خطوة واحدة',
            consulting: {
                title: 'الاستشارة المسبقة وتخطيط السوق',
                desc: 'محرك أبحاث السوق العالمي بالذكاء الاصطناعي ينتج تقارير مهنية حول سياسات اليانصيب وحجم السوق وتحليل المخاطر لأكثر من 100 دولة بنقرة واحدة'
            },
            products: {
                title: 'المنتجات والخدمات التقنية',
                desc: 'خدمات نظام اليانصيب الكاملة، سلسلة توريد معدات المحطات الطرفية، تصميم وتطوير ألعاب اليانصيب، خدمات طباعة التذاكر والورق الحراري'
            },
            support: {
                title: 'الدعم التشغيلي وخدمات التنفيذ',
                desc: 'التدريب والإرشاد التشغيلي، مطابقة العرض والطلب وإدارة الطلبات، دعم التصدير والامتثال، مطابقة الشركاء الاستراتيجيين'
            }
        },
        solutions: {
            title: 'حلولنا الأساسية',
            subtitle: 'منتجات وخدمات مخصصة لاحتياجات السوق المختلفة',
            software: {
                title: 'برنامج نظام اليانصيب',
                description: 'أنظمة كاملة لبيع اليانصيب والسحب والتسوية تدعم ألعاب اليانصيب المختلفة وتلبي المتطلبات التنظيمية للدول المختلفة'
            },
            hardware: {
                title: 'معدات الأجهزة الطرفية',
                description: 'محطات يانصيب عالية الأداء، آلات تذاكر الخدمة الذاتية، أجهزة بيع متنقلة متكيفة مع سيناريوهات البيع المختلفة'
            },
            printing: {
                title: 'خدمات طباعة التذاكر',
                description: 'طباعة تذاكر فورية آمنة مضادة للتزوير متوافقة مع معايير الأمان الدولية، تدعم التصميم المخصص'
            },
            learn_more: 'اعرف المزيد'
        },
        global: {
            title: 'التغطية العالمية للسوق',
            subtitle: 'تم تنفيذ حلولنا بنجاح في عدة دول ومناطق حول العالم',
            regions: {
                latinAmerica: 'أمريكا اللاتينية',
                africa: 'أفريقيا',
                southeastAsia: 'جنوب شرق آسيا',
                centralEasternEurope: 'أوروبا الوسطى والشرقية',
                middleEast: 'الشرق الأوسط'
            }
        },
        testimonials: {
            title: 'شهادات العملاء',
            subtitle: 'استمع إلى كيفية تقييم شركائنا لخدمات LottoBridge',
            quote: 'قدمت LottoBridge لنا حلاً كاملاً لنظام اليانصيب، استغرق 3 أشهر فقط من أبحاث السوق إلى تنفيذ النظام. فريقهم المحترف وخدمتهم الشاملة قللت بشكل كبير من مخاطرنا التشغيلية.',
            author: 'كارلوس مينديز',
            position: 'الرئيس التنفيذي، مشغل اليانصيب المكسيكي'
        },
        cta: {
            title: 'هل أنت مستعد لدخول سوق اليانصيب العالمي؟',
            subtitle: 'سواء كنت وكالة حكومية أو مشغل خاص أو مزود تكنولوجيا، يمكن لـ LottoBridge تقديم الحل الأنسب لك',
            contact_now: 'استشر الآن',
            book_demo: 'جدولة عرض توضيحي'
        },
        footer: {
            company: {
                description: 'منصة حلول شاملة لتصدير اليانصيب العالمي، تستفيد من موارد سلسلة صناعة اليانصيب القوية في الصين لمساعدة العملاء في جميع أنحاء العالم على دخول سوق اليانصيب بسرعة.'
            },
            products: {
                title: 'المنتجات والخدمات',
                lottery_system: 'حلول أنظمة اليانصيب',
                terminal_equipment: 'توريد معدات المحطات الطرفية',
                game_design: 'تصميم وتطوير الألعاب',
                printing: 'خدمات طباعة التذاكر',
                market_research: 'أبحاث السوق والاستشارة'
            },
            resources: {
                title: 'مركز الموارد',
                case_studies: 'دراسات الحالة',
                whitepapers: 'تحميل الكتب البيضاء',
                industry_reports: 'تقارير الصناعة',
                blog_news: 'المدونة والأخبار',
                faq: 'الأسئلة الشائعة',
                insights: 'رؤى الصناعة',
                technical_docs: 'الوثائق التقنية',
                download_center: 'مركز التحميل'
            },
            contact: {
                title: 'اتصل بنا',
                address: 'شارع القرن 1000، منطقة بودونغ الجديدة، شنغهاي، الصين',
                form: {
                    company_name: 'اسم الشركة',
                    contact_person: 'الشخص المسؤول',
                    email: 'البريد الإلكتروني',
                    phone: 'رقم الهاتف',
                    country: 'البلد/المنطقة',
                    select_country: 'يرجى اختيار البلد',
                    needs: 'نوع الاحتياجات',
                    government: 'الحكومة',
                    operator: 'المشغل',
                    supplier: 'المورد',
                    investor: 'المستثمر',
                    other: 'أخرى',
                    message: 'رسالة مفصلة',
                    privacy_agree: 'أوافق على سياسة الخصوصية',
                    submit: 'إرسال',
                    countries: {
                        china: 'الصين',
                        usa: 'الولايات المتحدة',
                        uk: 'المملكة المتحدة',
                        japan: 'اليابان',
                        south_korea: 'كوريا الجنوبية',
                        russia: 'روسيا',
                        brazil: 'البرازيل',
                        india: 'الهند'
                    }
                }
            },
            copyright: 'جميع الحقوق محفوظة.',
            privacy_policy: 'سياسة الخصوصية',
            terms_of_service: 'شروط الخدمة'
        },
        // صفحة من نحن
        about: {
            page: {
                title: 'من نحن | LottoBridge'
            },
            hero: {
                title: 'ربط العالم بحلول اليانصيب الصينية',
                subtitle: 'شريكك الموثوق للنجاح العالمي في اليانصيب',
                description: 'LottoBridge هي المنصة الرائدة التي تربط خبرة اليانصيب الصينية بالفرص العالمية، وتوفر حلولاً شاملة من أبحاث السوق إلى التنفيذ التشغيلي.'
            },
            who_we_are: {
                title: 'من نحن؟',
                description: 'LottoBridge هي منصة مبتكرة تستفيد من الخبرة الواسعة والموارد في صناعة اليانصيب الصينية لخدمة الأسواق العالمية. كجسر بين الخبرة الصينية في اليانصيب والفرص الدولية، نتخصص في توفير حلول شاملة تمتد عبر سلسلة القيمة الكاملة لليانصيب.',
                highlight: 'منذ عام 2020، سهلنا بنجاح أكثر من 50 مشروع يانصيب في 25 دولة، مما حقق أكثر من 2 مليار دولار في المبيعات التراكمية.'
            },
            vision: {
                title: 'رؤيتنا',
                main: 'أن نصبح المنصة العالمية الرائدة التي تُضفي الطابع الديمقراطي على الوصول إلى حلول اليانصيب ذات المستوى العالمي، مما يمكن أي دولة أو منطقة من إنشاء وتشغيل أنظمة يانصيب ناجحة.',
                challenges: {
                    title: 'التحديات التي نحلها',
                    challenge1: {
                        title: 'حواجز الدخول العالية',
                        description: 'تتطلب أنظمة اليانصيب التقليدية استثمارات ضخمة وخبرة تقنية لا تمتلكها العديد من الأسواق الناشئة.'
                    },
                    challenge2: {
                        title: 'التعقيد التنظيمي',
                        description: 'التنقل عبر الأطر القانونية المختلفة ومتطلبات الامتثال في ولايات قضائية متعددة.'
                    },
                    challenge3: {
                        title: 'فجوة المعرفة',
                        description: 'نقص الخبرة التشغيلية وأفضل الممارسات في الأسواق الجديدة على اليانصيب الحديث.'
                    }
                }
            },
            values: {
                title: 'قيمنا الأساسية',
                innovation: {
                    title: 'الابتكار',
                    description: 'نستفيد باستمرار من أحدث التقنيات وأفضل الممارسات من صناعة اليانصيب الصينية لإنشاء حلول متطورة.'
                },
                integrity: {
                    title: 'النزاهة',
                    description: 'نحافظ على أعلى معايير الشفافية والعدالة والامتثال الأخلاقي في جميع عملياتنا.'
                },
                partnership: {
                    title: 'الشراكة',
                    description: 'نؤمن ببناء علاقات طويلة الأمد قائمة على الثقة المتبادلة والاحترام والنجاح المشترك.'
                },
                excellence: {
                    title: 'التميز',
                    description: 'نلتزم بتقديم جودة فائقة في كل مشروع، من المفهوم الأولي إلى التنفيذ الكامل.'
                }
            },
            team: {
                title: 'فريق خبرائنا',
                description: 'يجمع فريقنا المتنوع بين عقود من الخبرة في صناعة اليانصيب مع الخبرة في التكنولوجيا والتنظيم والعمليات العالمية.',
                ceo: {
                    name: 'د. لي وي',
                    position: 'الرئيس التنفيذي والمؤسس',
                    description: 'مدير سابق في يانصيب الرفاهية الصيني مع أكثر من 20 عاماً من الخبرة في الصناعة. رائد في تحديث أنظمة اليانصيب في آسيا.',
                    expertise: 'استراتيجية اليانصيب، تطوير السوق'
                },
                cto: {
                    name: 'تشانغ مينغ',
                    position: 'مدير التكنولوجيا',
                    description: 'مهندس أنظمة رائد مع خبرة في تطوير منصات يانصيب واسعة النطاق تتعامل مع ملايين المعاملات يومياً.',
                    expertise: 'هندسة الأنظمة، البلوك تشين، الذكاء الاصطناعي'
                },
                legal: {
                    name: 'سارة جونسون',
                    position: 'مديرة الشؤون القانونية',
                    description: 'محامية دولية متخصصة في تنظيم الألعاب والامتثال مع خبرة في أكثر من 30 ولاية قضائية.',
                    expertise: 'الامتثال التنظيمي، القانون الدولي'
                },
                operations: {
                    name: 'كارلوس رودريغيز',
                    position: 'مدير العمليات',
                    description: 'خبير في الصناعة مع خبرة عملية في إطلاق وإدارة عمليات اليانصيب في الأسواق الناشئة.',
                    expertise: 'إدارة العمليات، التدريب، الدعم'
                }
            },
            partners: {
                title: 'شركاؤنا الاستراتيجيون',
                description: 'نتعاون مع المنظمات الرائدة عبر سلسلة قيمة اليانصيب لتقديم حلول شاملة.',
                tech_partners: 'الشركاء التقنيون',
                regulatory_partners: 'المستشارون التنظيميون',
                operational_partners: 'الشركاء التشغيليون'
            },
            credentials: {
                title: 'مؤهلاتنا',
                certifications: 'الشهادات',
                cert1: 'شهادة ISO 27001 لإدارة أمن المعلومات',
                cert2: 'شهادة GLI (مختبرات الألعاب الدولية)',
                cert3: 'امتثال SOC 2 النوع الثاني',
                awards: 'الجوائز والتقدير',
                award1: 'جائزة الابتكار العالمي في اليانصيب 2023',
                award2: 'أفضل مزود حلول تقنية - جوائز الألعاب الآسيوية 2022',
                award3: 'جائزة التميز في التصدير - غرفة التجارة الصينية 2021'
            },
            commitment: {
                title: 'التزامنا',
                description: 'نحن ملتزمون بتعزيز النمو المسؤول لصناعة اليانصيب عالمياً، مما يضمن أن حلولنا لا تولد الإيرادات فحسب، بل تساهم أيضاً في التنمية الاجتماعية والاقتصادية للمجتمعات التي نخدمها.',
                responsibility: 'الألعاب المسؤولة',
                sustainability: 'الممارسات المستدامة',
                community: 'التأثير المجتمعي'
            },
            cta: {
                title: 'هل أنت مستعد لتحويل سوق اليانصيب الخاص بك؟',
                description: 'انضم إلى القادة العالميين الذين اختاروا LottoBridge كشريك موثوق لنجاح اليانصيب.',
                btn_contact: 'اتصل بنا اليوم',
                btn_schedule: 'جدولة استشارة',
                btn_download: 'تحميل كتيب الشركة'
            }
        }
    },
    ru: {
        // Заголовок страницы
        page: {
            title: 'LottoBridge | Глобальная платформа комплексных решений для экспорта лотерей'
        },
        nav: {
            home: 'Главная',
            market_research: 'Исследование рынка',
            products: 'Продукты и услуги',
            insights: 'Отраслевые инсайты',
            case_studies: 'Кейсы',
            about: 'О нас',
            contact: 'Связаться с нами'
        },
        // Страница продуктов и услуг
        products: {
            page: {
                title: 'Продукты и услуги | LottoBridge'
            },
            hero: {
                title: 'Глобальные комплексные решения для лотерей',
                description: 'Интеграция основных ресурсов китайской лотерейной промышленной цепи, предоставление комплексных услуг от исследования рынка, разработки систем, терминального оборудования до операционной поддержки',
                btn_view_services: 'Посмотреть сервисные решения',
                btn_contact_consultant: 'Связаться с консультантом по продажам'
            },
            services: {
                title: 'Основные продукты и услуги',
                description: 'LottoBridge предоставляет не просто список продуктов, а комплексный пакет лотерейных решений "исследование, дизайн, система, оборудование, обучение, экспорт, сотрудничество", готовый к реализации',
                lottery_system: {
                    title: 'Услуги лотерейной системы',
                    description: 'Полные решения лотерейной системы, поддерживающие различные типы лотерейных игр и соответствующие регулятивным требованиям различных стран для продаж, розыгрышей и расчетов',
                    feature1: 'Поддержка многоязычного, многоигрового, многотерминального доступа',
                    feature2: 'Предоставление решений SaaS облачного сервиса и локального частного развертывания',
                    feature3: 'Поддержка интеграции с регулятивными платформами, финансовыми системами и бэкендом анализа больших данных',
                    feature4: 'Включает модули управления продажами, управления розыгрышами, отслеживания защиты от подделки, CRM управления клиентами'
                },
                terminal_equipment: {
                    title: 'Услуги терминального оборудования для лотерей',
                    description: 'Предоставление разнообразного терминального оборудования для продажи лотерей, такого как терминалы самообслуживания, портативные терминалы, POS-машины для удовлетворения требований различных сценариев продаж',
                    feature1: 'Терминал самообслуживания для продажи лотерей (сенсорное управление, поддержка множественных способов оплаты)',
                    feature2: 'Портативный терминал для продажи лотерей (мобильные продажи, подходит для небольших магазинов)',
                    feature3: 'Специализированная POS-машина для лотерей (интеграция функций печати, сканирования, оплаты)',
                    feature4: 'Услуги удаленного мониторинга оборудования, диагностики неисправностей, обновления программного обеспечения'
                },
                game_design: {
                    title: 'Дизайн и разработка лотерейных игр',
                    description: 'Основываясь на богатом опыте китайского лотерейного рынка, создание индивидуальных продуктов лотерейных игр для зарубежных клиентов, соответствующих местным регулятивным требованиям и культуре',
                    feature1: 'Комплексный дизайн игр, включая числовые, лото, спортивные ставки, мгновенные игры',
                    feature2: 'Локализация правил игр, оптимизация структуры призов, дизайн вероятностей выигрыша',
                    feature3: 'Дизайн UI/UX игр, производство мультимедийных материалов',
                    feature4: 'Верификация математических моделей игр, поддержка аудита третьей стороной'
                },
                printing: {
                    title: 'Услуги печати лотерейных билетов и термобумаги',
                    description: 'Предоставление высококачественных услуг печати лотерейных билетов, таких как мгновенные лотерейные билеты, билеты на термобумаге, обеспечивая безопасность защиты от подделки и качество печати',
                    feature1: 'Печать мгновенных лотерейных билетов (скретч, отрыв и т.д.)',
                    feature2: 'Печать лотерейных билетов на термобумаге (подходит для печати билетов терминального оборудования)',
                    feature3: 'Применение технологий защиты от подделки (водяной знак, защитная печать, специальные чернила и т.д.)',
                    feature4: 'Услуги контроля качества печати, упаковки и доставки, управления запасами'
                },
                consulting: {
                    title: 'Услуги исследования рынка и консультаций',
                    description: 'Профессиональная команда предоставляет комплексные консультационные услуги от анализа входа на рынок до реализации бизнеса',
                    feature1: 'Генерация отчетов о рынке для более чем 132 стран одним кликом на основе ИИ',
                    feature2: 'Включает ключевые данные о правовой среде, размере рынка, основных играх',
                    feature3: 'Предоставление услуг построения бизнес-моделей и финансового прогнозирования',
                    feature4: 'Модели сотрудничества и рекомендации по правовому соответствию'
                },
                training: {
                    title: 'Услуги операционного обучения',
                    description: 'Предоставление систематического обучения для различных этапов лотерейных операций, обеспечивая быструю способность команды к работе',
                    feature1: 'Обучение работе с системой (терминал продаж, управление бэкендом)',
                    feature2: 'Обучение процессу продаж и обслуживанию терминалов',
                    feature3: 'Управление агентами и дизайн комиссионной политики',
                    feature4: 'Обучение анализу данных и обслуживанию клиентов'
                }
            },
            cases: {
                title: 'Глобальные истории успеха',
                description: 'Наши решения были успешно внедрены в нескольких странах и регионах, принося инновации и рост местным лотерейным рынкам',
                mexico: {
                    title: 'Проект мексиканской лотерейной системы',
                    description: 'Предоставление полной цифровой лотерейной системы для Мексиканской национальной лотереи, поддерживающей множественные типы игр с годовыми продажами, превышающими 1 миллиард долларов',
                    stat1: 'Годовые продажи (USD)',
                    stat2: 'Точки продаж'
                },
                south_africa: {
                    title: 'Поставка мгновенных билетов для Южноафриканской национальной лотереи',
                    description: 'Предоставление 120 миллионов индивидуальных мгновенных билетов для Южноафриканской национальной лотереи, включая 12 дизайнов местных культурных тем, с завершением доставки в течение 6 месяцев'
                },
                vietnam: {
                    title: 'Проект цифровой трансформации вьетнамской лотереи',
                    description: 'Помощь вьетнамской лотерейной компании в завершении цифровой трансформации, развертывание облачной лотерейной системы и обучение 300 технических сотрудников, достижение 40% роста продаж'
                }
            },
            cta: {
                title: 'Готовы начать лотерейный бизнес?',
                description: 'Свяжитесь с нашей командой экспертов для получения индивидуальных решений и подробных предложений',
                btn_contact: 'Связаться сейчас',
                btn_market_report: 'Посмотреть отчет о рынке',
                btn_download: 'Скачать руководство по услугам'
            }
        },
        hero: {
            title: 'Глобальная платформа комплексных решений для экспорта лотерей',
            subtitle: 'Используя мощные ресурсы китайской лотерейной промышленной цепи, интегрируя системное программное обеспечение, терминальное оборудование, печать билетов и термические расходные материалы, чтобы помочь государственным учреждениям и частным операторам по всему миру быстро войти на лотерейный рынок',
            cta_primary: 'Отчет об исследовании рынка, созданный ИИ',
            cta_secondary: 'Связаться с нашими консультантами'
        },
        features: {
            title: 'Что мы можем сделать для вас',
            subtitle: 'LottoBridge - это не просто B2B платформа, а комплексная система реализации лотерейного бизнеса, которая помогает клиентам перейти от "оценки возможностей" к "реализации" за один шаг',
            consulting: {
                title: 'Предварительная консультация и планирование рынка',
                description: 'Движок глобального исследования рынка ИИ генерирует профессиональные отчеты о лотерейной политике, размере рынка и анализе рисков для более чем 100 стран одним кликом'
            },
            products: {
                title: 'Продукты и технические услуги',
                description: 'Полные услуги лотерейной системы, цепочка поставок терминального оборудования, дизайн и разработка лотерейных игр, услуги печати билетов и термобумаги'
            },
            support: {
                title: 'Операционная поддержка и услуги реализации',
                description: 'Обучение и операционное руководство, сопоставление спроса и предложения и управление заказами, поддержка экспорта и соответствия, сопоставление стратегических партнеров'
            }
        },
        solutions: {
            title: 'Наши основные решения',
            subtitle: 'Индивидуальные продукты и услуги для различных потребностей рынка',
            software: {
                title: 'Программное обеспечение лотерейной системы',
                description: 'Полные системы продажи, розыгрыша и расчета лотерей, поддерживающие различные лотерейные игры и соответствующие регулятивным требованиям разных стран'
            },
            hardware: {
                title: 'Терминальное аппаратное оборудование',
                description: 'Высокопроизводительные лотерейные терминалы, машины самообслуживания билетов, мобильные устройства продаж, адаптированные к различным сценариям продаж'
            },
            printing: {
                title: 'Услуги печати билетов',
                description: 'Безопасная печать мгновенных билетов с защитой от подделки, соответствующая международным стандартам безопасности, поддерживающая индивидуальный дизайн'
            },
            learn_more: 'Узнать больше'
        },
        global: {
            title: 'Глобальное покрытие рынка',
            subtitle: 'Наши решения были успешно внедрены в нескольких странах и регионах по всему миру',
            regions: {
                latin_america: 'Латинская Америка',
                africa: 'Африка',
                southeast_asia: 'Юго-Восточная Азия',
                central_eastern_europe: 'Центральная и Восточная Европа',
                middle_east: 'Ближний Восток'
            }
        },
        testimonials: {
            title: 'Отзывы клиентов',
            subtitle: 'Послушайте, как наши партнеры оценивают услуги LottoBridge',
            quote: 'LottoBridge предоставила нам полное решение лотерейной системы, заняв всего 3 месяца от исследования рынка до внедрения системы. Их профессиональная команда и комплексный сервис значительно снизили наши операционные риски.',
            author_name: 'Карлос Мендес',
            author_title: 'Генеральный директор, Мексиканский оператор лотереи'
        },
        cta: {
            title: 'Готовы войти на глобальный лотерейный рынок?',
            subtitle: 'Независимо от того, являетесь ли вы государственным учреждением, частным оператором или поставщиком технологий, LottoBridge может предоставить вам наиболее подходящее решение',
            contact_now: 'Консультация сейчас',
            book_demo: 'Запланировать демо'
        },
        footer: {
            company: {
                description: 'Глобальная платформа комплексных решений для экспорта лотерей, использующая мощные ресурсы китайской лотерейной промышленной цепи, чтобы помочь клиентам по всему миру быстро войти на лотерейный рынок.'
            },
            products: {
                title: 'Продукты и услуги',
                lottery_system: 'Решения лотерейных систем',
                terminal_equipment: 'Поставка терминального оборудования',
                game_design: 'Дизайн и разработка игр',
                printing: 'Услуги печати билетов',
                market_research: 'Исследование рынка и консультации'
            },
            resources: {
                title: 'Центр ресурсов',
                case_studies: 'Кейсы',
                whitepapers: 'Загрузка белых книг',
                industry_reports: 'Отчеты индустрии',
                blog_news: 'Блог и новости',
                faq: 'Часто задаваемые вопросы',
                insights: 'Отраслевые инсайты',
                technical_docs: 'Техническая документация',
                download_center: 'Центр загрузок'
            },
            contact: {
                title: 'Связаться с нами',
                address: 'Авеню Века 1000, Новый район Пудун, Шанхай, Китай',
                form: {
                    company_name: 'Название компании',
                    contact_person: 'Контактное лицо',
                    email: 'Электронная почта',
                    phone: 'Номер телефона',
                    country: 'Страна/Регион',
                    select_country: 'Пожалуйста, выберите страну',
                    needs: 'Тип потребностей',
                    government: 'Правительство',
                    operator: 'Оператор',
                    supplier: 'Поставщик',
                    investor: 'Инвестор',
                    other: 'Другое',
                    message: 'Подробное сообщение',
                    privacy_agree: 'Я согласен с политикой конфиденциальности',
                    submit: 'Отправить',
                    countries: {
                        china: 'Китай',
                        usa: 'США',
                        uk: 'Великобритания',
                        japan: 'Япония',
                        south_korea: 'Южная Корея',
                        russia: 'Россия',
                        brazil: 'Бразилия',
                        india: 'Индия'
                    }
                }
            },
            copyright: 'Все права защищены.',
            privacy_policy: 'Политика конфиденциальности',
            terms_of_service: 'Условия обслуживания'
        },
        market_research: {
            page: {
                title: 'Исследование рынка | LottoBridge'
            },
            hero: {
                title: 'Глобальные отчеты о лотерейном рынке на основе ИИ',
                subtitle: 'Профессиональные отчеты о лотерейном рынке для более чем 132 стран, созданные одним кликом',
                description: 'Используя передовые алгоритмы ИИ и обширную базу данных, мы предоставляем подробные отчеты о лотерейном рынке, включая правовую среду, размер рынка, конкурентный ландшафт и инвестиционные возможности.',
                cta_primary: 'Создать отчет сейчас',
                cta_secondary: 'Посмотреть образец отчета'
            },
            country_search: {
                title: 'Выберите страну для исследования',
                placeholder: 'Введите название страны или региона',
                popular_countries: 'Популярные страны',
                all_countries: 'Все страны'
            },
            recommended_markets: {
                title: 'Рекомендуемые рынки',
                subtitle: 'Основываясь на текущих рыночных тенденциях и инвестиционном потенциале',
                egypt: {
                    title: 'Египет',
                    description: 'Быстро развивающийся рынок с благоприятной политической средой',
                    market_size: 'Размер рынка',
                    growth_rate: 'Темп роста',
                    investment_level: 'Уровень инвестиций'
                },
                vietnam: {
                    title: 'Вьетнам',
                    description: 'Высокий потенциал цифровой трансформации в Юго-Восточной Азии',
                    market_size: 'Размер рынка',
                    growth_rate: 'Темп роста',
                    investment_level: 'Уровень инвестиций'
                },
                brazil: {
                    title: 'Бразилия',
                    description: 'Крупнейший рынок в Латинской Америке с огромным потенциалом',
                    market_size: 'Размер рынка',
                    growth_rate: 'Темп роста',
                    investment_level: 'Уровень инвестиций'
                }
            },
            countries: {
                search_placeholder: 'Поиск стран...',
                total_countries: 'Всего стран',
                select_country: 'Выбрать страну'
            },
            report_preview: {
                title: 'Предварительный просмотр отчета',
                tabs: {
                    overview: 'Обзор',
                    market_size: 'Размер рынка',
                    regulations: 'Регулирование',
                    competition: 'Конкуренция'
                },
                content: {
                    overview: {
                        title: 'Обзор рынка',
                        description: 'Комплексный анализ текущего состояния лотерейного рынка, включая основные игры, структуру доходов и тенденции развития.'
                    },
                    market_size: {
                        title: 'Анализ размера рынка',
                        description: 'Подробные данные о размере рынка, темпах роста, прогнозах доходов и сегментации рынка.'
                    },
                    regulations: {
                        title: 'Регулятивная среда',
                        description: 'Анализ правовых рамок, лицензионных требований, налоговой политики и регулятивных тенденций.'
                    },
                    competition: {
                        title: 'Конкурентный ландшафт',
                        description: 'Анализ основных игроков рынка, доли рынка, конкурентных стратегий и возможностей входа.'
                    }
                }
            },
            download: {
                title: 'Скачать полный отчет',
                description: 'Получите подробный аналитический отчет о египетском лотерейном рынке, включая инвестиционные рекомендации и оценку бизнес-возможностей',
                form: {
                    email: 'Адрес электронной почты',
                    company: 'Название компании',
                    country: 'Страна/Регион',
                    country_placeholder: 'Пожалуйста, выберите',
                    china: 'Китай',
                    usa: 'Соединенные Штаты',
                    subscribe_label: 'Подписаться на отраслевые обновления',
                    submit_button: 'Скачать сейчас'
                }
            },
            recent_updates: {
                title: 'Последние обновления',
                uzbekistan_report: 'Анализ лотерейного рынка Узбекистана',
                cambodia_report: 'Отчет о развитии цифровой лотереи Камбоджи',
                nigeria_report: 'Обновление лотерейной политики Нигерии'
            },
            testimonials: {
                title: 'Отзывы клиентов',
                testimonial_text: 'Отчет о рынке LottoBridge предоставил ценные инсайты для нашего входа на египетский рынок, помогая нам разработать успешную стратегию локализации.',
                testimonial_author: 'Джеймс Чжан',
                testimonial_title: 'Директор по международному бизнесу'
            },
            cta: {
                title: 'Готовы войти на египетский лотерейный рынок?',
                description: 'Свяжитесь с нашей командой экспертов для получения индивидуальных стратегий входа на рынок и решений',
                contact: 'Связаться с экспертом',
                demo: 'Забронировать демо'
            }
        },
        // Страница о нас
        about: {
            page: {
                title: 'О нас | LottoBridge'
            },
            hero: {
                title: 'Соединяя мир с китайскими лотерейными решениями',
                subtitle: 'Ваш надежный партнер для глобального успеха в лотереях',
                description: 'LottoBridge - ведущая платформа, которая соединяет китайский опыт в лотереях с глобальными возможностями, предоставляя комплексные решения от исследования рынка до операционной реализации.'
            },
            who_we_are: {
                title: 'Кто мы?',
                description: 'LottoBridge - инновационная платформа, которая использует обширный опыт и ресурсы китайской лотерейной индустрии для обслуживания глобальных рынков. Как мост между китайским опытом в лотереях и международными возможностями, мы специализируемся на предоставлении комплексных решений, охватывающих всю цепочку создания стоимости лотерей.',
                highlight: 'С 2020 года мы успешно содействовали более чем 50 лотерейным проектам в 25 странах, достигнув более 2 миллиардов долларов совокупных продаж.'
            },
            vision: {
                title: 'Наше видение',
                main: 'Стать ведущей глобальной платформой, которая демократизирует доступ к лотерейным решениям мирового класса, позволяя любой стране или региону создавать и управлять успешными лотерейными системами.',
                challenges: {
                    title: 'Проблемы, которые мы решаем',
                    challenge1: {
                        title: 'Высокие барьеры входа',
                        description: 'Традиционные лотерейные системы требуют массивных инвестиций и технической экспертизы, которой не хватает многим развивающимся рынкам.'
                    },
                    challenge2: {
                        title: 'Регулятивная сложность',
                        description: 'Навигация по различным правовым рамкам и требованиям соответствия в нескольких юрисдикциях.'
                    },
                    challenge3: {
                        title: 'Пробел в знаниях',
                        description: 'Недостаток операционной экспертизы и лучших практик в новых для современных лотерей рынках.'
                    }
                }
            },
            values: {
                title: 'Наши основные ценности',
                innovation: {
                    title: 'Инновации',
                    description: 'Мы постоянно используем новейшие технологии и лучшие практики китайской лотерейной индустрии для создания передовых решений.'
                },
                integrity: {
                    title: 'Честность',
                    description: 'Мы поддерживаем высочайшие стандарты прозрачности, справедливости и этического соответствия во всех наших операциях.'
                },
                partnership: {
                    title: 'Партнерство',
                    description: 'Мы верим в построение долгосрочных отношений, основанных на взаимном доверии, уважении и общем успехе.'
                },
                excellence: {
                    title: 'Превосходство',
                    description: 'Мы стремимся к превосходному качеству в каждом проекте, от первоначальной концепции до полной реализации.'
                }
            },
            team: {
                title: 'Наша команда экспертов',
                description: 'Наша разнообразная команда объединяет десятилетия опыта в лотерейной индустрии с экспертизой в технологиях, регулировании и глобальных операциях.',
                ceo: {
                    name: 'Д-р Ли Вэй',
                    position: 'Генеральный директор и основатель',
                    description: 'Бывший руководитель Китайской лотереи благосостояния с более чем 20-летним опытом в индустрии. Пионер в модернизации лотерейных систем в Азии.',
                    expertise: 'Стратегия лотерей, развитие рынка'
                },
                cto: {
                    name: 'Чжан Мин',
                    position: 'Технический директор',
                    description: 'Ведущий системный инженер с опытом разработки крупномасштабных лотерейных платформ, обрабатывающих миллионы транзакций ежедневно.',
                    expertise: 'Системная архитектура, блокчейн, ИИ'
                },
                legal: {
                    name: 'Сара Джонсон',
                    position: 'Директор по правовым вопросам',
                    description: 'Международный юрист, специализирующийся на игровом регулировании и соответствии с опытом в более чем 30 юрисдикциях.',
                    expertise: 'Регулятивное соответствие, международное право'
                },
                operations: {
                    name: 'Карлос Родригес',
                    position: 'Директор по операциям',
                    description: 'Отраслевой ветеран с практическим опытом запуска и управления лотерейными операциями на развивающихся рынках.',
                    expertise: 'Управление операциями, обучение, поддержка'
                }
            },
            partners: {
                title: 'Наши стратегические партнеры',
                description: 'Мы сотрудничаем с ведущими организациями по всей цепочке создания стоимости лотерей для предоставления комплексных решений.',
                tech_partners: 'Технологические партнеры',
                regulatory_partners: 'Регулятивные консультанты',
                operational_partners: 'Операционные партнеры'
            },
            credentials: {
                title: 'Наши квалификации',
                certifications: 'Сертификации',
                cert1: 'Сертификация ISO 27001 по управлению информационной безопасностью',
                cert2: 'Сертификация GLI (Gaming Laboratories International)',
                cert3: 'Соответствие SOC 2 Type II',
                awards: 'Награды и признание',
                award1: 'Глобальная награда за инновации в лотереях 2023',
                award2: 'Лучший поставщик технологических решений - Азиатские игровые награды 2022',
                award3: 'Награда за превосходство в экспорте - Китайская торговая палата 2021'
            },
            commitment: {
                title: 'Наше обязательство',
                description: 'Мы стремимся способствовать ответственному росту лотерейной индустрии глобально, обеспечивая, что наши решения не только генерируют доходы, но и способствуют социальному и экономическому развитию сообществ, которые мы обслуживаем.',
                responsibility: 'Ответственные игры',
                sustainability: 'Устойчивые практики',
                community: 'Воздействие на сообщество'
            },
            cta: {
                title: 'Готовы трансформировать ваш лотерейный рынок?',
                description: 'Присоединяйтесь к глобальным лидерам, которые выбрали LottoBridge как надежного партнера для успеха в лотереях.',
                btn_contact: 'Свяжитесь с нами сегодня',
                btn_schedule: 'Запланировать консультацию',
                btn_download: 'Скачать корпоративную брошюру'
            }
        }
    }
};

// 导出语言数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = languages;
} else {
    window.languages = languages;
}