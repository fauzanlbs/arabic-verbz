export const verbs = [
  // Kategori Mu'tal
  {
    id: 'qala',
    word: 'قَالَ',
    type: 'mutal',
    meaning: 'berkata',
    frequency: 95,
    examples: [
      {
        arabic: 'قَالَ المُدَرِّسُ: الدَّرْسُ سَهْلٌ',
        translation: 'Guru berkata: Pelajaran ini mudah'
      },
      {
        arabic: 'مَاذَا قَالَ أَخُوكَ؟',
        translation: 'Apa yang dikatakan saudaramu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['قَالَ', 'قَالاَ', 'قَالُوْا'],
          muannats: ['قَالَتْ', 'قَالَتَا', 'قُلْنَ']
        },
        khitob: {
          mudzakkar: ['قُلْتَ', 'قُلْتُمَا', 'قُلْتُمْ'],
          muannats: ['قُلْتِ', 'قُلْتُمَا', 'قُلْتُنَّ']
        },
        takallum: ['قُلْتُ', 'قُلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَقُوْلُ', 'يَقُوْلاَنِ', 'يَقُوْلُوْنَ'],
          muannats: ['تَقُوْلُ', 'تَقُوْلاَنِ', 'يَقُلْنَ']
        },
        khitob: {
          mudzakkar: ['تَقُوْلُ', 'تَقُوْلاَنِ', 'تَقُوْلُوْنَ'],
          muannats: ['تَقُوْلِيْنَ', 'تَقُوْلاَنِ', 'تَقُلْنَ']
        },
        takallum: ['أَقُوْلُ', 'نَقُوْلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['قُلْ', 'قُوْلاَ', 'قُوْلُوْا'],
          muannats: ['قُوْلِي', 'قُوْلاَ', 'قُلْنَ']
        }
      }
    }
  },
  {
    id: 'kana',
    word: 'كَانَ',
    type: 'mutal',
    meaning: 'adalah/menjadi',
    frequency: 90,
    examples: [
      {
        arabic: 'كَانَ الجَوُّ حَارًّا',
        translation: 'Cuaca itu panas'
      },
      {
        arabic: 'كُنْتُ طَالِبًا',
        translation: 'Saya adalah seorang siswa'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: ['كَانَ', 'كَانَا', 'كَانُوْا'],
        khitob: ['كُنْتَ', 'كُنْتُمَا', 'كُنْتُمْ'],
        takallum: ['كُنْتُ', 'كُنَّا']
      },
      mudhari: {
        ghoib: ['يَكُوْنُ', 'يَكُوْنَانِ', 'يَكُوْنُوْنَ'],
        khitob: ['تَكُوْنُ', 'تَكُوْنَانِ', 'تَكُوْنُوْنَ'],
        takallum: ['أَكُوْنُ', 'نَكُوْنُ']
      },
      amr: {
        khitob: ['كُنْ', 'كُوْنَا', 'كُوْنُوْا']
      }
    }
  },
  {
    id: 'baa',
    word: 'بَاعَ',
    type: 'mutal',
    meaning: 'menjual',
    frequency: 85,
    examples: [
      {
        arabic: 'بَاعَ التَّاجِرُ السِّلْعَةَ',
        translation: 'Pedagang menjual barang'
      },
      {
        arabic: 'هَلْ بَاعَتْ السَّيَّارَةَ؟',
        translation: 'Apakah dia menjual mobil?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: ['بَاعَ', 'بَاعَا', 'بَاعُوْا'],
        khitob: ['بِعْتَ', 'بِعْتُمَا', 'بِعْتُمْ'],
        takallum: ['بِعْتُ', 'بِعْنَا']
      },
      mudhari: {
        ghoib: ['يَبِيْعُ', 'يَبِيْعَانِ', 'يَبِيْعُوْنَ'],
        khitob: ['تَبِيْعُ', 'تَبِيْعَانِ', 'تَبِيْعُوْنَ'],
        takallum: ['أَبِيْعُ', 'نَبِيْعُ']
      },
      amr: {
        khitob: ['بِعْ', 'بِيْعَا', 'بِيْعُوْا']
      }
    }
  },
  {
    id: 'sara',
    word: 'سَارَ',
    type: 'mutal',
    meaning: 'berjalan',
    frequency: 80,
    examples: [
      {
        arabic: 'سَارَ الرَّجُلُ فِي الطَّرِيقِ',
        translation: 'Pria itu berjalan di jalan'
      },
      {
        arabic: 'سِرْتُ إِلَى المَدْرَسَةِ',
        translation: 'Saya berjalan ke sekolah'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['سَارَ', 'سَارَا', 'سَارُوْا'],
          muannats: ['سَارَتْ', 'سَارَتَا', 'سِرْنَ']
        },
        khitob: {
          mudzakkar: ['سِرْتَ', 'سِرْتُمَا', 'سِرْتُمْ'],
          muannats: ['سِرْتِ', 'سِرْتُمَا', 'سِرْتُنَّ']
        },
        takallum: ['سِرْتُ', 'سِرْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَسِيْرُ', 'يَسِيْرَانِ', 'يَسِيْرُوْنَ'],
          muannats: ['تَسِيْرُ', 'تَسِيْرَانِ', 'يَسِرْنَ']
        },
        khitob: {
          mudzakkar: ['تَسِيْرُ', 'تَسِيْرَانِ', 'تَسِيْرُوْنَ'],
          muannats: ['تَسِيْرِيْنَ', 'تَسِيْرَانِ', 'تَسِرْنَ']
        },
        takallum: ['أَسِيْرُ', 'نَسِيْرُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['سِرْ', 'سِيْرَا', 'سِيْرُوْا'],
          muannats: ['سِيْرِي', 'سِيْرَا', 'سِرْنَ']
        }
      }
    }
  },
  {
    id: 'daa',
    word: 'دَعَا',
    type: 'mutal',
    meaning: 'memanggil',
    frequency: 75,
    examples: [
      {
        arabic: 'دَعَا الوَلَدُ أُمَّهُ',
        translation: 'Anak itu memanggil ibunya'
      },
      {
        arabic: 'دَعَوْتُ صَدِيقِي',
        translation: 'Saya memanggil teman saya'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['دَعَا', 'دَعَوَا', 'دَعَوْا'],
          muannats: ['دَعَتْ', 'دَعَتَا', 'دَعَوْنَ']
        },
        khitob: {
          mudzakkar: ['دَعَوْتَ', 'دَعَوْتُمَا', 'دَعَوْتُمْ'],
          muannats: ['دَعَوْتِ', 'دَعَوْتُمَا', 'دَعَوْتُنَّ']
        },
        takallum: ['دَعَوْتُ', 'دَعَوْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَدْعُو', 'يَدْعُوَانِ', 'يَدْعُونَ'],
          muannats: ['تَدْعُو', 'تَدْعُوَانِ', 'يَدْعُونَ']
        },
        khitob: {
          mudzakkar: ['تَدْعُو', 'تَدْعُوَانِ', 'تَدْعُونَ'],
          muannats: ['تَدْعِيْنَ', 'تَدْعُوَانِ', 'تَدْعُونَ']
        },
        takallum: ['أَدْعُو', 'نَدْعُو']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُدْعُ', 'اُدْعُوَا', 'اُدْعُوا'],
          muannats: ['اُدْعِي', 'اُدْعُوَا', 'اُدْعُونَ']
        }
      }
    }
  },
  {
    id: 'nasa',
    word: 'نَسِيَ',
    type: 'mutal',
    meaning: 'lupa',
    frequency: 70,
    examples: [
      {
        arabic: 'نَسِيَ الطَّالِبُ الكِتَابَ',
        translation: 'Siswa itu lupa buku'
      },
      {
        arabic: 'نَسِيْتُ المَوْعِدَ',
        translation: 'Saya lupa janji'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['نَسِيَ', 'نَسِيَا', 'نَسُوْا'],
          muannats: ['نَسِيَتْ', 'نَسِيَتَا', 'نَسِيْنَ']
        },
        khitob: {
          mudzakkar: ['نَسِيْتَ', 'نَسِيْتُمَا', 'نَسِيْتُمْ'],
          muannats: ['نَسِيْتِ', 'نَسِيْتُمَا', 'نَسِيْتُنَّ']
        },
        takallum: ['نَسِيْتُ', 'نَسِيْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَنْسَى', 'يَنْسَيَانِ', 'يَنْسَوْنَ'],
          muannats: ['تَنْسَى', 'تَنْسَيَانِ', 'يَنْسَيْنَ']
        },
        khitob: {
          mudzakkar: ['تَنْسَى', 'تَنْسَيَانِ', 'تَنْسَوْنَ'],
          muannats: ['تَنْسَيْنَ', 'تَنْسَيَانِ', 'تَنْسَيْنَ']
        },
        takallum: ['أَنْسَى', 'نَنْسَى']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِنْسَ', 'اِنْسَيَا', 'اِنْسَوْا'],
          muannats: ['اِنْسَيْ', 'اِنْسَيَا', 'اِنْسَيْنَ']
        }
      }
    }
  },

  // Kategori Sahih
  {
    id: 'kataba',
    word: 'كَتَبَ',
    type: 'sahih',
    meaning: 'menulis',
    frequency: 85,
    examples: [
      {
        arabic: 'كَتَبَ الطَّالِبُ الوَاجِبَ',
        translation: 'Siswa menulis PR'
      },
      {
        arabic: 'هَلْ كَتَبْتَ الرِّسَالَةَ؟',
        translation: 'Apakah kamu sudah menulis surat?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['كَتَبَ', 'كَتَبَا', 'كَتَبُوْا'],
          muannats: ['كَتَبَتْ', 'كَتَبَتَا', 'كَتَبْنَ']
        },
        khitob: {
          mudzakkar: ['كَتَبْتَ', 'كَتَبْتُمَا', 'كَتَبْتُمْ'],
          muannats: ['كَتَبْتِ', 'كَتَبْتُمَا', 'كَتَبْتُنَّ']
        },
        takallum: ['كَتَبْتُ', 'كَتَبْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَكْتُبُ', 'يَكْتُبَانِ', 'يَكْتُبُوْنَ'],
          muannats: ['تَكْتُبُ', 'تَكْتُبَانِ', 'يَكْتُبْنَ']
        },
        khitob: {
          mudzakkar: ['تَكْتُبُ', 'تَكْتُبَانِ', 'تَكْتُبُوْنَ'],
          muannats: ['تَكْتُبِيْنَ', 'تَكْتُبَانِ', 'تَكْتُبْنَ']
        },
        takallum: ['أَكْتُبُ', 'نَكْتُبُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُكْتُبْ', 'اُكْتُبَا', 'اُكْتُبُوْا'],
          muannats: ['اُكْتُبِي', 'اُكْتُبَا', 'اُكْتُبْنَ']
        }
      }
    }
  },
  {
    id: 'jalasa',
    word: 'جَلَسَ',
    type: 'sahih',
    meaning: 'duduk',
    frequency: 80,
    examples: [
      {
        arabic: 'جَلَسَ الطُّلاَّبُ فِي الفَصْلِ',
        translation: 'Para siswa duduk di kelas'
      },
      {
        arabic: 'اِجْلِسْ هُنَا مِنْ فَضْلِكَ',
        translation: 'Silakan duduk di sini'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['جَلَسَ', 'جَلَسَا', 'جَلَسُوْا'],
          muannats: ['جَلَسَتْ', 'جَلَسَتَا', 'جَلَسْنَ']
        },
        khitob: {
          mudzakkar: ['جَلَسْتَ', 'جَلَسْتُمَا', 'جَلَسْتُمْ'],
          muannats: ['جَلَسْتِ', 'جَلَسْتُمَا', 'جَلَسْتُنَّ']
        },
        takallum: ['جَلَسْتُ', 'جَلَسْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَجْلِسُ', 'يَجْلِسَانِ', 'يَجْلِسُوْنَ'],
          muannats: ['تَجْلِسُ', 'تَجْلِسَانِ', 'يَجْلِسْنَ']
        },
        khitob: {
          mudzakkar: ['تَجْلِسُ', 'تَجْلِسَانِ', 'تَجْلِسُوْنَ'],
          muannats: ['تَجْلِسِيْنَ', 'تَجْلِسَانِ', 'تَجْلِسْنَ']
        },
        takallum: ['أَجْلِسُ', 'نَجْلِسُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِجْلِسْ', 'اِجْلِسَا', 'اِجْلِسُوْا'],
          muannats: ['اِجْلِسِي', 'اِجْلِسَا', 'اِجْلِسْنَ']
        }
      }
    }
  },
  {
    id: 'akala',
    word: 'أَكَلَ',
    type: 'sahih',
    meaning: 'makan',
    frequency: 75,
    examples: [
      {
        arabic: 'أَكَلَ الوَلَدُ التُّفَّاحَةَ',
        translation: 'Anak itu makan apel'
      },
      {
        arabic: 'هَلْ أَكَلْتَ الفَطُوْرَ؟',
        translation: 'Apakah kamu sudah makan sarapan?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['أَكَلَ', 'أَكَلاَ', 'أَكَلُوْا'],
          muannats: ['أَكَلَتْ', 'أَكَلَتَا', 'أَكَلْنَ']
        },
        khitob: {
          mudzakkar: ['أَكَلْتَ', 'أَكَلْتُمَا', 'أَكَلْتُمْ'],
          muannats: ['أَكَلْتِ', 'أَكَلْتُمَا', 'أَكَلْتُنَّ']
        },
        takallum: ['أَكَلْتُ', 'أَكَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَأْكُلُ', 'يَأْكُلاَنِ', 'يَأْكُلُوْنَ'],
          muannats: ['تَأْكُلُ', 'تَأْكُلاَنِ', 'يَأْكُلْنَ']
        },
        khitob: {
          mudzakkar: ['تَأْكُلُ', 'تَأْكُلاَنِ', 'تَأْكُلُوْنَ'],
          muannats: ['تَأْكُلِيْنَ', 'تَأْكُلاَنِ', 'تَأْكُلْنَ']
        },
        takallum: ['آكُلُ', 'نَأْكُلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['كُلْ', 'كُلاَ', 'كُلُوْا'],
          muannats: ['كُلِي', 'كُلاَ', 'كُلْنَ']
        }
      }
    }
  },
  {
    id: 'shariba',
    word: 'شَرِبَ',
    type: 'sahih',
    meaning: 'minum',
    frequency: 70,
    examples: [
      {
        arabic: 'شَرِبَ الطِّفْلُ الحَلِيبَ',
        translation: 'Anak itu minum susu'
      },
      {
        arabic: 'هَلْ شَرِبْتَ المَاءَ؟',
        translation: 'Apakah kamu sudah minum air?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['شَرِبَ', 'شَرِبَا', 'شَرِبُوْا'],
          muannats: ['شَرِبَتْ', 'شَرِبَتَا', 'شَرِبْنَ']
        },
        khitob: {
          mudzakkar: ['شَرِبْتَ', 'شَرِبْتُمَا', 'شَرِبْتُمْ'],
          muannats: ['شَرِبْتِ', 'شَرِبْتُمَا', 'شَرِبْتُنَّ']
        },
        takallum: ['شَرِبْتُ', 'شَرِبْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَشْرَبُ', 'يَشْرَبَانِ', 'يَشْرَبُوْنَ'],
          muannats: ['تَشْرَبُ', 'تَشْرَبَانِ', 'يَشْرَبْنَ']
        },
        khitob: {
          mudzakkar: ['تَشْرَبُ', 'تَشْرَبَانِ', 'تَشْرَبُوْنَ'],
          muannats: ['تَشْرَبِيْنَ', 'تَشْرَبَانِ', 'تَشْرَبْنَ']
        },
        takallum: ['أَشْرَبُ', 'نَشْرَبُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِشْرَبْ', 'اِشْرَبَا', 'اِشْرَبُوْا'],
          muannats: ['اِشْرَبِي', 'اِشْرَبَا', 'اِشْرَبْنَ']
        }
      }
    }
  },
  {
    id: 'fataha',
    word: 'فَتَحَ',
    type: 'sahih',
    meaning: 'membuka',
    frequency: 65,
    examples: [
      {
        arabic: 'فَتَحَ الرَّجُلُ البَابَ',
        translation: 'Pria itu membuka pintu'
      },
      {
        arabic: 'هَلْ فَتَحْتَ الكِتَابَ؟',
        translation: 'Apakah kamu sudah membuka buku?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['فَتَحَ', 'فَتَحَا', 'فَتَحُوْا'],
          muannats: ['فَتَحَتْ', 'فَتَحَتَا', 'فَتَحْنَ']
        },
        khitob: {
          mudzakkar: ['فَتَحْتَ', 'فَتَحْتُمَا', 'فَتَحْتُمْ'],
          muannats: ['فَتَحْتِ', 'فَتَحْتُمَا', 'فَتَحْتُنَّ']
        },
        takallum: ['فَتَحْتُ', 'فَتَحْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَفْتَحُ', 'يَفْتَحَانِ', 'يَفْتَحُوْنَ'],
          muannats: ['تَفْتَحُ', 'تَفْتَحَانِ', 'يَفْتَحْنَ']
        },
        khitob: {
          mudzakkar: ['تَفْتَحُ', 'تَفْتَحَانِ', 'تَفْتَحُوْنَ'],
          muannats: ['تَفْتَحِيْنَ', 'تَفْتَحَانِ', 'تَفْتَحْنَ']
        },
        takallum: ['أَفْتَحُ', 'نَفْتَحُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِفْتَحْ', 'اِفْتَحَا', 'اِفْتَحُوْا'],
          muannats: ['اِفْتَحِي', 'اِفْتَحَا', 'اِفْتَحْنَ']
        }
      }
    }
  },
  {
    id: 'daraba',
    word: 'ضَرَبَ',
    type: 'sahih',
    meaning: 'memukul',
    frequency: 60,
    examples: [
      {
        arabic: 'ضَرَبَ الوَلَدُ الكُرَةَ',
        translation: 'Anak itu memukul bola'
      },
      {
        arabic: 'هَلْ ضَرَبْتَ الطَّبْلَ؟',
        translation: 'Apakah kamu sudah memukul drum?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['ضَرَبَ', 'ضَرَبَا', 'ضَرَبُوْا'],
          muannats: ['ضَرَبَتْ', 'ضَرَبَتَا', 'ضَرَبْنَ']
        },
        khitob: {
          mudzakkar: ['ضَرَبْتَ', 'ضَرَبْتُمَا', 'ضَرَبْتُمْ'],
          muannats: ['ضَرَبْتِ', 'ضَرَبْتُمَا', 'ضَرَبْتُنَّ']
        },
        takallum: ['ضَرَبْتُ', 'ضَرَبْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَضْرِبُ', 'يَضْرِبَانِ', 'يَضْرِبُوْنَ'],
          muannats: ['تَضْرِبُ', 'تَضْرِبَانِ', 'يَضْرِبْنَ']
        },
        khitob: {
          mudzakkar: ['تَضْرِبُ', 'تَضْرِبَانِ', 'تَضْرِبُوْنَ'],
          muannats: ['تَضْرِبِيْنَ', 'تَضْرِبَانِ', 'تَضْرِبْنَ']
        },
        takallum: ['أَضْرِبُ', 'نَضْرِبُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِضْرِبْ', 'اِضْرِبَا', 'اِضْرِبُوْا'],
          muannats: ['اِضْرِبِي', 'اِضْرِبَا', 'اِضْرِبْنَ']
        }
      }
    }
  }
]; 