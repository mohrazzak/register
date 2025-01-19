// Teachers
import jalalAddasImage from '$lib/assets/images/teachers/jalal_addas.jpeg?enhanced';
import abdImage from '$lib/assets/images/teachers/abdalwahab_taskya.png?enhanced';
import kamelKadiImage from '$lib/assets/images/teachers/kamel_kadi.jpeg?enhanced';
import jamalSheikhDiabImage from '$lib/assets/images/teachers/jamal_sheikh_diab.jpeg?enhanced';
import salwa from '$lib/assets/images/teachers/salwa_abo_galon.png?enhanced';
import hazemGhnaimi from '$lib/assets/images/teachers/hazem_ghnaimi.png?enhanced';
import basharGamalAldeen from '$lib/assets/images/teachers/basharGamalAldeen.png?enhanced';
import hussamDwick from '$lib/assets/images/teachers/hussamDwick.png?enhanced';
import alaaAttar from '$lib/assets/images/teachers/alaaAttar.png?enhanced';
import safwanIdress from '$lib/assets/images/teachers/safwanIdress.png?enhanced';
import mohammadFarek from '$lib/assets/images/teachers/mohammadFarek.png?enhanced';
import samerSleman from '$lib/assets/images/teachers/samerSleman.png?enhanced';
import abdalazizZakaria from '$lib/assets/images/teachers/abdalaziz_zakaria.png?enhanced';
import anasNajjar from '$lib/assets/images/teachers/anas_najjar.png?enhanced';
import mohammadTabbakh from '$lib/assets/images/teachers/mohammad_Tabbakh.png?enhanced';
import mahmoudDarwish from '$lib/assets/images/teachers/mahmoudDarwish.png?enhanced';
import ramezAlSaeed from '$lib/assets/images/teachers/ramezAlsaeed.png?enhanced';
import hasanNaasan from '$lib/assets/images/teachers/hasan_naasan.png?enhanced';
import ahmadOthman from '$lib/assets/images/teachers/ahmadOthman.png?enhanced';
import adeebZohor from '$lib/assets/images/teachers/adeebZohor.png?enhanced';
import mohannadAshor from '$lib/assets/images/teachers/mohannadAshour.png?enhanced';
import unknownImg from '$lib/assets/images/teachers/unknown.jpg?enhanced';
import type { Picture } from '$lib/interface/picture.interface';

export type Subject = 'الرياضيات' | "الفيزياء" | "الكيمياء" | "اللغة العربية" | "اللغة الإنجليزية" | "اللغة الفرنسية" | "التربية الدينية" | "العلوم" | "ناريخ و جغرافيا" | "الفيزياء و الكيمياء";


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
  [key in TeacherNames]: { img: Picture, subject: Subject, name: string }
}

