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
                    }
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
                    }
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
                address: 'Avenue du Siècle 1000, Nouvelle Zone de Pudong, Shanghai, Chine'
            },
            copyright: 'Tous droits réservés.',
            privacy_policy: 'Politique de Confidentialité',
            terms_of_service: 'Conditions de Service'
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
                address: 'Avenida del Siglo 1000, Nueva Área de Pudong, Shanghái, China'
            },
            copyright: 'Todos los derechos reservados.',
            privacy_policy: 'Política de Privacidad',
            terms_of_service: 'Términos de Servicio'
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
                address: '중국 상하이시 푸둥신구 센추리 애비뉴 1000번지'
            },
            copyright: '모든 권리 보유.',
            privacy_policy: '개인정보 보호정책',
            terms_of_service: '서비스 약관'
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
                address: 'شارع القرن 1000، منطقة بودونغ الجديدة، شنغهاي، الصين'
            },
            copyright: 'جميع الحقوق محفوظة.',
            privacy_policy: 'سياسة الخصوصية',
            terms_of_service: 'شروط الخدمة'
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
                address: 'Авеню Века 1000, Новый район Пудун, Шанхай, Китай'
            },
            copyright: 'Все права защищены.',
            privacy_policy: 'Политика конфиденциальности',
            terms_of_service: 'Условия обслуживания'
        }
    }
};

// 导出语言数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = languages;
} else {
    window.languages = languages;
}