import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  {
    id: "A",
    title: "Constitutional, Public, Administrative, Service, Environmental Law & Human Rights",
    short: "Const. & Public Law",
    color: "#B8860B",
    bg: "#fffbf0",
    questions: [
      {
        q: "Under Article 32 of the Constitution of India, the Supreme Court can issue writs for enforcement of:",
        opts: [
          "Fundamental Rights only",
          "Directive Principles only",
          "Both Fundamental Rights and Directive Principles",
          "Fundamental Rights and Fundamental Duties"
        ],
        ans: 0,
        exp: "Article 32 confers the right to move the Supreme Court for enforcement of Fundamental Rights (Part III), not Directive Principles."
      },
      {
        q: "The doctrine of 'Colourable Legislation' is based on the maxim:",
        opts: [
          "Delegatus non potest delegare",
          "Qui facit per alium facit per se",
          "What cannot be done directly cannot be done indirectly",
          "Expressio unius est exclusio alterius"
        ],
        ans: 2,
        exp: "Colourable legislation — the legislature cannot do indirectly what it cannot do directly — is encapsulated in the maxim 'what cannot be done directly cannot be done indirectly.'"
      },
      {
        q: "Which of the following Articles of the Constitution of India deals with the Equal Pay for Equal Work principle?",
        opts: [
          "Article 14",
          "Article 16",
          "Article 39(d)",
          "Article 43"
        ],
        ans: 2,
        exp: "Article 39(d) (Directive Principles) directs the State to secure equal pay for equal work for both men and women."
      },
      {
        q: "The principle of 'Res Judicata' as applicable to writ petitions was laid down by the Supreme Court in:",
        opts: [
          "Daryao v. State of U.P.",
          "Romesh Thappar v. State of Madras",
          "A.K. Gopalan v. State of Madras",
          "Maneka Gandhi v. Union of India"
        ],
        ans: 0,
        exp: "In Daryao v. State of U.P. (1961), the Supreme Court held that res judicata applies to writ petitions under Article 32."
      },
      {
        q: "Under the Environment Protection Act, 1986, the Central Government's power to issue directions includes directions to:",
        opts: [
          "State Governments only",
          "Persons, officers and authorities",
          "Courts and tribunals",
          "Parliament and State Legislatures"
        ],
        ans: 1,
        exp: "Section 5 of the Environment Protection Act, 1986 empowers the Central Government to issue written directions to any person, officer, or authority."
      },
      {
        q: "The National Human Rights Commission (NHRC) was established under which Act?",
        opts: [
          "Human Rights Act, 1991",
          "Protection of Human Rights Act, 1993",
          "National Commission Act, 1990",
          "Civil Rights Protection Act, 1995"
        ],
        ans: 1,
        exp: "The NHRC was established under the Protection of Human Rights Act, 1993."
      },
      {
        q: "Under the doctrine of 'Pleasure' (Article 310), a civil servant holds office during the pleasure of the President. Which Article provides a safeguard to civil servants against arbitrary dismissal?",
        opts: [
          "Article 309",
          "Article 311",
          "Article 312",
          "Article 315"
        ],
        ans: 1,
        exp: "Article 311 provides procedural safeguards — inquiry, reasonable opportunity to be heard — before dismissal, removal or reduction in rank of a civil servant."
      },
      {
        q: "The concept of 'Legitimate Expectation' in Administrative Law implies:",
        opts: [
          "A right to a particular benefit",
          "A reasonable expectation of procedural fairness or continuance of a benefit",
          "A statutory right guaranteed by legislation",
          "An absolute bar on change of government policy"
        ],
        ans: 1,
        exp: "Legitimate expectation gives a person the right to a fair hearing or continuation of an existing benefit before an adverse decision is made — it is procedural, not substantive."
      },
      {
        q: "Which of the following is NOT a 'Writ' under Article 226/32?",
        opts: [
          "Mandamus",
          "Quo Warranto",
          "Interpleader",
          "Certiorari"
        ],
        ans: 2,
        exp: "Interpleader is a type of civil suit, not a constitutional writ. The five writs are Habeas Corpus, Mandamus, Certiorari, Prohibition, and Quo Warranto."
      },
      {
        q: "The 'Basic Structure' doctrine was propounded by the Supreme Court in:",
        opts: [
          "Golak Nath v. State of Punjab (1967)",
          "Kesavananda Bharati v. State of Kerala (1973)",
          "Minerva Mills v. Union of India (1980)",
          "Indira Nehru Gandhi v. Raj Narain (1975)"
        ],
        ans: 1,
        exp: "The Basic Structure doctrine was laid down in Kesavananda Bharati v. State of Kerala (1973) by a 13-judge bench."
      },
      {
        q: "Under Article 21A, the Right to Education is a Fundamental Right for children in the age group of:",
        opts: [
          "5 to 14 years",
          "6 to 14 years",
          "6 to 16 years",
          "5 to 18 years"
        ],
        ans: 1,
        exp: "Article 21A (inserted by the 86th Constitutional Amendment, 2002) provides free and compulsory education for children from 6 to 14 years."
      },
      {
        q: "The 'Precautionary Principle' in Environmental Law requires:",
        opts: [
          "Absolute liability for environmental damage",
          "Preventive measures even in the absence of scientific certainty of harm",
          "Compensation only after damage has occurred",
          "State consent before any environmental action"
        ],
        ans: 1,
        exp: "The Precautionary Principle mandates taking protective action in the face of uncertainty — if an action raises threats of harm to the environment, preventive measures shall be taken even if some cause-and-effect relationships are not fully established."
      },
      {
        q: "Which case established that 'Reputation' is a facet of the right to life under Article 21?",
        opts: [
          "Subramaniam Swamy v. Union of India (2016)",
          "Prabha Dutt v. Union of India (1982)",
          "Kapila Hingorani v. State of Bihar (2003)",
          "Vishaka v. State of Rajasthan (1997)"
        ],
        ans: 0,
        exp: "In Subramanian Swamy v. Union of India (2016), the Supreme Court held that reputation is an inseparable facet of the right to life under Article 21."
      },
      {
        q: "Under the Right to Information Act, 2005, the maximum time limit for providing information in normal circumstances is:",
        opts: [
          "20 days",
          "25 days",
          "30 days",
          "45 days"
        ],
        ans: 2,
        exp: "Section 7(1) of the RTI Act, 2005 requires the PIO to provide information within 30 days of receipt of the request."
      },
      {
        q: "The Service Law principle that disciplinary proceedings must comply with principles of natural justice was held in:",
        opts: [
          "Union of India v. Tulsiram Patel (1985)",
          "State of Orissa v. Dr. Binapani Dei (1967)",
          "A.K. Kraipak v. Union of India (1969)",
          "Canara Bank v. Debasis Das (2003)"
        ],
        ans: 1,
        exp: "State of Orissa v. Binapani Dei (1967) is the landmark case establishing that even administrative orders affecting civil rights must comply with natural justice principles."
      },
      {
        q: "The term 'Constitutional Morality' was first used in India by:",
        opts: [
          "Dr. B.R. Ambedkar",
          "Pt. Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Sardar Vallabhbhai Patel"
        ],
        ans: 0,
        exp: "Dr. B.R. Ambedkar used the term 'Constitutional Morality' in his speech to the Constituent Assembly on 4 November 1948."
      },
      {
        q: "Under which Schedule of the Constitution are the Panchayati Raj subjects listed?",
        opts: [
          "Ninth Schedule",
          "Tenth Schedule",
          "Eleventh Schedule",
          "Twelfth Schedule"
        ],
        ans: 2,
        exp: "The Eleventh Schedule (added by the 73rd Amendment, 1992) lists 29 subjects for Panchayati Raj institutions."
      },
      {
        q: "The National Green Tribunal was established under which Act?",
        opts: [
          "Environment Protection Act, 1986",
          "National Green Tribunal Act, 2010",
          "Forest Conservation Act, 1980",
          "Wildlife Protection Act, 1972"
        ],
        ans: 1,
        exp: "The National Green Tribunal Act, 2010 established the NGT for effective and expeditious disposal of cases relating to environmental protection."
      },
      {
        q: "Which doctrine prevents an administrative authority from sub-delegating powers unless expressly permitted?",
        opts: [
          "Doctrine of Proportionality",
          "Doctrine of Legitimate Expectation",
          "Delegatus non potest delegare",
          "Doctrine of Accountability"
        ],
        ans: 2,
        exp: "'Delegatus non potest delegare' — a delegate cannot further delegate — prevents administrative sub-delegation without statutory authority."
      },
      {
        q: "Article 370 of the Constitution of India was abrogated by the Parliament in the year:",
        opts: [
          "2018",
          "2019",
          "2020",
          "2021"
        ],
        ans: 1,
        exp: "Article 370 was effectively abrogated on 5 August 2019 through the Constitution (Application to Jammu and Kashmir) Order, 2019 and the Jammu and Kashmir Reorganisation Act, 2019."
      }
    ]
  },
  {
    id: "B",
    title: "Criminal Law",
    short: "Criminal Law",
    color: "#8B1A1A",
    bg: "#fff5f5",
    questions: [
      {
        q: "Under Section 300 of the IPC, murder is distinguished from culpable homicide not amounting to murder primarily on the basis of:",
        opts: [
          "The weapon used",
          "The intention and knowledge of the accused",
          "The social status of the victim",
          "Whether the act was premeditated or not"
        ],
        ans: 1,
        exp: "The distinction between murder (S.300) and culpable homicide (S.299) rests on the degree of intention and knowledge — in murder, the intention or knowledge is of the highest degree specified in S.300."
      },
      {
        q: "The right of private defence of the body extends to causing death under Section 100 IPC when there is reasonable apprehension of:",
        opts: [
          "Grievous hurt only",
          "Assault only",
          "Death or grievous hurt, among other situations",
          "Any form of force"
        ],
        ans: 2,
        exp: "S.100 IPC allows causing death in private defence where there is reasonable apprehension of death, grievous hurt, rape, unnatural offence, kidnapping or abduction, or wrongful confinement."
      },
      {
        q: "Under the Bharatiya Nyaya Sanhita (BNS), 2023 which replaced the IPC, the concept of 'Community Service' as a punishment is introduced for:",
        opts: [
          "All offences",
          "Only heinous offences",
          "Petty offences",
          "Offences against the State"
        ],
        ans: 2,
        exp: "The BNS, 2023 introduced community service as a form of punishment for petty/minor offences — a new concept not present in the IPC."
      },
      {
        q: "In which case did the Supreme Court hold that a conviction can be based solely on the testimony of a prosecutrix in a rape case without corroboration?",
        opts: [
          "State of Maharashtra v. Madhkar Narayan (1991)",
          "Bharwada Bhoginbhai Hirjibhai v. State of Gujarat (1983)",
          "State of Punjab v. Gurmit Singh (1996)",
          "All of the above"
        ],
        ans: 3,
        exp: "All three cases — Madhkar Narayan (1991), Bharwada (1983), and Gurmit Singh (1996) — held that a conviction in a rape case can be based on the sole testimony of the prosecutrix, provided it is credible and reliable."
      },
      {
        q: "Which section of the BNSS (Bharatiya Nagarik Suraksha Sanhita), 2023 corresponds to the erstwhile Section 154 CrPC regarding FIR?",
        opts: [
          "Section 154 BNSS",
          "Section 173 BNSS",
          "Section 166 BNSS",
          "Section 144 BNSS"
        ],
        ans: 1,
        exp: "Section 173 of the BNSS, 2023 corresponds to Section 154 of the CrPC, 1973 relating to the registration of First Information Reports."
      },
      {
        q: "The offence of 'Dacoity' under Section 391 IPC requires a minimum of:",
        opts: [
          "Two persons",
          "Three persons",
          "Five persons",
          "Seven persons"
        ],
        ans: 2,
        exp: "S.391 IPC defines dacoity as robbery committed by five or more persons conjointly."
      },
      {
        q: "Under Section 34 IPC, 'Common Intention' requires:",
        opts: [
          "Prior meeting of minds",
          "Pre-planned conspiracy only",
          "Meeting of minds even at the spur of the moment",
          "Written agreement between parties"
        ],
        ans: 2,
        exp: "The Supreme Court has held that common intention under S.34 can develop on the spur of the moment — prior concert is not necessary, only a meeting of minds."
      },
      {
        q: "The POCSO Act, 2012 was amended in 2019 to introduce the death penalty for which offence?",
        opts: [
          "Sexual assault on a child below 12 years",
          "Aggravated penetrative sexual assault on a child below 12 years",
          "Sexual harassment of a child",
          "Child trafficking"
        ],
        ans: 1,
        exp: "The POCSO (Amendment) Act, 2019 introduced the death penalty for aggravated penetrative sexual assault committed on a child below 12 years of age."
      },
      {
        q: "Under the Prevention of Corruption Act, 1988, 'public servant' taking gratification other than legal remuneration is guilty under:",
        opts: [
          "Section 7",
          "Section 11",
          "Section 13",
          "Section 17A"
        ],
        ans: 0,
        exp: "Section 7 of the Prevention of Corruption Act, 1988 makes it an offence for a public servant to accept any gratification other than legal remuneration for an official act."
      },
      {
        q: "The maxim 'Actus non facit reum nisi mens sit rea' means:",
        opts: [
          "An act is not criminal unless the mind is also guilty",
          "No one can be punished twice for the same crime",
          "The act is more important than the intention",
          "Criminal law must be strictly construed"
        ],
        ans: 0,
        exp: "'Actus non facit reum nisi mens sit rea' translates to: an act does not make a person guilty unless the mind is also guilty — the foundation of the requirement of mens rea."
      },
      {
        q: "Under Section 498A IPC (now corresponding BNS provision), cruelty to wife includes:",
        opts: [
          "Only physical cruelty",
          "Only mental cruelty",
          "Both physical and mental cruelty, and harassment for dowry",
          "Cruelty by husband only, not relatives"
        ],
        ans: 2,
        exp: "S.498A covers both physical and mental cruelty by husband or his relatives, including harassment for unlawful demands for property or dowry."
      },
      {
        q: "In which landmark case did the Supreme Court lay down guidelines for arrests to prevent their misuse in Section 498A IPC cases?",
        opts: [
          "Arnesh Kumar v. State of Bihar (2014)",
          "Sushil Kumar Sharma v. Union of India (2005)",
          "Preeti Gupta v. State of Jharkhand (2010)",
          "K.T. Thomas v. State of Kerala (2001)"
        ],
        ans: 0,
        exp: "In Arnesh Kumar v. State of Bihar (2014), the Supreme Court held that arrest in S.498A cases should not be automatic and magistrates must apply their minds before granting remand."
      },
      {
        q: "The 'McNaughten Rules' deal with which defence in criminal law?",
        opts: [
          "Private defence",
          "Intoxication",
          "Insanity",
          "Consent"
        ],
        ans: 2,
        exp: "The McNaughten Rules (1843) lay down the test for the defence of insanity in criminal law — the accused did not know the nature of the act or that it was wrong."
      },
      {
        q: "Under the Narcotic Drugs and Psychotropic Substances Act, 1985, the burden of proof in a prosecution for possession of drugs:",
        opts: [
          "Is always on the prosecution",
          "Shifts to the accused once possession is established",
          "Is a shared burden throughout",
          "Does not exist as it is absolute liability"
        ],
        ans: 1,
        exp: "S.35 NDPS Act creates a presumption — once possession is proved, the burden shifts to the accused to prove absence of culpable mental state."
      },
      {
        q: "Which of the following is a 'cognizable offence' under the Criminal Law?",
        opts: [
          "Defamation",
          "Public nuisance",
          "Murder",
          "Cheating up to ₹100"
        ],
        ans: 2,
        exp: "Murder is a cognizable offence (Schedule I, CrPC/BNSS) where the police can arrest without a warrant."
      },
      {
        q: "Under Section 80 IPC, an act done by accident is not an offence if done:",
        opts: [
          "Without any intent or knowledge",
          "Without criminal intent, in a lawful manner, with lawful means and with due care",
          "Only in self-defence",
          "Only if the accused is a minor"
        ],
        ans: 1,
        exp: "S.80 IPC exempts an act done by accident or misfortune where there is no criminal intent or knowledge, done in a lawful manner by lawful means with proper care and caution."
      },
      {
        q: "The offence of 'Sedition' under the IPC was which Section?",
        opts: [
          "Section 121",
          "Section 124A",
          "Section 153A",
          "Section 505"
        ],
        ans: 1,
        exp: "Section 124A IPC defined sedition. Note: The BNS, 2023 does not have a direct equivalent — it replaced sedition with Section 152 covering acts endangering sovereignty, unity, and integrity of India."
      },
      {
        q: "Under the Domestic Violence Act, 2005, 'shared household' is defined under:",
        opts: [
          "Section 2(s)",
          "Section 2(a)",
          "Section 17",
          "Section 19"
        ],
        ans: 0,
        exp: "Section 2(s) of the Protection of Women from Domestic Violence Act, 2005 defines 'shared household.'"
      },
      {
        q: "Which case reaffirmed that the right to a fair trial includes the right of the accused to know the reasons for conviction?",
        opts: [
          "Bachan Singh v. State of Punjab (1980)",
          "Maneka Gandhi v. Union of India (1978)",
          "Machhi Singh v. State of Punjab (1983)",
          "State of U.P. v. Ram Swarup (1974)"
        ],
        ans: 0,
        exp: "Bachan Singh v. State of Punjab (1980) laid down the 'rarest of rare' doctrine for death penalty and also affirmed the principles of fair trial including reasoned conviction."
      },
      {
        q: "Under the BNSS (2023), the maximum period of remand for offences punishable with imprisonment up to 7 years is:",
        opts: [
          "15 days",
          "40 days",
          "60 days",
          "90 days"
        ],
        ans: 1,
        exp: "Under S.187 BNSS, for offences punishable with less than 10 years' imprisonment, the maximum period of custody through remand is 40 days (compared to 60 days under old CrPC S.167)."
      }
    ]
  },
  {
    id: "C",
    title: "Civil Laws",
    short: "Civil Laws",
    color: "#2C5F2E",
    bg: "#f0fff4",
    questions: [
      {
        q: "Under Order VII Rule 11 CPC, a plaint can be rejected when:",
        opts: [
          "The plaint does not disclose a cause of action",
          "The suit is time-barred on the face of the plaint",
          "The relief claimed is undervalued and not corrected",
          "All of the above"
        ],
        ans: 3,
        exp: "Order VII Rule 11 CPC provides for rejection of plaint on multiple grounds — non-disclosure of cause of action, time bar apparent on face, undervaluation not corrected, stamp deficiency not cured, suit is barred by law."
      },
      {
        q: "The principle of 'Res Sub Judice' under Section 10 CPC prevents:",
        opts: [
          "Filing of a second suit on the same cause of action after final judgment",
          "Trial of a subsequent suit where the same matter is directly and substantially in issue in a previously filed suit",
          "Enforcement of a foreign decree",
          "Re-opening of settled accounts"
        ],
        ans: 1,
        exp: "Section 10 CPC (Res sub judice) — stay of suit — applies when the same matter is directly and substantially in issue in a previously instituted suit between the same parties in a competent court."
      },
      {
        q: "Under the Specific Relief Act, 1963, specific performance of a contract is:",
        opts: [
          "Granted as a matter of right",
          "A discretionary remedy granted by the court",
          "Available only for contracts relating to immovable property",
          "Mandatory after the 2018 amendment"
        ],
        ans: 3,
        exp: "After the Specific Relief (Amendment) Act, 2018, specific performance is no longer discretionary — it shall be granted unless the contract is not specifically enforceable under the Act."
      },
      {
        q: "The doctrine of 'Lis Pendens' under Section 52 of the Transfer of Property Act, 1882 applies when:",
        opts: [
          "A property is mortgaged",
          "A suit or proceeding is pending in court relating to an immovable property and a transfer is made",
          "A property is leased for more than 11 months",
          "A decree has been passed and execution is pending"
        ],
        ans: 1,
        exp: "Section 52 TPA — during pendency of a suit relating to immovable property, the property cannot be transferred or otherwise dealt with by any party to the suit so as to affect the rights of the other party."
      },
      {
        q: "Under the Limitation Act, 1963, the limitation period for a suit to recover a debt or money secured by bond is:",
        opts: [
          "1 year",
          "3 years",
          "6 years",
          "12 years"
        ],
        ans: 3,
        exp: "Article 97 of the Limitation Act, 1963 provides a 12-year limitation period for suits to enforce payment of money secured by mortgage or charge on immovable property."
      },
      {
        q: "Section 9 of the Code of Civil Procedure confers jurisdiction on civil courts to try all suits of a civil nature, except:",
        opts: [
          "Suits between government and private parties",
          "Suits expressly or impliedly barred by law",
          "Suits involving foreign parties",
          "Suits above a pecuniary limit"
        ],
        ans: 1,
        exp: "Section 9 CPC provides that civil courts shall try all suits of a civil nature except those expressly or impliedly barred by law."
      },
      {
        q: "In which case did the Supreme Court lay down the 'Triple Test' for granting temporary injunctions under Order 39 CPC?",
        opts: [
          "Gujarat Bottling Co. v. Coca Cola Co. (1995)",
          "Dalpat Kumar v. Prahlad Singh (1992)",
          "Wander Ltd. v. Antox India Pvt. Ltd. (1990)",
          "M/S Sanjeev Pillai v. Venu Kunnapilli (2020)"
        ],
        ans: 1,
        exp: "Dalpat Kumar v. Prahlad Singh (1992) laid down the three requirements for a temporary injunction: prima facie case, balance of convenience, and irreparable injury."
      },
      {
        q: "A 'Decree' under Section 2(2) CPC is the formal adjudication of a court that conclusively determines:",
        opts: [
          "Rights of the parties with regard to all matters in controversy",
          "A matter incidentally or collaterally in issue",
          "A procedural question of law",
          "Rights of the parties with regard to all or any matters in controversy in the suit"
        ],
        ans: 3,
        exp: "S.2(2) CPC defines a decree as the formal expression of an adjudication which conclusively determines the rights of the parties with regard to all or any of the matters in controversy in the suit."
      },
      {
        q: "Under the Hindu Succession Act, 1956 (as amended in 2005), daughters in a Hindu Undivided Family (HUF) are now:",
        opts: [
          "Only heirs to the self-acquired property of the father",
          "Coparceners by birth with equal rights as sons",
          "Entitled to a share only on partition of HUF",
          "Excluded from ancestral property if married before 2005"
        ],
        ans: 1,
        exp: "The Hindu Succession (Amendment) Act, 2005 amended Section 6 to make daughters coparceners by birth with the same rights and liabilities as sons. The Supreme Court in Vineeta Sharma v. Rakesh Sharma (2020) held this applies regardless of whether the father was alive in 2005."
      },
      {
        q: "Under the Transfer of Property Act, a 'Mortgage by conditional sale' is defined under:",
        opts: [
          "Section 58(a)",
          "Section 58(b)",
          "Section 58(c)",
          "Section 58(d)"
        ],
        ans: 2,
        exp: "Section 58(c) TPA defines a mortgage by conditional sale — the mortgagor ostensibly sells the property subject to a condition that on default of payment the sale becomes absolute."
      },
      {
        q: "The concept of 'Mesne Profits' under CPC Section 2(12) refers to:",
        opts: [
          "Profits made by a government company",
          "Profits that a person in wrongful possession actually received or might have received",
          "Profits earned from a joint venture",
          "Interest on a mortgage debt"
        ],
        ans: 1,
        exp: "S.2(12) CPC — Mesne profits of property means those profits which the person in wrongful possession of such property actually received or might with ordinary diligence have received."
      },
      {
        q: "In a suit for partition of property, which Order of CPC governs the procedure?",
        opts: [
          "Order XX Rule 18",
          "Order XXI Rule 64",
          "Order IX Rule 13",
          "Order XXXIX Rule 1"
        ],
        ans: 0,
        exp: "Order XX Rule 18 CPC provides for the procedure in suits for partition of immovable property or of an estate assessed to payment of revenue to the Government."
      },
      {
        q: "Which case held that Section 8 of the Arbitration and Conciliation Act, 1996 operates as a mandatory referral once the three conditions are satisfied?",
        opts: [
          "Sukanya Holdings v. Jayesh Pandya (2003)",
          "Vidya Drolia v. Durga Trading (2021)",
          "Booz Allen v. SBI Home Finance (2011)",
          "Hyundai Engineering v. BHEL (2020)"
        ],
        ans: 1,
        exp: "In Vidya Drolia v. Durga Trading Corporation (2021), the Supreme Court held that the court must refer parties to arbitration under S.8 if there is a valid arbitration agreement and the dispute is arbitrable."
      },
      {
        q: "Under the Consumer Protection Act, 2019, a consumer complaint can be filed before the District Commission where the value of goods/services and compensation claimed does not exceed:",
        opts: [
          "₹20 lakhs",
          "₹50 lakhs",
          "₹1 crore",
          "₹2 crore"
        ],
        ans: 2,
        exp: "Under S.34 of the Consumer Protection Act, 2019, the District Commission has jurisdiction to entertain complaints where the value of goods/services and compensation claimed does not exceed ₹1 crore."
      },
      {
        q: "Under the Civil Procedure Code, 'Inherent Powers' of the court are preserved under:",
        opts: [
          "Section 148",
          "Section 149",
          "Section 150",
          "Section 151"
        ],
        ans: 3,
        exp: "Section 151 CPC saves the inherent powers of the court to make such orders as may be necessary for the ends of justice or to prevent abuse of process of the court."
      },
      {
        q: "Under the Family Courts Act, 1984, appeals from the judgment of a Family Court lie to:",
        opts: [
          "District Court",
          "High Court",
          "Supreme Court",
          "Special Family Tribunal"
        ],
        ans: 1,
        exp: "Section 19 of the Family Courts Act, 1984 provides that an appeal from a decree or order of the Family Court shall lie to the High Court."
      },
      {
        q: "The defence of 'Volenti non fit injuria' (consent) in tort law means:",
        opts: [
          "The plaintiff voluntarily assumed the risk of harm",
          "The defendant was not negligent",
          "The damage was caused by an act of God",
          "The plaintiff contributed to the negligence"
        ],
        ans: 0,
        exp: "Volenti non fit injuria — to one who consents, no injury is done — the plaintiff freely and voluntarily accepted the risk of injury, thereby precluding any claim against the defendant."
      },
      {
        q: "In which case did the Supreme Court recognize the doctrine of 'Absolute Liability' in India, going beyond 'Strict Liability' under Rylands v. Fletcher?",
        opts: [
          "Union Carbide Corporation v. Union of India (1989)",
          "M.C. Mehta v. Union of India (Oleum Gas Leak case) (1987)",
          "Indian Council for Enviro-Legal Action v. Union of India (1996)",
          "Vellore Citizens Welfare Forum v. Union of India (1996)"
        ],
        ans: 1,
        exp: "In M.C. Mehta v. Union of India (Oleum Gas Leak, 1987), the Supreme Court propounded the doctrine of Absolute Liability — an enterprise engaging in a hazardous activity is absolutely liable without exception for any harm resulting from it."
      },
      {
        q: "A 'substituted service' of summons under CPC is made when:",
        opts: [
          "The defendant is a minor",
          "Ordinary service cannot be effected with reasonable diligence",
          "The defendant is a government servant",
          "The defendant requests service through counsel"
        ],
        ans: 1,
        exp: "Order V Rule 20 CPC — substituted service by affixing a copy of the summons in a conspicuous place at the defendant's last known residence is permitted when the court is satisfied that ordinary service cannot be made with reasonable diligence."
      },
      {
        q: "Under the Registration Act, 1908, which of the following documents is compulsorily registrable?",
        opts: [
          "A will",
          "A lease of immovable property from year to year or for any term exceeding one year",
          "A power of attorney to a family member",
          "An agreement to sell immovable property"
        ],
        ans: 1,
        exp: "Section 17 of the Registration Act, 1908 makes compulsory the registration of leases of immovable property from year to year or for any term exceeding one year or reserving a yearly rent."
      }
    ]
  },
  {
    id: "D",
    title: "Commercial Law",
    short: "Commercial Law",
    color: "#1a3a6e",
    bg: "#f0f4ff",
    questions: [
      {
        q: "Under the Indian Contract Act, 1872, a contract with a minor is:",
        opts: [
          "Voidable at the option of the minor",
          "Valid",
          "Void ab initio",
          "Illegal"
        ],
        ans: 2,
        exp: "Mohori Bibi v. Dharmodas Ghosh (1903) held that a contract with a minor is void ab initio and cannot be ratified on attaining majority."
      },
      {
        q: "The doctrine of 'Indoor Management' (Turquand's Rule) protects:",
        opts: [
          "Company insiders against shareholder claims",
          "Outsiders dealing with a company in good faith from internal irregularities",
          "Directors from personal liability",
          "Minority shareholders from oppression"
        ],
        ans: 1,
        exp: "The Turquand Rule (Royal British Bank v. Turquand, 1856) protects outsiders dealing bona fide with a company — they need not inquire into internal management irregularities."
      },
      {
        q: "Under the Insolvency and Bankruptcy Code, 2016, the maximum period of the moratorium under Section 14 is:",
        opts: [
          "90 days",
          "180 days",
          "270 days",
          "330 days"
        ],
        ans: 3,
        exp: "The moratorium under S.14 IBC begins on the Insolvency Commencement Date. The CIRP must be completed within 180 days (extendable by 90 days), making a total of 330 days including mandatory fast-track as amended."
      },
      {
        q: "Under the Negotiable Instruments Act, 1881, a 'Promissory Note' is defined under:",
        opts: [
          "Section 4",
          "Section 5",
          "Section 6",
          "Section 7"
        ],
        ans: 0,
        exp: "Section 4 of the Negotiable Instruments Act, 1881 defines a 'Promissory Note' as an instrument in writing containing an unconditional undertaking to pay a certain sum of money."
      },
      {
        q: "Under Section 138 of the Negotiable Instruments Act, dishonour of a cheque is an offence if the cheque is presented within:",
        opts: [
          "One month of its drawing",
          "Three months of its drawing",
          "Six months of its drawing",
          "One year of its drawing"
        ],
        ans: 1,
        exp: "Section 138 NI Act requires the cheque to be presented within three months of the date on which it is drawn."
      },
      {
        q: "Under the Competition Act, 2002, which authority is empowered to investigate anti-competitive agreements?",
        opts: [
          "Securities and Exchange Board of India",
          "Competition Commission of India",
          "Enforcement Directorate",
          "Serious Fraud Investigation Office"
        ],
        ans: 1,
        exp: "The Competition Commission of India (CCI), established under the Competition Act, 2002, is empowered to investigate and regulate anti-competitive agreements under Section 3 of the Act."
      },
      {
        q: "The 'Doctrine of Ultra Vires' in Company Law means:",
        opts: [
          "Acts beyond the memorandum of association of a company are void",
          "Directors can act beyond the articles of association",
          "A company can amend its objects freely at any time",
          "Shareholders cannot challenge company decisions"
        ],
        ans: 0,
        exp: "The Ultra Vires doctrine — acts beyond the objects stated in the Memorandum of Association of the company are void and cannot be ratified even by unanimous shareholder consent."
      },
      {
        q: "Under the Sale of Goods Act, 1930, property in goods passes to the buyer when:",
        opts: [
          "Delivery of goods is made",
          "Payment is made",
          "The parties intend it to pass",
          "The contract is in writing"
        ],
        ans: 2,
        exp: "Sections 18-24 of the Sale of Goods Act, 1930 govern when property passes — the fundamental rule is that property passes when the parties intend it to pass (S.19)."
      },
      {
        q: "Under the SEBI (Prohibition of Insider Trading) Regulations, 2015, 'Unpublished Price Sensitive Information' (UPSI) is information that:",
        opts: [
          "Has been published but not widely read",
          "Is not generally available and likely to materially affect the price of securities",
          "Is known to company auditors",
          "Relates to the company's past financial performance"
        ],
        ans: 1,
        exp: "Under the PIT Regulations, 2015, UPSI means information that is not generally available and which if published is likely to materially affect the price of the securities."
      },
      {
        q: "A partnership firm under the Indian Partnership Act, 1932 can be dissolved by the court on the ground of:",
        opts: [
          "Mutual consent only",
          "Insanity of a partner",
          "Partner becoming insolvent",
          "Both B and C, among other grounds under Section 44"
        ],
        ans: 3,
        exp: "Section 44 Indian Partnership Act, 1932 — court may dissolve a partnership on grounds including insolvency, insanity, permanent incapacity, misconduct, persistent breach of agreement, transfer of interest, or that it is just and equitable."
      },
      {
        q: "Under the Consumer Protection Act, 2019, 'unfair trade practice' includes:",
        opts: [
          "Giving a warranty that is not honoured",
          "Offering goods at higher than the printed maximum retail price",
          "False representation about quality, sponsorship or approval",
          "All of the above"
        ],
        ans: 2,
        exp: "Section 2(47) CPA 2019 defines unfair trade practice as a trade practice that makes a false or misleading representation in relation to goods or services — including false claims about quality, approval, or sponsorship."
      },
      {
        q: "The winding up of companies is now governed under the Companies Act, 2013 and the:",
        opts: [
          "Companies (Amendment) Act, 2017",
          "Insolvency and Bankruptcy Code, 2016",
          "SEBI Act, 1992",
          "Competition Act, 2002"
        ],
        ans: 1,
        exp: "The Insolvency and Bankruptcy Code, 2016 now primarily governs corporate insolvency and liquidation, replacing the relevant provisions of the Companies Act relating to winding up."
      },
      {
        q: "Under the Indian Contract Act, Section 73, compensation for breach of contract is available for losses that:",
        opts: [
          "Are remote and indirect",
          "Arise naturally from the breach or were in the contemplation of both parties",
          "Could have been avoided but were not",
          "Were not foreseeable at all"
        ],
        ans: 1,
        exp: "S.73 ICA — compensation is available for losses arising naturally in the usual course from the breach, or which the parties knew at the time of making the contract to be likely to result from breach (Hadley v. Baxendale principle)."
      },
      {
        q: "Under the Companies Act, 2013, the concept of 'One Person Company' (OPC) was introduced. An OPC is required to convert itself into a private company if its paid-up capital exceeds:",
        opts: [
          "₹25 lakhs",
          "₹50 lakhs",
          "₹2 crore",
          "₹5 crore"
        ],
        ans: 2,
        exp: "Under Rule 6 of the Companies (Incorporation) Rules 2014, as amended, an OPC must mandatorily convert into a private or public company if its paid-up share capital exceeds ₹2 crore or its average annual turnover exceeds ₹20 crore."
      },
      {
        q: "The 'Principle of Uberrima Fides' (Utmost Good Faith) is most applicable in which type of contract?",
        opts: [
          "Contract of sale of goods",
          "Contract of guarantee",
          "Contract of insurance",
          "Contract of agency"
        ],
        ans: 2,
        exp: "Contracts of insurance require the highest degree of good faith (uberrima fides) — the insured must disclose all material facts affecting the risk, whether or not the insurer specifically asks."
      },
      {
        q: "Under the Arbitration and Conciliation Act, 1996, the seat of arbitration determines the:",
        opts: [
          "Applicable substantive law only",
          "Curial law (procedural law) governing the arbitration",
          "Qualifications of arbitrators",
          "Amount of arbitrators' fees"
        ],
        ans: 1,
        exp: "The seat of arbitration determines the curial law — the procedural law that governs the conduct of arbitral proceedings, including court supervision and challenge of awards."
      },
      {
        q: "A 'Holder in Due Course' under the Negotiable Instruments Act, 1881 must have taken the instrument:",
        opts: [
          "For valuable consideration, before maturity, without notice of defect",
          "For nominal consideration, after maturity",
          "From the original payee only",
          "After the instrument became dishonoured"
        ],
        ans: 0,
        exp: "Section 9 NIA defines a Holder in Due Course as one who takes the instrument for valuable consideration, before it becomes payable, and without notice of any defect in the title of the person who negotiated it."
      },
      {
        q: "Under the Indian Stamp Act, 1899, an unstamped document:",
        opts: [
          "Is void ab initio",
          "Can be admitted in evidence on payment of penalty",
          "Is admissible without any penalty",
          "Can only be used for collateral purposes"
        ],
        ans: 1,
        exp: "Section 35 Indian Stamp Act — an instrument chargeable with duty and not duly stamped shall be inadmissible in evidence, but may be admitted on payment of the duty plus a penalty of ten times the deficient duty."
      },
      {
        q: "Under the Banking Regulation Act, 1949, the minimum capital requirements for banking companies are prescribed by:",
        opts: [
          "Ministry of Finance",
          "Reserve Bank of India",
          "Securities and Exchange Board of India",
          "National Bank for Agriculture and Rural Development"
        ],
        ans: 1,
        exp: "The Reserve Bank of India prescribes minimum capital requirements and other prudential norms for banking companies under the Banking Regulation Act, 1949."
      },
      {
        q: "The doctrine of 'Caveat Emptor' (buyer beware) under the Sale of Goods Act has been modified by which legal development?",
        opts: [
          "The introduction of the doctrine of Privity of Contract",
          "The Consumer Protection legislation which imposes implied warranties",
          "The Contract Act amendment allowing buyers to rescind contracts",
          "The strict liability rule for sellers"
        ],
        ans: 1,
        exp: "Consumer Protection legislation and Section 16 Sale of Goods Act (implied conditions of quality/fitness when the buyer relies on the seller's skill) have significantly modified the strict caveat emptor rule."
      }
    ]
  },
  {
    id: "E",
    title: "RTI, Intellectual Property Rights & Cyber Laws",
    short: "RTI, IPR & Cyber Laws",
    color: "#5B2D8E",
    bg: "#faf0ff",
    questions: [
      {
        q: "Under the Right to Information Act, 2005, who is the appellate authority for the first appeal?",
        opts: [
          "Central Information Commissioner",
          "State Information Commissioner",
          "An officer senior in rank to the Public Information Officer in the public authority",
          "The District Magistrate"
        ],
        ans: 2,
        exp: "Section 19(1) RTI Act — the first appeal lies to an officer senior in rank to the PIO within the public authority itself, within 30 days of receiving the decision or date by which decision should have been given."
      },
      {
        q: "Under the Copyright Act, 1957, the term of copyright for an original literary, dramatic, musical, or artistic work is:",
        opts: [
          "Life of the author plus 50 years",
          "Life of the author plus 60 years",
          "60 years from publication",
          "Life of the author only"
        ],
        ans: 1,
        exp: "Section 22 of the Copyright Act, 1957 provides that copyright in original literary, dramatic, musical and artistic works subsists until 60 years from the year following the death of the author."
      },
      {
        q: "Under the Patents Act, 1970, the term of a patent in India is:",
        opts: [
          "7 years",
          "14 years",
          "20 years",
          "25 years"
        ],
        ans: 2,
        exp: "Section 53 of the Patents Act, 1970 (as amended) provides that the term of every patent is 20 years from the date of filing of the patent application."
      },
      {
        q: "The concept of 'Geographical Indications' in India is protected under:",
        opts: [
          "Trade Marks Act, 1999",
          "Geographical Indications of Goods (Registration and Protection) Act, 1999",
          "Copyright Act, 1957",
          "Protection of Plant Varieties and Farmers' Rights Act, 2001"
        ],
        ans: 1,
        exp: "The Geographical Indications of Goods (Registration and Protection) Act, 1999 governs protection of GIs in India. Darjeeling tea was among the first GIs registered in India."
      },
      {
        q: "Under the Information Technology Act, 2000, 'cybercrime' of unauthorized access to a computer system is punishable under:",
        opts: [
          "Section 43",
          "Section 66",
          "Section 67",
          "Section 72"
        ],
        ans: 1,
        exp: "Section 66 IT Act, 2000 makes computer related offences (including unauthorized access) punishable with imprisonment up to 3 years or fine up to ₹5 lakhs or both."
      },
      {
        q: "The RTI Act, 2005 does NOT apply to which of the following organizations?",
        opts: [
          "State Public Sector Undertakings",
          "Central Bureau of Investigation",
          "Intelligence Bureau",
          "National Human Rights Commission"
        ],
        ans: 2,
        exp: "The Second Schedule to the RTI Act, 2005 exempts certain intelligence and security organizations including the Intelligence Bureau, RAW, etc. from the ambit of the Act (except on allegations of corruption and human rights violations)."
      },
      {
        q: "Section 3 of the Patents Act, 1970 lists what are NOT inventions. Which of the following is NOT patentable under Section 3(d)?",
        opts: [
          "A new drug compound discovered in nature",
          "A new form of a known substance without enhanced efficacy",
          "A computer program per se",
          "A mathematical method"
        ],
        ans: 1,
        exp: "Section 3(d) Patents Act prohibits patenting of new forms of known substances unless they differ significantly in properties with regard to efficacy — the famous Novartis AG v. Union of India (2013) case interpreted this provision."
      },
      {
        q: "Under the Trade Marks Act, 1999, a trade mark can be registered for a period of:",
        opts: [
          "5 years, renewable for 5 years",
          "7 years, renewable for 7 years",
          "10 years, renewable for 10 years",
          "20 years, renewable for 20 years"
        ],
        ans: 2,
        exp: "Section 25 of the Trade Marks Act, 1999 provides that a registered trade mark shall be registered for 10 years from the date of application, renewable for further periods of 10 years."
      },
      {
        q: "The IT (Amendment) Act, 2008 introduced Section 66A which was later struck down by the Supreme Court in:",
        opts: [
          "Shreya Singhal v. Union of India (2015)",
          "Justice K.S. Puttaswamy v. Union of India (2017)",
          "People's Union for Civil Liberties v. Union of India (2013)",
          "Anuradha Bhasin v. Union of India (2020)"
        ],
        ans: 0,
        exp: "In Shreya Singhal v. Union of India (2015), the Supreme Court struck down Section 66A of the IT Act, 2000 as unconstitutional, being violative of Article 19(1)(a) (freedom of speech and expression) as the provision was vague and overbroad."
      },
      {
        q: "Under the RTI Act, 2005, the penalty for failure of the PIO to provide information without reasonable cause is:",
        opts: [
          "₹10,000 per day",
          "₹250 per day, subject to a maximum of ₹25,000",
          "₹500 per day, subject to a maximum of ₹50,000",
          "Suspension from service"
        ],
        ans: 1,
        exp: "Section 20(1) RTI Act — the Information Commission shall impose a penalty of ₹250 per day for each day of default until the information is furnished, subject to a maximum of ₹25,000."
      },
      {
        q: "The Semiconductor Integrated Circuits Layout-Design Act, 2000 protects IC layout designs for a period of:",
        opts: [
          "5 years",
          "10 years",
          "15 years",
          "20 years"
        ],
        ans: 1,
        exp: "The Semiconductor Integrated Circuits Layout-Design Act, 2000 grants protection for a period of 10 years from the date of registration or from the date of first commercial exploitation, whichever is earlier."
      },
      {
        q: "Under the IT Act, 2000, 'Digital Signature' is defined as:",
        opts: [
          "A scanned image of a handwritten signature",
          "Authentication of an electronic record by a subscriber by means of an electronic method",
          "A certificate issued by the Controller of Certifying Authorities",
          "A password-based authentication system"
        ],
        ans: 1,
        exp: "Section 2(1)(p) IT Act, 2000 defines 'digital signature' as authentication of any electronic record by a subscriber by means of an electronic method or procedure in accordance with the provisions of Section 3."
      },
      {
        q: "In which landmark Supreme Court case was the Right to Privacy declared a Fundamental Right under Article 21 of the Constitution?",
        opts: [
          "Kharak Singh v. State of U.P. (1963)",
          "R. Rajagopal v. State of Tamil Nadu (1994)",
          "Justice K.S. Puttaswamy v. Union of India (2017)",
          "District Registrar v. Canara Bank (2005)"
        ],
        ans: 2,
        exp: "In Justice K.S. Puttaswamy (Retd.) v. Union of India (2017), a nine-judge bench of the Supreme Court unanimously held that the right to privacy is a fundamental right under Article 21 of the Constitution."
      },
      {
        q: "Under the Copyright Act, 1957, 'Fair Dealing' for research and private study is dealt with under:",
        opts: [
          "Section 14",
          "Section 51",
          "Section 52",
          "Section 57"
        ],
        ans: 2,
        exp: "Section 52 of the Copyright Act, 1957 provides a list of acts that do not constitute infringement of copyright, including fair dealing for the purpose of research, private study, criticism, review, and reporting of current events."
      },
      {
        q: "The Digital Personal Data Protection Act, 2023 provides for a data principal's right to:",
        opts: [
          "Erasure of personal data (right to be forgotten) in certain circumstances",
          "Unlimited data portability in all circumstances",
          "Unlimited access to third-party data fiduciaries' systems",
          "Veto over government data processing"
        ],
        ans: 0,
        exp: "The Digital Personal Data Protection Act, 2023 provides data principals with rights including the right to erasure of personal data when the purpose of processing is fulfilled or consent is withdrawn, among other conditions."
      },
      {
        q: "Under the IT Act, 2000, the offence of publishing obscene material in electronic form is covered under:",
        opts: [
          "Section 65",
          "Section 66C",
          "Section 67",
          "Section 72A"
        ],
        ans: 2,
        exp: "Section 67 IT Act, 2000 makes it an offence to publish or transmit obscene material in electronic form, punishable with imprisonment up to 3 years and fine up to ₹5 lakhs on first conviction."
      },
      {
        q: "'Passing Off' in trade mark law protects:",
        opts: [
          "Only registered trade marks",
          "Unregistered marks through tort law",
          "Patents that are pending registration",
          "Copyrights in digital form"
        ],
        ans: 1,
        exp: "Passing off is a common law/tort remedy that protects unregistered marks — a trader cannot represent goods or services as being those of another trader, thereby injuring their goodwill."
      },
      {
        q: "Under the RTI Act, 2005, which of the following information is exempt from disclosure under Section 8(1)(j)?",
        opts: [
          "Information related to corruption allegations",
          "Personal information which has no relationship to any public activity or public interest",
          "Information relating to decisions of public authorities",
          "Statistical data compiled by government agencies"
        ],
        ans: 1,
        exp: "Section 8(1)(j) RTI Act exempts personal information which has no relationship to any public activity or public interest, or which would cause unwarranted invasion of the privacy of the individual."
      },
      {
        q: "The National Cyber Security Policy, 2013 aims to create a secure and resilient cyberspace for:",
        opts: [
          "Government agencies alone",
          "Citizens, businesses, and the government",
          "Only critical infrastructure sectors",
          "Banking and financial institutions only"
        ],
        ans: 1,
        exp: "The National Cyber Security Policy, 2013 was formulated to build a secure and resilient cyberspace for citizens, businesses, and government, and to protect India from cyber attacks."
      },
      {
        q: "Under the IT Act, 2000, the Cyber Appellate Tribunal has jurisdiction to hear appeals against orders of:",
        opts: [
          "The Controller of Certifying Authorities only",
          "The Adjudicating Officer or the Controller of Certifying Authorities",
          "The High Court",
          "The Data Protection Authority"
        ],
        ans: 1,
        exp: "The Cyber Appellate Tribunal (now Cyber Regulations Appellate Tribunal) under the IT Act, 2000 hears appeals against orders of Adjudicating Officers and the Controller of Certifying Authorities."
      }
    ]
  }
];

