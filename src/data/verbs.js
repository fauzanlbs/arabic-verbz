export const verbs = [
  // Kategori Mu'tal
  {
    id: 'qala',
    word: 'قَالَ',
    type: 'mutal',
    meaning: 'berkata',
    meaning_en: 'to say',
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
    meaning: 'adalah, menjadi',
    meaning_en: 'to be',
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
        ghoib: {
          mudzakkar: ['كَانَ', 'كَانَا', 'كَانُوْا'],
          muannats: ['كَانَتْ', 'كَانَتَا', 'كُنَّ']
        },
        khitob: {
          mudzakkar: ['كُنْتَ', 'كُنْتُمَا', 'كُنْتُمْ'],
          muannats: ['كُنْتِ', 'كُنْتُمَا', 'كُنْتُنَّ']
        },
        takallum: ['كُنْتُ', 'كُنَّا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَكُوْنُ', 'يَكُوْنَانِ', 'يَكُوْنُوْنَ'],
          muannats: ['تَكُوْنُ', 'تَكُوْنَانِ', 'يَكُنَّ']
        },
        khitob: {
          mudzakkar: ['تَكُوْنُ', 'تَكُوْنَانِ', 'تَكُوْنُوْنَ'],
          muannats: ['تَكُوْنِيْنَ', 'تَكُوْنَانِ', 'تَكُنَّ']
        },
        takallum: ['أَكُوْنُ', 'نَكُوْنُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['كُنْ', 'كُوْنَا', 'كُوْنُوْا'],
          muannats: ['كُوْنِي', 'كُوْنَا', 'كُنَّ']
        }
      }
    }
  },
  {
    id: 'baa',
    word: 'بَاعَ',
    type: 'mutal',
    meaning: 'menjual',
    meaning_en: 'to sell',
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
        ghoib: {
          mudzakkar: ['بَاعَ', 'بَاعَا', 'بَاعُوْا'],
          muannats: ['بَاعَتْ', 'بَاعَتَا', 'بِعْنَ']
        },
        khitob: {
          mudzakkar: ['بِعْتَ', 'بِعْتُمَا', 'بِعْتُمْ'],
          muannats: ['بِعْتِ', 'بِعْتُمَا', 'بِعْتُنَّ']
        },
        takallum: ['بِعْتُ', 'بِعْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَبِيْعُ', 'يَبِيْعَانِ', 'يَبِيْعُوْنَ'],
          muannats: ['تَبِيْعُ', 'تَبِيْعَانِ', 'يَبِعْنَ']
        },
        khitob: {
          mudzakkar: ['تَبِيْعُ', 'تَبِيْعَانِ', 'تَبِيْعُوْنَ'],
          muannats: ['تَبِيْعِيْنَ', 'تَبِيْعَانِ', 'تَبِعْنَ']
        },
        takallum: ['أَبِيْعُ', 'نَبِيْعُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['بِعْ', 'بِيْعَا', 'بِيْعُوْا'],
          muannats: ['بِيْعِي', 'بِيْعَا', 'بِعْنَ']
        }
      }
    }
  },
  {
    id: 'sara',
    word: 'سَارَ',
    type: 'mutal',
    meaning: 'berjalan',
    meaning_en: 'to walk',
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
    meaning_en: 'to call',
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
    meaning_en: 'to forget',
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
    meaning_en: 'to write',
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
    meaning_en: 'to sit',
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
    meaning_en: 'to eat',
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
    meaning_en: 'to drink',
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
    meaning_en: 'to open',
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
    meaning_en: 'to hit',
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
  },
  {
    id: 'wasala',
    word: 'وَصَلَ',
    type: 'mutal',
    subtype: 'mitsal_wawi',
    meaning: 'sampai, tiba',
    meaning_en: 'to arrive',
    frequency: 75,
    examples: [
      {
        arabic: 'وَصَلَ المُسَافِرُ إِلَى المَطَارِ',
        translation: 'Musafir itu tiba di bandara'
      },
      {
        arabic: 'مَتَى وَصَلْتَ إِلَى البَيْتِ؟',
        translation: 'Kapan kamu sampai di rumah?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['وَصَلَ', 'وَصَلاَ', 'وَصَلُوْا'],
          muannats: ['وَصَلَتْ', 'وَصَلَتَا', 'وَصَلْنَ']
        },
        khitob: {
          mudzakkar: ['وَصَلْتَ', 'وَصَلْتُمَا', 'وَصَلْتُمْ'],
          muannats: ['وَصَلْتِ', 'وَصَلْتُمَا', 'وَصَلْتُنَّ']
        },
        takallum: ['وَصَلْتُ', 'وَصَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَصِلُ', 'يَصِلاَنِ', 'يَصِلُوْنَ'],
          muannats: ['تَصِلُ', 'تَصِلاَنِ', 'يَصِلْنَ']
        },
        khitob: {
          mudzakkar: ['تَصِلُ', 'تَصِلاَنِ', 'تَصِلُوْنَ'],
          muannats: ['تَصِلِيْنَ', 'تَصِلاَنِ', 'تَصِلْنَ']
        },
        takallum: ['أَصِلُ', 'نَصِلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['صِلْ', 'صِلاَ', 'صِلُوْا'],
          muannats: ['صِلِي', 'صِلاَ', 'صِلْنَ']
        }
      }
    }
  },
  {
    id: 'wadhaa',
    word: 'وَضَعَ',
    type: 'mutal',
    subtype: 'mitsal_wawi',
    meaning: 'meletakkan',
    meaning_en: 'to put',
    frequency: 70,
    examples: [
      {
        arabic: 'وَضَعَ الكِتَابَ عَلَى المَكْتَبِ',
        translation: 'Dia meletakkan buku di atas meja'
      },
      {
        arabic: 'أَيْنَ وَضَعْتَ مِفْتَاحَكَ؟',
        translation: 'Di mana kamu meletakkan kuncimu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['وَضَعَ', 'وَضَعَا', 'وَضَعُوْا'],
          muannats: ['وَضَعَتْ', 'وَضَعَتَا', 'وَضَعْنَ']
        },
        khitob: {
          mudzakkar: ['وَضَعْتَ', 'وَضَعْتُمَا', 'وَضَعْتُمْ'],
          muannats: ['وَضَعْتِ', 'وَضَعْتُمَا', 'وَضَعْتُنَّ']
        },
        takallum: ['وَضَعْتُ', 'وَضَعْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَضَعُ', 'يَضَعَانِ', 'يَضَعُوْنَ'],
          muannats: ['تَضَعُ', 'تَضَعَانِ', 'يَضَعْنَ']
        },
        khitob: {
          mudzakkar: ['تَضَعُ', 'تَضَعَانِ', 'تَضَعُوْنَ'],
          muannats: ['تَضَعِيْنَ', 'تَضَعَانِ', 'تَضَعْنَ']
        },
        takallum: ['أَضَعُ', 'نَضَعُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['ضَعْ', 'ضَعَا', 'ضَعُوْا'],
          muannats: ['ضَعِي', 'ضَعَا', 'ضَعْنَ']
        }
      }
    }
  },
  {
    id: 'yasara',
    word: 'يَسَرَ',
    type: 'mutal',
    subtype: 'mitsal_yai',
    meaning: 'mudah',
    meaning_en: 'to be easy',
    frequency: 65,
    examples: [
      {
        arabic: 'يَسَرَ اللهُ الأَمْرَ',
        translation: 'Allah memudahkan perkara itu'
      },
      {
        arabic: 'يَسَرَ عَلَيْهِ العَمَلُ',
        translation: 'Pekerjaan itu mudah baginya'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['يَسَرَ', 'يَسَرَا', 'يَسَرُوْا'],
          muannats: ['يَسَرَتْ', 'يَسَرَتَا', 'يَسَرْنَ']
        },
        khitob: {
          mudzakkar: ['يَسَرْتَ', 'يَسَرْتُمَا', 'يَسَرْتُمْ'],
          muannats: ['يَسَرْتِ', 'يَسَرْتُمَا', 'يَسَرْتُنَّ']
        },
        takallum: ['يَسَرْتُ', 'يَسَرْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَيْسِرُ', 'يَيْسِرَانِ', 'يَيْسِرُوْنَ'],
          muannats: ['تَيْسِرُ', 'تَيْسِرَانِ', 'يَيْسِرْنَ']
        },
        khitob: {
          mudzakkar: ['تَيْسِرُ', 'تَيْسِرَانِ', 'تَيْسِرُوْنَ'],
          muannats: ['تَيْسِرِيْنَ', 'تَيْسِرَانِ', 'تَيْسِرْنَ']
        },
        takallum: ['أَيْسِرُ', 'نَيْسِرُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِيْسِرْ', 'اِيْسِرَا', 'اِيْسِرُوْا'],
          muannats: ['اِيْسِرِي', 'اِيْسِرَا', 'اِيْسِرْنَ']
        }
      }
    }
  },
  {
    id: 'naama',
    word: 'نَامَ',
    type: 'mutal',
    subtype: 'ajwaf_wawi',
    meaning: 'tidur',
    meaning_en: 'to sleep',
    frequency: 75,
    examples: [
      {
        arabic: 'نَامَ الطِّفْلُ فِي السَّرِيْرِ',
        translation: 'Anak itu tidur di kasur'
      },
      {
        arabic: 'مَتَى نِمْتَ البَارِحَةَ؟',
        translation: 'Kapan kamu tidur tadi malam?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['نَامَ', 'نَامَا', 'نَامُوْا'],
          muannats: ['نَامَتْ', 'نَامَتَا', 'نِمْنَ']
        },
        khitob: {
          mudzakkar: ['نِمْتَ', 'نِمْتُمَا', 'نِمْتُمْ'],
          muannats: ['نِمْتِ', 'نِمْتُمَا', 'نِمْتُنَّ']
        },
        takallum: ['نِمْتُ', 'نِمْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَنَامُ', 'يَنَامَانِ', 'يَنَامُوْنَ'],
          muannats: ['تَنَامُ', 'تَنَامَانِ', 'يَنَمْنَ']
        },
        khitob: {
          mudzakkar: ['تَنَامُ', 'تَنَامَانِ', 'تَنَامُوْنَ'],
          muannats: ['تَنَامِيْنَ', 'تَنَامَانِ', 'تَنَمْنَ']
        },
        takallum: ['أَنَامُ', 'نَنَامُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['نَمْ', 'نَامَا', 'نَامُوْا'],
          muannats: ['نَامِي', 'نَامَا', 'نَمْنَ']
        }
      }
    }
  },
  {
    id: 'jaa',
    word: 'جَاءَ',
    type: 'mutal',
    subtype: 'ajwaf_yai',
    meaning: 'datang',
    meaning_en: 'to come',
    frequency: 85,
    examples: [
      {
        arabic: 'جَاءَ المُدَرِّسُ إِلَى الفَصْلِ',
        translation: 'Guru datang ke kelas'
      },
      {
        arabic: 'مَتَى جِئْتَ إِلَى المَدْرَسَةِ؟',
        translation: 'Kapan kamu datang ke sekolah?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['جَاءَ', 'جَاءَا', 'جَاؤُوْا'],
          muannats: ['جَاءَتْ', 'جَاءَتَا', 'جِئْنَ']
        },
        khitob: {
          mudzakkar: ['جِئْتَ', 'جِئْتُمَا', 'جِئْتُمْ'],
          muannats: ['جِئْتِ', 'جِئْتُمَا', 'جِئْتُنَّ']
        },
        takallum: ['جِئْتُ', 'جِئْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَجِيْءُ', 'يَجِيْئَانِ', 'يَجِيْئُوْنَ'],
          muannats: ['تَجِيْءُ', 'تَجِيْئَانِ', 'يَجِئْنَ']
        },
        khitob: {
          mudzakkar: ['تَجِيْءُ', 'تَجِيْئَانِ', 'تَجِيْئُوْنَ'],
          muannats: ['تَجِيْئِيْنَ', 'تَجِيْئَانِ', 'تَجِئْنَ']
        },
        takallum: ['أَجِيْءُ', 'نَجِيْءُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['جِئْ', 'جِيْئَا', 'جِيْئُوْا'],
          muannats: ['جِيْئِي', 'جِيْئَا', 'جِئْنَ']
        }
      }
    }
  },
  {
    id: 'rajaa',
    word: 'رَجَا',
    type: 'mutal',
    subtype: 'naqish_wawi',
    meaning: 'berharap',
    meaning_en: 'to hope',
    frequency: 70,
    examples: [
      {
        arabic: 'رَجَا الطَّالِبُ النَّجَاحَ',
        translation: 'Siswa itu berharap sukses'
      },
      {
        arabic: 'رَجَوْتُ اللهَ الخَيْرَ',
        translation: 'Saya berharap kebaikan dari Allah'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['رَجَا', 'رَجَوَا', 'رَجَوْا'],
          muannats: ['رَجَتْ', 'رَجَتَا', 'رَجَوْنَ']
        },
        khitob: {
          mudzakkar: ['رَجَوْتَ', 'رَجَوْتُمَا', 'رَجَوْتُمْ'],
          muannats: ['رَجَوْتِ', 'رَجَوْتُمَا', 'رَجَوْتُنَّ']
        },
        takallum: ['رَجَوْتُ', 'رَجَوْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَرْجُو', 'يَرْجُوَانِ', 'يَرْجُوْنَ'],
          muannats: ['تَرْجُو', 'تَرْجُوَانِ', 'يَرْجُوْنَ']
        },
        khitob: {
          mudzakkar: ['تَرْجُو', 'تَرْجُوَانِ', 'تَرْجُوْنَ'],
          muannats: ['تَرْجِيْنَ', 'تَرْجُوَانِ', 'تَرْجُوْنَ']
        },
        takallum: ['أَرْجُو', 'نَرْجُو']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُرْجُ', 'اُرْجُوَا', 'اُرْجُوْا'],
          muannats: ['اُرْجِي', 'اُرْجُوَا', 'اُرْجُوْنَ']
        }
      }
    }
  },
  {
    id: 'mashaa',
    word: 'مَشَى',
    type: 'mutal',
    subtype: 'naqish_yai',
    meaning: 'berjalan',
    meaning_en: 'to walk',
    frequency: 75,
    examples: [
      {
        arabic: 'مَشَى الطِّفْلُ إِلَى المَدْرَسَةِ',
        translation: 'Anak itu berjalan ke sekolah'
      },
      {
        arabic: 'مَشَيْتُ سَاعَةً',
        translation: 'Saya berjalan selama satu jam'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['مَشَى', 'مَشَيَا', 'مَشَوْا'],
          muannats: ['مَشَتْ', 'مَشَتَا', 'مَشَيْنَ']
        },
        khitob: {
          mudzakkar: ['مَشَيْتَ', 'مَشَيْتُمَا', 'مَشَيْتُمْ'],
          muannats: ['مَشَيْتِ', 'مَشَيْتُمَا', 'مَشَيْتُنَّ']
        },
        takallum: ['مَشَيْتُ', 'مَشَيْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَمْشِي', 'يَمْشِيَانِ', 'يَمْشُوْنَ'],
          muannats: ['تَمْشِي', 'تَمْشِيَانِ', 'يَمْشِيْنَ']
        },
        khitob: {
          mudzakkar: ['تَمْشِي', 'تَمْشِيَانِ', 'تَمْشُوْنَ'],
          muannats: ['تَمْشِيْنَ', 'تَمْشِيَانِ', 'تَمْشِيْنَ']
        },
        takallum: ['أَمْشِي', 'نَمْشِي']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِمْشِ', 'اِمْشِيَا', 'اِمْشُوْا'],
          muannats: ['اِمْشِي', 'اِمْشِيَا', 'اِمْشِيْنَ']
        }
      }
    }
  },
  {
    id: 'bakaa',
    word: 'بَكَى',
    type: 'mutal',
    subtype: 'naqish_yai',
    meaning: 'menangis',
    meaning_en: 'to cry',
    frequency: 65,
    examples: [
      {
        arabic: 'بَكَى الطِّفْلُ مِنَ الأَلَمِ',
        translation: 'Anak itu menangis karena sakit'
      },
      {
        arabic: 'لِمَاذَا بَكَيْتَ؟',
        translation: 'Kenapa kamu menangis?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['بَكَى', 'بَكَيَا', 'بَكَوْا'],
          muannats: ['بَكَتْ', 'بَكَتَا', 'بَكَيْنَ']
        },
        khitob: {
          mudzakkar: ['بَكَيْتَ', 'بَكَيْتُمَا', 'بَكَيْتُمْ'],
          muannats: ['بَكَيْتِ', 'بَكَيْتُمَا', 'بَكَيْتُنَّ']
        },
        takallum: ['بَكَيْتُ', 'بَكَيْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَبْكِي', 'يَبْكِيَانِ', 'يَبْكُوْنَ'],
          muannats: ['تَبْكِي', 'تَبْكِيَانِ', 'يَبْكِيْنَ']
        },
        khitob: {
          mudzakkar: ['تَبْكِي', 'تَبْكِيَانِ', 'تَبْكُوْنَ'],
          muannats: ['تَبْكِيْنَ', 'تَبْكِيَانِ', 'تَبْكِيْنَ']
        },
        takallum: ['أَبْكِي', 'نَبْكِي']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِبْكِ', 'اِبْكِيَا', 'اِبْكُوْا'],
          muannats: ['اِبْكِي', 'اِبْكِيَا', 'اِبْكِيْنَ']
        }
      }
    }
  }
]; 