export const teachersData: TeachersData = {
  jalalAddas: { img: jalalAddasImage, subject: "الفيزياء", name: "جلال عداس" },
  kamelKadi: { img: kamelKadiImage, subject: "العلوم", name: "كامل قاضي" },
  jamalSheikhDiab: { img: jamalSheikhDiabImage, subject: 'الرياضيات', name: "جمال شيخ دياب" },
  abdalwahabTaskya: { img: abdImage, subject: 'اللغة الإنجليزية', name: "عبد الوهاب تسقية" },
  salwaAboGalon: { img: salwa, subject: 'العلوم', name: "سلوى أبو غالون" },
  hazemGhnaimi: { img: hazemGhnaimi, subject: 'الكيمياء', name: "حازم غنايمي" },
  basharGamalAldeen: { img: basharGamalAldeen, subject: 'اللغة الإنجليزية', name: "بشار جمال الدين" },
  hussamDwick: { img: hussamDwick, subject: 'اللغة العربية', name: "حسام دويك" },
  alaaAttar: { img: alaaAttar, subject: 'اللغة الفرنسية', name: "علاء عطار" },
  safwanIdress: { img: safwanIdress, subject: 'الرياضيات', name: "صفوان إدريس" },
  mohammadFarek: { img: mohammadFarek, subject: 'الرياضيات', name: "محمد فريق" },
  samerSleman: { img: samerSleman, subject: 'الكيمياء', name: "سامر سليمان" },
  abdalazizZakaria: { img: abdalazizZakaria, subject: 'الرياضيات', name: "عبد العزيز زكريا" },
  anasDrgham: { img: unknownImg, subject: 'الرياضيات', name: "أنس درغام" },
  anasNajjar: { img: anasNajjar, subject: 'الفيزياء', name: "أنس نجار" },
  alaaArab: { img: unknownImg, subject: 'الفيزياء', name: "علاء عرب" },
  younesDsouki: { img: unknownImg, subject: 'الفيزياء', name: "يونس دسوقي" },
  mahmoudDarwish: { img: mahmoudDarwish, subject: 'الكيمياء', name: "محمود درويش" },
  mahmoudHreh: { img: unknownImg, subject: 'الكيمياء', name: "محمود حرح" },
  ahmadOthman: { img: ahmadOthman, subject: 'العلوم', name: "أحمد عثمان" },
  othmanAlMohammad: { img: unknownImg, subject: 'العلوم', name: "عثمان المحمد" },
  ramezAlSaeed: { img: ramezAlSaeed, subject: 'اللغة العربية', name: "رامز السعيد" },
  sobhiSawwas: { img: unknownImg, subject: 'اللغة العربية', name: "صبحي سواس" },
  hasanNaasan: { img: hasanNaasan, subject: 'اللغة الإنجليزية', name: "حسن نعسان" },
  ihabGamal: { img: unknownImg, subject: 'التربية الدينية', name: "إيهاب جمال" },
  mohammadTabbakh: { img: mohammadTabbakh, subject: 'الفيزياء', name: "محمد طبّاخ" },
  mohammadAmeenSeedo: { img: unknownImg, subject: 'الفيزياء', name: "محمد أمين سيدو" },
  adeebAlsayed: { img: unknownImg, subject: 'الرياضيات', name: "أديب السيد" },
  mehdiBasteka: { img: unknownImg, subject: 'الفيزياء و الكيمياء', name: "مهدي بصطيقة" },
  saleemKaroub: { img: unknownImg, subject: 'العلوم', name: "سليم خروب" },
  ahmadHafez: { img: unknownImg, subject: 'العلوم', name: "أحمد حافظ" },
  yamanAbras: { img: unknownImg, subject: 'اللغة العربية', name: "يمان أبرص" },
  mohsenKadi: { img: unknownImg, subject: 'اللغة الإنجليزية', name: "محسن قاضي" },
  salyKayyali: { img: unknownImg, subject: 'اللغة الإنجليزية', name: "سالي كيالي" },
  nihadSeno: { img: unknownImg, subject: 'اللغة الفرنسية', name: "نهاد سينو" },
  ammarKhdry: { img: unknownImg, subject: 'اللغة الفرنسية', name: "عمار خضري" },
  adeebZohor: { img: adeebZohor, subject: 'ناريخ و جغرافيا', name: "أديب زهور" },
  waseemShayyah: { img: unknownImg, subject: 'الرياضيات', name: "وسيم شياح" },
  tariqSayedAli: { img: unknownImg, subject: 'اللغة الإنجليزية', name: "طارق السيد علي" },
  mohammadHilal: { img: unknownImg, subject: 'الفيزياء', name: "محمد هلال" },
  mohannadAshor: { img: mohannadAshor, subject: 'اللغة الإنجليزية', name: "مهند عاشور" },
  salemGazeh: { img: unknownImg, subject: 'اللغة الإنجليزية', name: "سالم جازة" },
  ferasAlsayyedOmar: { img: unknownImg, subject: 'الرياضيات', name: "فراس السيد عمر" },
  safiKabbani: { img: unknownImg, subject: 'العلوم', name: "صافي قباني" },
  mjdNahlawy: { img: unknownImg, subject: 'اللغة الفرنسية', name: "مجد نحلاوي" },
  mohammadNourAldeen: { img: unknownImg, subject: 'ناريخ و جغرافيا', name: "محمد نور الدين" },
  wajeehDwidry: { img: unknownImg, subject: 'اللغة الإنجليزية', name: 'وجيه دويدري' },
  ismaelSafaia: { img: unknownImg, subject: 'اللغة الفرنسية', name: 'إسماعيل  صفايا' },
  mustafaRslan: { img: unknownImg, subject: 'اللغة الفرنسية', name: 'مصطفى رسلان' },
  sohaybSarmini: { img: unknownImg, subject: 'الكيمياء', name: 'صهيب سرميني' },
  zakariaRajabBasha: { img: unknownImg, subject: 'العلوم', name: 'زكريا رجب باشا' },
  baraaSreo: { img: unknownImg, subject: 'العلوم', name: 'براء سريو' },
};