const TOTAL_Q = 100;
const DURATION = 90 * 60;

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function PUCETMockTest() {
  const [phase, setPhase] = useState("intro"); // intro | test | result
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState({});
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [showExplanation, setShowExplanation] = useState({});
  const timerRef = useRef(null);

  const allQuestions = SECTIONS.flatMap((s, si) =>
    s.questions.map((q, qi) => ({ ...q, sectionIdx: si, questionIdx: qi, globalIdx: si * 20 + qi }))
  );

  useEffect(() => {
    if (phase === "test") {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setPhase("result");
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [phase]);

  const globalIdx = currentSection * 20 + currentQ;
  const currentQData = SECTIONS[currentSection]?.questions[currentQ];

  const selectAnswer = (optIdx) => {
    setAnswers(prev => ({ ...prev, [globalIdx]: optIdx }));
    setVisited(prev => ({ ...prev, [globalIdx]: true }));
  };

  const navigate = (si, qi) => {
    setCurrentSection(si);
    setCurrentQ(qi);
    setVisited(prev => ({ ...prev, [si * 20 + qi]: true }));
  };

  const submitTest = () => {
    clearInterval(timerRef.current);
    setPhase("result");
  };

  // Scoring
  const score = allQuestions.reduce((acc, q) => {
    const a = answers[q.globalIdx];
    if (a === undefined) return acc;
    return a === q.ans ? acc + 1 : acc + 0; // No negative marking mentioned
  }, 0);

  const attempted = Object.keys(answers).length;
  const correct = allQuestions.filter(q => answers[q.globalIdx] === q.ans).length;
  const wrong = attempted - correct;
  const unattempted = TOTAL_Q - attempted;

  const sectionScores = SECTIONS.map((s, si) => {
    const qs = s.questions;
    let c = 0, w = 0, u = 0;
    qs.forEach((q, qi) => {
      const gi = si * 20 + qi;
      const a = answers[gi];
      if (a === undefined) u++;
      else if (a === q.ans) c++;
      else w++;
    });
    return { correct: c, wrong: w, unattempted: u };
  });

  const percentage = ((correct / TOTAL_Q) * 100).toFixed(1);

  const timeUsed = DURATION - timeLeft;
  const timerColor = timeLeft < 300 ? "#dc2626" : timeLeft < 900 ? "#d97706" : "#2C5F2E";

  // STATUS per question
  const getQStatus = (si, qi) => {
    const gi = si * 20 + qi;
    const a = answers[gi];
    const v = visited[gi];
    if (a !== undefined) return "answered";
    if (v) return "visited";
    return "unseen";
  };

  if (phase === "intro") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f1b3c 0%, #1a3a6e 60%, #2d1b4e 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif", padding: "20px" }}>
        <div style={{ background: "rgba(255,255,255,0.97)", borderRadius: "16px", padding: "48px 40px", maxWidth: "680px", width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ fontSize: "13px", fontFamily: "'Arial', sans-serif", letterSpacing: "3px", color: "#8B1A1A", fontWeight: "700", textTransform: "uppercase", marginBottom: "8px" }}>Panjab University</div>
            <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#0f1b3c", margin: "0 0 6px", lineHeight: 1.2 }}>PU CET (PG) LLM</h1>
            <div style={{ fontSize: "16px", color: "#5B2D8E", fontWeight: "600" }}>Full Mock Test — 2026/2027</div>
          </div>

          <div style={{ background: "#f8f9fc", borderRadius: "12px", padding: "24px", marginBottom: "28px", border: "1px solid #e2e6f0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "20px" }}>
              {[
                ["100", "Questions"],
                ["90 min", "Duration"],
                ["100", "Total Marks"]
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: "center", background: "white", borderRadius: "8px", padding: "12px 8px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                  <div style={{ fontSize: "22px", fontWeight: "800", color: "#0f1b3c" }}>{val}</div>
                  <div style={{ fontSize: "11px", color: "#64748b", fontFamily: "'Arial', sans-serif" }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: "13px", fontFamily: "'Arial', sans-serif", color: "#475569" }}>
              {SECTIONS.map(s => (
                <div key={s.id} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #e2e6f0", color: s.color }}>
                  <span style={{ fontWeight: "600" }}>Section {s.id} — {s.short}</span>
                  <span style={{ color: "#64748b" }}>20 MCQs × 1 Mark</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: "8px", padding: "14px 16px", marginBottom: "28px", fontSize: "12.5px", fontFamily: "'Arial', sans-serif", color: "#7c3d12" }}>
            <strong>📋 Instructions:</strong> Each question carries 1 mark. No negative marking. Questions are modelled on PYQ difficulty level. Timer starts as soon as you begin. Submit before time runs out.
          </div>

          <button
            onClick={() => { setPhase("test"); setVisited({ 0: true }); }}
            style={{ width: "100%", background: "linear-gradient(135deg, #8B1A1A, #0f1b3c)", color: "white", border: "none", borderRadius: "10px", padding: "16px", fontSize: "17px", fontWeight: "700", cursor: "pointer", letterSpacing: "0.5px", fontFamily: "'Arial', sans-serif" }}
          >
            ▶ Begin Mock Test
          </button>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    const grade = correct >= 75 ? "Excellent" : correct >= 60 ? "Good" : correct >= 45 ? "Average" : "Needs Improvement";
    const gradeColor = correct >= 75 ? "#2C5F2E" : correct >= 60 ? "#B8860B" : correct >= 45 ? "#d97706" : "#8B1A1A";

    return (
      <div style={{ minHeight: "100vh", background: "#f0f2f8", fontFamily: "'Arial', sans-serif", padding: "24px 16px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #0f1b3c, #1a3a6e)", borderRadius: "16px", padding: "32px", color: "white", marginBottom: "20px", textAlign: "center" }}>
            <div style={{ fontSize: "13px", letterSpacing: "3px", color: "#93c5fd", marginBottom: "6px" }}>PU CET (PG) LLM MOCK TEST</div>
            <h1 style={{ fontSize: "28px", fontWeight: "800", margin: "0 0 6px", fontFamily: "'Georgia', serif" }}>Your Result</h1>
            <div style={{ fontSize: "52px", fontWeight: "900", color: "#fbbf24", lineHeight: 1.1 }}>{correct}<span style={{ fontSize: "24px", color: "#93c5fd" }}>/100</span></div>
            <div style={{ fontSize: "18px", color: "#dbeafe", marginTop: "4px" }}>{percentage}%</div>
            <div style={{ display: "inline-block", background: gradeColor, padding: "6px 20px", borderRadius: "20px", marginTop: "12px", fontSize: "14px", fontWeight: "700", letterSpacing: "1px" }}>{grade}</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
            {[
              ["✅ Correct", correct, "#2C5F2E", "#f0fff4"],
              ["❌ Wrong", wrong, "#8B1A1A", "#fff5f5"],
              ["⬜ Skipped", unattempted, "#64748b", "#f8f9fc"]
            ].map(([label, val, color, bg]) => (
              <div key={label} style={{ background: bg, borderRadius: "12px", padding: "16px", textAlign: "center", border: `1px solid ${color}30` }}>
                <div style={{ fontSize: "28px", fontWeight: "800", color }}>{val}</div>
                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Section-wise */}
          <div style={{ background: "white", borderRadius: "12px", padding: "24px", marginBottom: "20px", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "800", color: "#0f1b3c", marginBottom: "16px", fontFamily: "'Georgia', serif" }}>Section-wise Performance</h2>
            {SECTIONS.map((s, si) => {
              const ss = sectionScores[si];
              const pct = (ss.correct / 20) * 100;
              return (
                <div key={s.id} style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: s.color }}>Section {s.id} — {s.short}</span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#0f1b3c" }}>{ss.correct}/20</span>
                  </div>
                  <div style={{ background: "#e2e8f0", borderRadius: "4px", height: "8px" }}>
                    <div style={{ background: s.color, borderRadius: "4px", height: "8px", width: `${pct}%`, transition: "width 0.8s ease" }} />
                  </div>
                  <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>✅ {ss.correct} &nbsp; ❌ {ss.wrong} &nbsp; ⬜ {ss.unattempted}</div>
                </div>
              );
            })}
          </div>

          {/* Solutions */}
          <div style={{ background: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "800", color: "#0f1b3c", marginBottom: "20px", fontFamily: "'Georgia', serif" }}>Detailed Solutions</h2>
            {SECTIONS.map((s, si) => (
              <div key={s.id} style={{ marginBottom: "28px" }}>
                <div style={{ background: s.bg, border: `2px solid ${s.color}`, borderRadius: "8px", padding: "10px 16px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: s.color }}>Section {s.id} — {s.title}</span>
                </div>
                {s.questions.map((q, qi) => {
                  const gi = si * 20 + qi;
                  const ua = answers[gi];
                  const isCorrect = ua === q.ans;
                  const isWrong = ua !== undefined && ua !== q.ans;
                  const isSkipped = ua === undefined;
                  return (
                    <div key={qi} style={{ marginBottom: "16px", border: `1px solid ${isCorrect ? "#86efac" : isWrong ? "#fca5a5" : "#e2e8f0"}`, borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ background: isCorrect ? "#f0fff4" : isWrong ? "#fff5f5" : "#f8f9fc", padding: "12px 16px" }}>
                        <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>Q{si * 20 + qi + 1}</div>
                        <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#1e293b", lineHeight: 1.5 }}>{q.q}</div>
                      </div>
                      <div style={{ padding: "10px 16px", fontSize: "12.5px" }}>
                        {q.opts.map((opt, oi) => {
                          const isCorrOpt = oi === q.ans;
                          const isUserOpt = oi === ua;
                          let bg = "transparent"; let color = "#475569"; let weight = "normal";
                          if (isCorrOpt) { bg = "#dcfce7"; color = "#15803d"; weight = "700"; }
                          if (isUserOpt && !isCorrOpt) { bg = "#fee2e2"; color = "#b91c1c"; weight = "700"; }
                          return (
                            <div key={oi} style={{ background: bg, borderRadius: "6px", padding: "5px 10px", marginBottom: "3px", color, fontWeight: weight }}>
                              {String.fromCharCode(65 + oi)}. {opt}
                              {isCorrOpt ? " ✅" : ""}{isUserOpt && !isCorrOpt ? " ❌" : ""}
                            </div>
                          );
                        })}
                        <div style={{ marginTop: "8px", background: "#f0f4ff", borderRadius: "6px", padding: "8px 10px", fontSize: "12px", color: "#1e40af", lineHeight: 1.5 }}>
                          <strong>Explanation:</strong> {q.exp}
                        </div>
                        {isSkipped && <div style={{ marginTop: "4px", fontSize: "12px", color: "#94a3b8" }}>⬜ Not attempted</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <button
            onClick={() => { setPhase("intro"); setAnswers({}); setVisited({}); setTimeLeft(DURATION); setCurrentSection(0); setCurrentQ(0); }}
            style={{ width: "100%", background: "linear-gradient(135deg, #8B1A1A, #0f1b3c)", color: "white", border: "none", borderRadius: "10px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: "pointer", marginTop: "20px" }}
          >
            🔄 Retake Test
          </button>
        </div>
      </div>
    );
  }

  // TEST PHASE
  return (
    <div style={{ minHeight: "100vh", background: "#f0f2f8", fontFamily: "'Arial', sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(90deg, #0f1b3c, #1a3a6e)", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
        <div style={{ color: "white", fontSize: "13px", fontWeight: "700" }}>PU CET LLM Mock Test 2026</div>
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "6px 16px", color: timerColor === "#dc2626" ? "#fca5a5" : timerColor === "#d97706" ? "#fbbf24" : "#86efac", fontFamily: "'Courier New', monospace", fontSize: "18px", fontWeight: "800", border: timeLeft < 300 ? "1px solid #fca5a5" : "none" }}>
          ⏱ {formatTime(timeLeft)}
        </div>
        <button onClick={submitTest} style={{ background: "#8B1A1A", color: "white", border: "none", borderRadius: "6px", padding: "6px 14px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
          Submit
        </button>
      </div>

      <div style={{ display: "flex", flex: 1, maxWidth: "1100px", margin: "0 auto", width: "100%", padding: "16px", gap: "16px" }}>
        {/* Sidebar */}
        <div style={{ width: "220px", flexShrink: 0 }}>
          {/* Section tabs */}
          <div style={{ background: "white", borderRadius: "10px", padding: "12px", marginBottom: "12px", boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: "10px", fontWeight: "800", color: "#64748b", letterSpacing: "1.5px", marginBottom: "8px" }}>SECTIONS</div>
            {SECTIONS.map((s, si) => {
              const ss = sectionScores[si];
              return (
                <button key={si} onClick={() => { setCurrentSection(si); setCurrentQ(0); setVisited(prev => ({ ...prev, [si * 20]: true })); }}
                  style={{ width: "100%", textAlign: "left", background: si === currentSection ? s.bg : "transparent", border: si === currentSection ? `1px solid ${s.color}` : "1px solid transparent", borderRadius: "6px", padding: "6px 8px", marginBottom: "4px", cursor: "pointer", fontSize: "11px", color: s.color, fontWeight: si === currentSection ? "700" : "500" }}>
                  <div>{s.id}. {s.short}</div>
                  <div style={{ color: "#94a3b8", fontSize: "10px", marginTop: "1px" }}>✅{ss.correct} ❌{ss.wrong} ⬜{ss.unattempted}</div>
                </button>
              );
            })}
          </div>

          {/* Q palette */}
          <div style={{ background: "white", borderRadius: "10px", padding: "12px", boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: "10px", fontWeight: "800", color: "#64748b", letterSpacing: "1.5px", marginBottom: "8px" }}>QUESTIONS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px" }}>
              {SECTIONS[currentSection].questions.map((_, qi) => {
                const st = getQStatus(currentSection, qi);
                const isActive = qi === currentQ;
                return (
                  <button key={qi} onClick={() => navigate(currentSection, qi)}
                    style={{ width: "32px", height: "28px", borderRadius: "4px", border: isActive ? "2px solid #0f1b3c" : "1px solid transparent", cursor: "pointer", fontSize: "10px", fontWeight: "700", background: isActive ? "#0f1b3c" : st === "answered" ? SECTIONS[currentSection].color : st === "visited" ? "#fde68a" : "#e2e8f0", color: isActive ? "white" : st === "answered" ? "white" : "#1e293b" }}>
                    {currentSection * 20 + qi + 1}
                  </button>
                );
              })}
            </div>
            <div style={{ marginTop: "10px", fontSize: "10px", color: "#64748b" }}>
              <span style={{ display: "inline-block", width: "10px", height: "10px", background: SECTIONS[currentSection].color, borderRadius: "2px", marginRight: "4px" }} />Answered &nbsp;
              <span style={{ display: "inline-block", width: "10px", height: "10px", background: "#fde68a", borderRadius: "2px", marginRight: "4px" }} />Visited
            </div>
          </div>
        </div>

        {/* Question area */}
        <div style={{ flex: 1 }}>
          <div style={{ background: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 8px rgba(0,0,0,0.08)", marginBottom: "12px" }}>
            {/* Section header */}
            <div style={{ background: SECTIONS[currentSection].bg, border: `1px solid ${SECTIONS[currentSection].color}50`, borderRadius: "8px", padding: "8px 14px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", color: SECTIONS[currentSection].color }}>Section {SECTIONS[currentSection].id} — {SECTIONS[currentSection].short}</span>
              <span style={{ fontSize: "11px", color: "#64748b" }}>Q {globalIdx + 1} of 100</span>
            </div>

            <div style={{ fontSize: "15px", fontWeight: "600", color: "#1e293b", lineHeight: 1.6, marginBottom: "24px", fontFamily: "'Georgia', serif" }}>
              <span style={{ color: SECTIONS[currentSection].color, fontWeight: "800", marginRight: "8px" }}>Q{globalIdx + 1}.</span>
              {currentQData?.q}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {currentQData?.opts.map((opt, oi) => {
                const selected = answers[globalIdx] === oi;
                return (
                  <button key={oi} onClick={() => selectAnswer(oi)}
                    style={{ textAlign: "left", background: selected ? SECTIONS[currentSection].bg : "#f8f9fc", border: selected ? `2px solid ${SECTIONS[currentSection].color}` : "1px solid #e2e8f0", borderRadius: "8px", padding: "12px 16px", cursor: "pointer", fontSize: "14px", color: selected ? SECTIONS[currentSection].color : "#374151", fontWeight: selected ? "700" : "400", transition: "all 0.15s ease", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: selected ? SECTIONS[currentSection].color : "#e2e8f0", color: selected ? "white" : "#64748b", fontSize: "11px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{String.fromCharCode(65 + oi)}</span>
                    <span style={{ lineHeight: 1.4 }}>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
              onClick={() => {
                if (currentQ > 0) navigate(currentSection, currentQ - 1);
                else if (currentSection > 0) { setCurrentSection(s => s - 1); setCurrentQ(19); }
              }}
              disabled={globalIdx === 0}
              style={{ background: globalIdx === 0 ? "#e2e8f0" : "white", color: globalIdx === 0 ? "#94a3b8" : "#0f1b3c", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "10px 20px", cursor: globalIdx === 0 ? "not-allowed" : "pointer", fontWeight: "600", fontSize: "13px" }}>
              ← Previous
            </button>

            <div style={{ fontSize: "12px", color: "#64748b", textAlign: "center" }}>
              <div>{Object.keys(answers).length}/100 answered</div>
            </div>

            {globalIdx < 99 ? (
              <button
                onClick={() => {
                  if (currentQ < 19) navigate(currentSection, currentQ + 1);
                  else if (currentSection < 4) { setCurrentSection(s => s + 1); setCurrentQ(0); }
                }}
                style={{ background: "#0f1b3c", color: "white", border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontWeight: "600", fontSize: "13px" }}>
                Next →
              </button>
            ) : (
              <button onClick={submitTest}
                style={{ background: "#8B1A1A", color: "white", border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>
                Submit Test
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
