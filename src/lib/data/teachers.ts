// // Teachers
// import abdImage from '$lib/assets/images/teachers/abdalwahab_taskya.png?enhanced';
// import kamelKadiImage from '$lib/assets/images/teachers/kamel_kadi.jpeg?enhanced';
// import jamalSheikhDiabImage from '$lib/assets/images/teachers/jamal_sheikh_diab.jpeg?enhanced';
// import salwa from '$lib/assets/images/teachers/salwa_abo_galon.png?enhanced';
// import basharGamalAldeen from '$lib/assets/images/teachers/basharGamalAldeen.png?enhanced';
// import hussamDwick from '$lib/assets/images/teachers/hussamDwick.png?enhanced';
// import alaaAttar from '$lib/assets/images/teachers/alaa_attar.jpg?enhanced';
// import safwanIdress from '$lib/assets/images/teachers/safwanIdress.png?enhanced';
// import mohammadFarek from '$lib/assets/images/teachers/mohammadFarek.png?enhanced';
// import samerSleman from '$lib/assets/images/teachers/samerSleman.png?enhanced';
// import abdalazizZakaria from '$lib/assets/images/teachers/abdalaziz_zakaria.jpg?enhanced';
// import mohammadTabbakh from '$lib/assets/images/teachers/mohammad_Tabbakh.png?enhanced';
// import hasanNaasan from '$lib/assets/images/teachers/hasan_naasan.png?enhanced';
// import ahmadOthman from '$lib/assets/images/teachers/ahmad_othman.jpg?enhanced';
// import alaaArab from '$lib/assets/images/teachers/alaa_arab.jpg?enhanced';
// import adeebZohor from '$lib/assets/images/teachers/adeebZohor.png?enhanced';
// import anasDrgham from '$lib/assets/images/teachers/anas_drgham.jpg?enhanced';
// import ihabGamal from '$lib/assets/images/teachers/ihab_gamal.jpg?enhanced';
// import mahmodDarwish from '$lib/assets/images/teachers/mahmoud_darwish.jpg?enhanced';
// import othmanAlmohamad from '$lib/assets/images/teachers/othman_almohamad.jpg?enhanced';
// import ramezAlsaeed from '$lib/assets/images/teachers/ramez_Saeed.jpg?enhanced';
// import waseemShayah from '$lib/assets/images/teachers/waseem_shayah.jpg?enhanced';
// import salemGazeh from '$lib/assets/images/teachers/salem_gazeh.jpg?enhanced';
// import baraaSreo from '$lib/assets/images/teachers/baraa_sreo.jpg?enhanced';
// import mohamadAmenSedo from '$lib/assets/images/teachers/mohamadAmenSedo.png?enhanced';
// import sobhiSawas from '$lib/assets/images/teachers/sobhi_sawas.jpeg?enhanced';
// import ahmadHafez from '$lib/assets/images/teachers/ahmad_hafez.jpg?enhanced';
// import anasNajjar from '$lib/assets/images/teachers/anas_najjar.jpg?enhanced';
// import ferasSayedOmar from '$lib/assets/images/teachers/feras_sayed_omar.jpg?enhanced';
// import hazemGhnaimi from '$lib/assets/images/teachers/hazem_ghnaimi.jpg?enhanced';
// import jalalAddas from '$lib/assets/images/teachers/jalal_addas.jpg?enhanced';



// import mohannadAshor from '$lib/assets/images/teachers/mohannadAshour.png?enhanced';




export type Subject = 'الرياضيات' | "الفيزياء" | "الكيمياء" | "اللغة العربية" | "اللغة الإنجليزية" | "اللغة الفرنسية" | "التربية الدينية" | "العلوم" | "تاريخ و جغرافيا" | "الفيزياء و الكيمياء";


type TeacherNames =
  | "jalalAddas"
  | "kamelKadi"
  | "jamalSheikhDiab"
  | "abdalwahabTaskya"
  | "salwaAboGalon"
  | "hazemGhnaimi"
  | "basharGamalAldeen"
  | "hussamDwick"
  | "alaaAttar"
  | "safwanIdress"
  | "mohammadFarek"
  | "samerSleman"
  | "abdalazizZakaria"
  | "anasDrgham"
  | "anasNajjar"
  | "alaaArab"
  | "younesDsouki"
  | "mahmoudDarwish"
  | "mahmoudHreh"
  | "ahmadOthman"
  | "othmanAlMohammad"
  | "ramezAlSaeed"
  | "sobhiSawwas"
  | "hasanNaasan"
  | "ihabGamal"
  | "mohammadTabbakh"
  | "mohammadAmeenSeedo"
  | "adeebAlsayed"
  | "mehdiBasteka"
  | "saleemKaroub"
  | "ahmadHafez"
  | "yamanAbras"
  | "mohsenKadi"
  | "salyKayyali"
  | "nihadSeno"
  | "ammarKhdry"
  | "adeebZohor"
  | "waseemShayyah"
  | "tariqSayedAli"
  | "mohammadHilal"
  | "mohannadAshor"
  | "salemGazeh"
  | "ferasAlsayyedOmar"
  | "safiKabbani"
  | "mjdNahlawy"
  | "mohammadNourAldeen" | "wajeehDwidry" | "ismaelSafaia" | "mustafaRslan" | "sohaybSarmini" | "zakariaRajabBasha" | "baraaSreo";
type TeachersData = {
  [key in TeacherNames]: { img: string, subject: Subject, name: string }
}

export const teachersData: TeachersData = {
  jalalAddas: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824591/register/images/teachers/yajh4v3qxclaajpvj1ts.jpg', subject: "الفيزياء", name: "جلال عداس" },
  kamelKadi: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824564/register/images/teachers/kbavci2y2jqh6mdrbuku.jpg', subject: "العلوم", name: "كامل قاضي" },
  jamalSheikhDiab: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824558/register/images/teachers/fvrcrhqpxg5pmcx5xq6c.jpg', subject: 'الرياضيات', name: "جمال شيخ دياب" },
  abdalwahabTaskya: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824417/register/images/teachers/zei7k6meif9azbj5mxeh.jpg', subject: 'اللغة الإنجليزية', name: "عبد الوهاب تسقية" },
  salwaAboGalon: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/vyibypahcmus07qhzfkx.jpg', subject: 'العلوم', name: "سلوى أبو غالون" },
  hazemGhnaimi: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824584/register/images/teachers/pnn4m5zsli651fahgjpv.jpg', subject: 'الكيمياء', name: "حازم غنايمي" },
  basharGamalAldeen: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824535/register/images/teachers/cxsuwdhhd8ouqo69lsgv.jpg', subject: 'اللغة الإنجليزية', name: "بشار جمال الدين" },
  hussamDwick: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824583/register/images/teachers/jljcvxeuh3yzzdx4j9ae.jpg', subject: 'اللغة العربية', name: "حسام دويك" },
  alaaAttar: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824503/register/images/teachers/jxmbprxmbwzlpuo6q95l.jpg', subject: 'اللغة الفرنسية', name: "علاء عطار" },
  safwanIdress: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824635/register/images/teachers/tqren3s3z2bcp1o6eq9i.jpg', subject: 'الرياضيات', name: "صفوان إدريس" },
  mohammadFarek: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824621/register/images/teachers/uovk3ipj2mhncungctpc.jpg', subject: 'الرياضيات', name: "محمد فريق" },
  samerSleman: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824642/register/images/teachers/tw4sqrvqugesvemuw4vh.jpg', subject: 'الكيمياء', name: "سامر سليمان" },
  abdalazizZakaria: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824492/register/images/teachers/faqvwac3xye4hhnrulmo.jpg', subject: 'الرياضيات', name: "عبد العزيز زكريا" },
  anasDrgham: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824529/register/images/teachers/tqq9qxepbns2qudl9bxz.jpg', subject: 'الرياضيات', name: "أنس درغام" },
  anasNajjar: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824551/register/images/teachers/xmhclghylxh0pyuk83kk.jpg', subject: 'الفيزياء', name: "أنس نجار" },
  alaaArab: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824492/register/images/teachers/k0bta0um16uxyggz6hzf.jpg', subject: 'الفيزياء', name: "علاء عرب" },
  younesDsouki: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'الفيزياء', name: "يونس دسوقي" },
  mahmoudDarwish: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824606/register/images/teachers/pxbs8tpiuskcadwdz5sw.jpg', subject: 'الكيمياء', name: "محمود درويش" },
  mahmoudHreh: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'الكيمياء', name: "محمود حرح" },
  ahmadOthman: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824468/register/images/teachers/qjpz2tdfnrm3ppgzwt4i.jpg', subject: 'العلوم', name: "أحمد عثمان" },
  othmanAlMohammad: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824636/register/images/teachers/prfbdlpj3hg8vux5vjbl.jpg', subject: 'العلوم', name: "عثمان المحمد" },
  ramezAlSaeed: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824629/register/images/teachers/a3xqakjbqkumekau5agf.jpg', subject: 'اللغة العربية', name: "رامز السعيد" },
  sobhiSawwas: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824629/register/images/teachers/rsqcpzvhecf8ug36ggtc.jpg', subject: 'اللغة العربية', name: "صبحي سواس" },
  hasanNaasan: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824515/register/images/teachers/janpjpfl2rpmbwmp6dmx.jpg', subject: 'اللغة الإنجليزية', name: "حسن نعسان" },
  ihabGamal: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824576/register/images/teachers/crjqyyskld1ugh5ruczj.jpg', subject: 'التربية الدينية', name: "إيهاب جمال" },
  mohammadTabbakh: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824587/register/images/teachers/nj3k8e4h9dxdooms2wgo.jpg', subject: 'الفيزياء', name: "محمد طبّاخ" },
  mohammadAmeenSeedo: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824582/register/images/teachers/kt7eta9xg9xsa9coeskx.jpg', subject: 'الفيزياء', name: "محمد أمين سيدو" },
  adeebAlsayed: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'الرياضيات', name: "أديب السيد" },
  mehdiBasteka: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'الفيزياء و الكيمياء', name: "مهدي بصطيقة" },
  saleemKaroub: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'العلوم', name: "سليم خروب" },
  ahmadHafez: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824482/register/images/teachers/ggbmwafebvr6vq7rsqag.jpg', subject: 'العلوم', name: "أحمد حافظ" },
  yamanAbras: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة العربية', name: "يمان أبرص" },
  mohsenKadi: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الإنجليزية', name: "محسن قاضي" },
  salyKayyali: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الإنجليزية', name: "سالي كيالي" },
  nihadSeno: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الفرنسية', name: "نهاد سينو" },
  ammarKhdry: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824531/register/images/teachers/aqsphwjxsvrrltxar3g0.jpg', subject: 'اللغة الفرنسية', name: "عمار خضري" },
  adeebZohor: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824424/register/images/teachers/kjwq5bep5iwh0ddd0gav.jpg', subject: 'تاريخ و جغرافيا', name: "أديب زهور" },
  waseemShayyah: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824637/register/images/teachers/winv4zicv8yqjscrqnxr.jpg', subject: 'الرياضيات', name: "وسيم شياح" },
  tariqSayedAli: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الإنجليزية', name: "طارق السيد علي" },
  mohammadHilal: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'الفيزياء', name: "محمد هلال" },
  mohannadAshor: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824592/register/images/teachers/dzaktwehu2hxd9kl5u5i.jpg', subject: 'اللغة الإنجليزية', name: "مهند عاشور" },
  salemGazeh: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824606/register/images/teachers/cj6lciiymxf0sjlpefup.jpg', subject: 'اللغة الإنجليزية', name: "سالم جازة" },
  ferasAlsayyedOmar: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824576/register/images/teachers/cqoqb4c7s0hizi5ibkz0.jpg', subject: 'الرياضيات', name: "فراس السيد عمر" },
  safiKabbani: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الفرنسية', name: "صافي قباني" },
  mjdNahlawy: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الفرنسية', name: "مجد نحلاوي" },
  mohammadNourAldeen: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'تاريخ و جغرافيا', name: "محمد نور الدين" },
  wajeehDwidry: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الإنجليزية', name: 'وجيه دويدري' },
  ismaelSafaia: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الفرنسية', name: 'إسماعيل  صفايا' },
  mustafaRslan: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'اللغة الفرنسية', name: 'مصطفى رسلان' },
  sohaybSarmini: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'الكيمياء', name: 'صهيب سرميني' },
  zakariaRajabBasha: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824632/register/images/teachers/rwp0xegdanbmuqe6xahg.jpg', subject: 'العلوم', name: 'زكريا رجب باشا' },
  baraaSreo: { img: 'https://res.cloudinary.com/dgive1g2g/image/upload/q_auto:low/v1737824509/register/images/teachers/phbyeby7eoddsbswxys3.jpg', subject: 'اللغة العربية', name: 'براء سريو' },
};

