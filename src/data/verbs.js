export const verbs = [
  // Kategori Mu'tal
  {
    id: 'qala',
    word: 'قَالَ',
    type: 'mutal',
    subtype: 'ajwaf_wawi',
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
    subtype: 'ajwaf_wawi',
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
    subtype: 'ajwaf_yai',
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
    subtype: 'ajwaf_wawi',
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
    subtype: 'naqish_wawi',
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
          mudzakkar: ['اُدْعُ', 'اِدْعُوَا', 'اِدْعُوا'],
          muannats: ['اِدْعِي', 'اِدْعُوَا', 'اِدْعُونَ']
        }
      }
    }
  },
  {
    id: 'nasa',
    word: 'نَسِيَ',
    type: 'mutal',
    subtype: 'naqish_yai',
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
    subtype: 'salim',
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
    subtype: 'salim',
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
    id: 'akala_mahmuz',
    word: 'أَكَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'makan',
    meaning_en: 'to eat',
    frequency: 85,
    examples: [
      {
        arabic: 'أَكَلَ الوَلَدُ التُّفَّاحَةَ',
        translation: 'Anak itu makan apel'
      },
      {
        arabic: 'مَاذَا أَكَلْتَ اليَوْمَ؟',
        translation: 'Apa yang kamu makan hari ini?'
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
    subtype: 'salim',
    meaning: 'minum',
    meaning_en: 'to drink',
    frequency: 85,
    examples: [
      {
        arabic: 'شَرِبَ الوَلَدُ الحَلِيبَ',
        translation: 'Anak itu minum susu'
      },
      {
        arabic: 'مَاذَا شَرِبْتَ؟',
        translation: 'Apa yang kamu minum?'
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
    subtype: 'salim',
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
    subtype: 'salim',
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
          mudzakkar: ['اِجْئِ', 'اِجْئَا', 'اِجْئُوْا'],
          muannats: ['اِجْئِي', 'اِجْئَا', 'اِجْئْنَ']
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
          mudzakkar: ['تَرْجُو', 'تَرْجُوَانِ', 'تَرْجُونَ'],
          muannats: ['تَرْجِيْنَ', 'تَرْجُوَانِ', 'تَرْجُونَ']
        },
        takallum: ['أَرْجُو', 'نَرْجُو']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِرْجُ', 'اِرْجُوَا', 'اِرْجُوْا'],
          muannats: ['اِرْجِي', 'اِرْجُوَا', 'اِرْجُوْنَ']
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
  },
  {
    id: 'madda',
    word: 'مَدَّ',
    type: 'sahih',
    subtype: 'mudoaf',
    meaning: 'memanjangkan',
    meaning_en: 'to extend',
    frequency: 75,
    examples: [
      {
        arabic: 'مَدَّ الرَّجُلُ يَدَهُ',
        translation: 'Pria itu mengulurkan tangannya'
      },
      {
        arabic: 'مَدَّ اللهُ فِي عُمْرِهِ',
        translation: 'Allah memanjangkan umurnya'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['مَدَّ', 'مَدَّا', 'مَدُّوْا'],
          muannats: ['مَدَّتْ', 'مَدَّتَا', 'مَدَدْنَ']
        },
        khitob: {
          mudzakkar: ['مَدَدْتَ', 'مَدَدْتُمَا', 'مَدَدْتُمْ'],
          muannats: ['مَدَدْتِ', 'مَدَدْتُمَا', 'مَدَدْتُنَّ']
        },
        takallum: ['مَدَدْتُ', 'مَدَدْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَمُدُّ', 'يَمُدَّانِ', 'يَمُدُّوْنَ'],
          muannats: ['تَمُدُّ', 'تَمُدَّانِ', 'يَمْدُدْنَ']
        },
        khitob: {
          mudzakkar: ['تَمُدُّ', 'تَمُدَّانِ', 'تَمُدُّوْنَ'],
          muannats: ['تَمُدِّيْنَ', 'تَمُدَّانِ', 'تَمْدُدْنَ']
        },
        takallum: ['أَمُدُّ', 'نَمُدُّ']
      },
      amr: {
        khitob: {
          mudzakkar: ['مُدَّ', 'مُدَّا', 'مُدُّوْا'],
          muannats: ['مُدِّي', 'مُدَّا', 'اُمْدُدْنَ']
        }
      }
    }
  },
  {
    id: 'saala',
    word: 'سَأَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'bertanya',
    meaning_en: 'to ask',
    frequency: 80,
    examples: [
      {
        arabic: 'سَأَلَ الطَّالِبُ المُدَرِّسَ',
        translation: 'Siswa bertanya kepada guru'
      },
      {
        arabic: 'لِمَاذَا سَأَلْتَ هَذَا السُّؤَالَ؟',
        translation: 'Kenapa kamu menanyakan pertanyaan ini?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['سَأَلَ', 'سَأَلاَ', 'سَأَلُوْا'],
          muannats: ['سَأَلَتْ', 'سَأَلَتَا', 'سَأَلْنَ']
        },
        khitob: {
          mudzakkar: ['سَأَلْتَ', 'سَأَلْتُمَا', 'سَأَلْتُمْ'],
          muannats: ['سَأَلْتِ', 'سَأَلْتُمَا', 'سَأَلْتُنَّ']
        },
        takallum: ['سَأَلْتُ', 'سَأَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَسْأَلُ', 'يَسْأَلاَنِ', 'يَسْأَلُوْنَ'],
          muannats: ['تَسْأَلُ', 'تَسْأَلاَنِ', 'يَسْأَلْنَ']
        },
        khitob: {
          mudzakkar: ['تَسْأَلُ', 'تَسْأَلاَنِ', 'تَسْأَلُوْنَ'],
          muannats: ['تَسْأَلِيْنَ', 'تَسْأَلاَنِ', 'تَسْأَلْنَ']
        },
        takallum: ['أَسْأَلُ', 'نَسْأَلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِسْأَلْ', 'اِسْأَلاَ', 'اِسْأَلُوْا'],
          muannats: ['اِسْأَلِي', 'اِسْأَلاَ', 'اِسْأَلْنَ']
        }
      }
    }
  },
  {
    id: 'dhanna',
    word: 'ظَنَّ',
    type: 'sahih',
    subtype: 'mudoaf',
    meaning: 'menduga',
    meaning_en: 'to think, to assume',
    frequency: 80,
    examples: [
      {
        arabic: 'ظَنَّ المُدَرِّسُ الطَّالِبَ نَاجِحًا',
        translation: 'Guru menduga siswa itu lulus'
      },
      {
        arabic: 'مَاذَا ظَنَنْتَ فِي هَذَا الأَمْرِ؟',
        translation: 'Apa dugaanmu tentang masalah ini?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['ظَنَّ', 'ظَنَّا', 'ظَنُّوْا'],
          muannats: ['ظَنَّتْ', 'ظَنَّتَا', 'ظَنَنَّ']
        },
        khitob: {
          mudzakkar: ['ظَنَنْتَ', 'ظَنَنْتُمَا', 'ظَنَنْتُمْ'],
          muannats: ['ظَنَنْتِ', 'ظَنَنْتُمَا', 'ظَنَنْتُنَّ']
        },
        takallum: ['ظَنَنْتُ', 'ظَنَنَّا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَظُنُّ', 'يَظُنَّانِ', 'يَظُنُّوْنَ'],
          muannats: ['تَظُنُّ', 'تَظُنَّانِ', 'يَظْنُنَّ']
        },
        khitob: {
          mudzakkar: ['تَظُنُّ', 'تَظُنَّانِ', 'تَظُنُّوْنَ'],
          muannats: ['تَظُنِّيْنَ', 'تَظُنَّانِ', 'تَظْنُنَّ']
        },
        takallum: ['أَظُنُّ', 'نَظُنُّ']
      },
      amr: {
        khitob: {
          mudzakkar: ['ظُنَّ', 'ظُنَّا', 'ظُنُّوْا'],
          muannats: ['ظُنِّي', 'ظُنَّا', 'اُظْنُنَّ']
        }
      }
    }
  },
  {
    id: 'radda',
    word: 'رَدَّ',
    type: 'sahih',
    subtype: 'mudoaf',
    meaning: 'mengembalikan',
    meaning_en: 'to return, to reply',
    frequency: 75,
    examples: [
      {
        arabic: 'رَدَّ الطَّالِبُ الكِتَابَ إِلَى المَكْتَبَةِ',
        translation: 'Siswa mengembalikan buku ke perpustakaan'
      },
      {
        arabic: 'رَدَّ عَلَى السُّؤَالِ',
        translation: 'Dia menjawab pertanyaan'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['رَدَّ', 'رَدَّا', 'رَدُّوْا'],
          muannats: ['رَدَّتْ', 'رَدَّتَا', 'رَدَدْنَ']
        },
        khitob: {
          mudzakkar: ['رَدَدْتَ', 'رَدَدْتُمَا', 'رَدَدْتُمْ'],
          muannats: ['رَدَدْتِ', 'رَدَدْتُمَا', 'رَدَدْتُنَّ']
        },
        takallum: ['رَدَدْتُ', 'رَدَدْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَرُدُّ', 'يَرُدَّانِ', 'يَرُدُّوْنَ'],
          muannats: ['تَرُدُّ', 'تَرُدَّانِ', 'يَرْدُدْنَ']
        },
        khitob: {
          mudzakkar: ['تَرُدُّ', 'تَرُدَّانِ', 'تَرُدُّوْنَ'],
          muannats: ['تَرُدِّيْنَ', 'تَرُدَّانِ', 'تَرْدُدْنَ']
        },
        takallum: ['أَرُدُّ', 'نَرُدُّ']
      },
      amr: {
        khitob: {
          mudzakkar: ['رُدَّ', 'رُدَّا', 'رُدُّوْا'],
          muannats: ['رُدِّي', 'رُدَّا', 'اُرْدُدْنَ']
        }
      }
    }
  },
  {
    id: 'fahima',
    word: 'فَهِمَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'mengerti, memahami',
    meaning_en: 'to understand',
    frequency: 85,
    examples: [
      {
        arabic: 'فَهِمَ الطَّالِبُ الدَّرْسَ',
        translation: 'Siswa memahami pelajaran'
      },
      {
        arabic: 'هَلْ فَهِمْتَ مَا قُلْتُ؟',
        translation: 'Apakah kamu mengerti apa yang saya katakan?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['فَهِمَ', 'فَهِمَا', 'فَهِمُوْا'],
          muannats: ['فَهِمَتْ', 'فَهِمَتَا', 'فَهِمْنَ']
        },
        khitob: {
          mudzakkar: ['فَهِمْتَ', 'فَهِمْتُمَا', 'فَهِمْتُمْ'],
          muannats: ['فَهِمْتِ', 'فَهِمْتُمَا', 'فَهِمْتُنَّ']
        },
        takallum: ['فَهِمْتُ', 'فَهِمْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَفْهَمُ', 'يَفْهَمَانِ', 'يَفْهَمُوْنَ'],
          muannats: ['تَفْهَمُ', 'تَفْهَمَانِ', 'يَفْهَمْنَ']
        },
        khitob: {
          mudzakkar: ['تَفْهَمُ', 'تَفْهَمَانِ', 'تَفْهَمُوْنَ'],
          muannats: ['تَفْهَمِيْنَ', 'تَفْهَمَانِ', 'تَفْهَمْنَ']
        },
        takallum: ['أَفْهَمُ', 'نَفْهَمُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِفْهَمْ', 'اِفْهَمَا', 'اِفْهَمُوْا'],
          muannats: ['اِفْهَمِي', 'اِفْهَمَا', 'اِفْهَمْنَ']
        }
      }
    }
  },
  {
    id: 'waqafa',
    word: 'وَقَفَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'berdiri',
    meaning_en: 'to stand',
    frequency: 80,
    examples: [
      {
        arabic: 'وَقَفَ الطَّالِبُ أَمَامَ المُدَرِّسِ',
        translation: 'Siswa berdiri di depan guru'
      },
      {
        arabic: 'قِفْ هُنَا مِنْ فَضْلِكَ',
        translation: 'Silakan berdiri di sini'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['وَقَفَ', 'وَقَفَا', 'وَقَفُوْا'],
          muannats: ['وَقَفَتْ', 'وَقَفَتَا', 'وَقَفْنَ']
        },
        khitob: {
          mudzakkar: ['وَقَفْتَ', 'وَقَفْتُمَا', 'وَقَفْتُمْ'],
          muannats: ['وَقَفْتِ', 'وَقَفْتُمَا', 'وَقَفْتُنَّ']
        },
        takallum: ['وَقَفْتُ', 'وَقَفْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَقِفُ', 'يَقِفَانِ', 'يَقِفُوْنَ'],
          muannats: ['تَقِفُ', 'تَقِفَانِ', 'يَقِفْنَ']
        },
        khitob: {
          mudzakkar: ['تَقِفُ', 'تَقِفَانِ', 'تَقِفُوْنَ'],
          muannats: ['تَقِفِيْنَ', 'تَقِفَانِ', 'تَقِفْنَ']
        },
        takallum: ['أَقِفُ', 'نَقِفُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['قِفْ', 'قِفَا', 'قِفُوْا'],
          muannats: ['قِفِي', 'قِفَا', 'قِفْنَ']
        }
      }
    }
  },
  {
    id: 'hamala',
    word: 'حَمَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'membawa',
    meaning_en: 'to carry',
    frequency: 75,
    examples: [
      {
        arabic: 'حَمَلَ الطَّالِبُ الحَقِيْبَةَ',
        translation: 'Siswa membawa tas'
      },
      {
        arabic: 'مَاذَا تَحْمِلُ فِي يَدِكَ؟',
        translation: 'Apa yang kamu bawa di tanganmu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['حَمَلَ', 'حَمَلاَ', 'حَمَلُوْا'],
          muannats: ['حَمَلَتْ', 'حَمَلَتَا', 'حَمَلْنَ']
        },
        khitob: {
          mudzakkar: ['حَمَلْتَ', 'حَمَلْتُمَا', 'حَمَلْتُمْ'],
          muannats: ['حَمَلْتِ', 'حَمَلْتُمَا', 'حَمَلْتُنَّ']
        },
        takallum: ['حَمَلْتُ', 'حَمَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَحْمِلُ', 'يَحْمِلاَنِ', 'يَحْمِلُوْنَ'],
          muannats: ['تَحْمِلُ', 'تَحْمِلاَنِ', 'يَحْمِلْنَ']
        },
        khitob: {
          mudzakkar: ['تَحْمِلُ', 'تَحْمِلاَنِ', 'تَحْمِلُوْنَ'],
          muannats: ['تَحْمِلِيْنَ', 'تَحْمِلاَنِ', 'تَحْمِلْنَ']
        },
        takallum: ['أَحْمِلُ', 'نَحْمِلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِحْمِلْ', 'اِحْمِلاَ', 'اِحْمِلُوْا'],
          muannats: ['اِحْمِلِي', 'اِحْمِلاَ', 'اِحْمِلْنَ']
        }
      }
    }
  },
  {
    id: 'khafa',
    word: 'خَافَ',
    type: 'mutal',
    subtype: 'ajwaf_wawi',
    meaning: 'takut',
    meaning_en: 'to fear',
    frequency: 75,
    examples: [
      {
        arabic: 'خَافَ الطِّفْلُ مِنَ الظَّلاَمِ',
        translation: 'Anak itu takut akan kegelapan'
      },
      {
        arabic: 'لاَ تَخَفْ، أَنَا مَعَكَ',
        translation: 'Jangan takut, saya bersamamu'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['خَافَ', 'خَافَا', 'خَافُوْا'],
          muannats: ['خَافَتْ', 'خَافَتَا', 'خِفْنَ']
        },
        khitob: {
          mudzakkar: ['خِفْتَ', 'خِفْتُمَا', 'خِفْتُمْ'],
          muannats: ['خِفْتِ', 'خِفْتُمَا', 'خِفْتُنَّ']
        },
        takallum: ['خِفْتُ', 'خِفْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَخَافُ', 'يَخَافَانِ', 'يَخَافُوْنَ'],
          muannats: ['تَخَافُ', 'تَخَافَانِ', 'يَخَفْنَ']
        },
        khitob: {
          mudzakkar: ['تَخَافُ', 'تَخَافَانِ', 'تَخَافُوْنَ'],
          muannats: ['تَخَافِيْنَ', 'تَخَافَانِ', 'تَخَفْنَ']
        },
        takallum: ['أَخَافُ', 'نَخَافُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['خَفْ', 'خَافَا', 'خَافُوْا'],
          muannats: ['خَافِي', 'خَافَا', 'خَفْنَ']
        }
      }
    }
  },
  {
    id: 'aasha',
    word: 'عَاشَ',
    type: 'mutal',
    subtype: 'ajwaf_wawi',
    meaning: 'hidup',
    meaning_en: 'to live',
    frequency: 80,
    examples: [
      {
        arabic: 'عَاشَ فِي المَدِيْنَةِ',
        translation: 'Dia hidup di kota'
      },
      {
        arabic: 'عِشْتُ فِي هَذَا البَيْتِ عِشْرِيْنَ سَنَةً',
        translation: 'Saya hidup di rumah ini selama 20 tahun'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['عَاشَ', 'عَاشَا', 'عَاشُوْا'],
          muannats: ['عَاشَتْ', 'عَاشَتَا', 'عِشْنَ']
        },
        khitob: {
          mudzakkar: ['عِشْتَ', 'عِشْتُمَا', 'عِشْتُمْ'],
          muannats: ['عِشْتِ', 'عِشْتُمَا', 'عِشْتُنَّ']
        },
        takallum: ['عِشْتُ', 'عِشْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَعِيْشُ', 'يَعِيْشَانِ', 'يَعِيْشُوْنَ'],
          muannats: ['تَعِيْشُ', 'تَعِيْشَانِ', 'يَعِشْنَ']
        },
        khitob: {
          mudzakkar: ['تَعِيْشُ', 'تَعِيْشَانِ', 'تَعِيْشُوْنَ'],
          muannats: ['تَعِيْشِيْنَ', 'تَعِيْشَانِ', 'تَعِشْنَ']
        },
        takallum: ['أَعِيْشُ', 'نَعِيْشُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['عِشْ', 'عِيْشَا', 'عِيْشُوْا'],
          muannats: ['عِيْشِي', 'عِيْشَا', 'عِشْنَ']
        }
      }
    }
  },
  {
    id: 'taba',
    word: 'تَابَ',
    type: 'mutal',
    subtype: 'ajwaf_wawi',
    meaning: 'bertaubat',
    meaning_en: 'to repent',
    frequency: 70,
    examples: [
      {
        arabic: 'تَابَ إِلَى اللهِ',
        translation: 'Dia bertaubat kepada Allah'
      },
      {
        arabic: 'تُبْتُ مِنْ ذَنْبِي',
        translation: 'Saya bertaubat dari dosa saya'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['تَابَ', 'تَابَا', 'تَابُوْا'],
          muannats: ['تَابَتْ', 'تَابَتَا', 'تُبْنَ']
        },
        khitob: {
          mudzakkar: ['تُبْتَ', 'تُبْتُمَا', 'تُبْتُمْ'],
          muannats: ['تُبْتِ', 'تُبْتُمَا', 'تُبْتُنَّ']
        },
        takallum: ['تُبْتُ', 'تُبْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَتُوْبُ', 'يَتُوْبَانِ', 'يَتُوْبُوْنَ'],
          muannats: ['تَتُوْبُ', 'تَتُوْبَانِ', 'يَتُبْنَ']
        },
        khitob: {
          mudzakkar: ['تَتُوْبُ', 'تَتُوْبَانِ', 'تَتُوْبُوْنَ'],
          muannats: ['تَتُوْبِيْنَ', 'تَتُوْبَانِ', 'تَتُبْنَ']
        },
        takallum: ['أَتُوْبُ', 'نَتُوْبُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['تُبْ', 'تُوْبَا', 'تُوْبُوْا'],
          muannats: ['تُوْبِي', 'تُوْبَا', 'تُبْنَ']
        }
      }
    }
  },
  {
    id: 'qawiya',
    word: 'قَوِيَ',
    type: 'mutal',
    subtype: 'naqish_yai',
    meaning: 'menjadi kuat',
    meaning_en: 'to become strong',
    frequency: 70,
    examples: [
      {
        arabic: 'قَوِيَ الرَّجُلُ بَعْدَ المَرَضِ',
        translation: 'Pria itu menjadi kuat setelah sakit'
      },
      {
        arabic: 'قَوِيَ الإِيْمَانُ فِي قَلْبِهِ',
        translation: 'Iman menjadi kuat di hatinya'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['قَوِيَ', 'قَوِيَا', 'قَوُوْا'],
          muannats: ['قَوِيَتْ', 'قَوِيَتَا', 'قَوِيْنَ']
        },
        khitob: {
          mudzakkar: ['قَوِيْتَ', 'قَوِيْتُمَا', 'قَوِيْتُمْ'],
          muannats: ['قَوِيْتِ', 'قَوِيْتُمَا', 'قَوِيْتُنَّ']
        },
        takallum: ['قَوِيْتُ', 'قَوِيْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَقْوَى', 'يَقْوَيَانِ', 'يَقْوَوْنَ'],
          muannats: ['تَقْوَى', 'تَقْوَيَانِ', 'يَقْوَيْنَ']
        },
        khitob: {
          mudzakkar: ['تَقْوَى', 'تَقْوَيَانِ', 'تَقْوَوْنَ'],
          muannats: ['تَقْوَيْنَ', 'تَقْوَيَانِ', 'تَقْوَيْنَ']
        },
        takallum: ['أَقْوَى', 'نَقْوَى']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِقْوَ', 'اِقْوَيَا', 'اِقْوَوْا'],
          muannats: ['اِقْوَيْ', 'اِقْوَيَا', 'اِقْوَيْنَ']
        }
      }
    }
  },
  {
    id: 'talaa',
    word: 'تَلاَ',
    type: 'mutal',
    subtype: 'naqish_wawi',
    meaning: 'membaca',
    meaning_en: 'to recite',
    frequency: 75,
    examples: [
      {
        arabic: 'تَلاَ الطَّالِبُ القُرْآنَ',
        translation: 'Siswa membaca Al-Quran'
      },
      {
        arabic: 'تَلَوْتُ آيَاتِ اللهِ',
        translation: 'Saya membaca ayat-ayat Allah'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['تَلاَ', 'تَلَوَا', 'تَلَوْا'],
          muannats: ['تَلَتْ', 'تَلَتَا', 'تَلَوْنَ']
        },
        khitob: {
          mudzakkar: ['تَلَوْتَ', 'تَلَوْتُمَا', 'تَلَوْتُمْ'],
          muannats: ['تَلَوْتِ', 'تَلَوْتُمَا', 'تَلَوْتُنَّ']
        },
        takallum: ['تَلَوْتُ', 'تَلَوْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَتْلُو', 'يَتْلُوَانِ', 'يَتْلُوْنَ'],
          muannats: ['تَتْلُو', 'تَتْلُوَانِ', 'يَتْلُوْنَ']
        },
        khitob: {
          mudzakkar: ['تَتْلُو', 'تَتْلُوَانِ', 'تَتْلُوْنَ'],
          muannats: ['تَتْلِيْنَ', 'تَتْلُوَانِ', 'تَتْلُوْنَ']
        },
        takallum: ['أَتْلُو', 'نَتْلُو']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُتْلُ', 'اُتْلُوَا', 'اُتْلُوْا'],
          muannats: ['اُتْلِي', 'اُتْلُوَا', 'اُتْلُوْنَ']
        }
      }
    }
  },
  {
    id: 'ramaa',
    word: 'رَمَى',
    type: 'mutal',
    subtype: 'naqish_yai',
    meaning: 'melempar',
    meaning_en: 'to throw',
    frequency: 70,
    examples: [
      {
        arabic: 'رَمَى الوَلَدُ الكُرَةَ',
        translation: 'Anak itu melempar bola'
      },
      {
        arabic: 'رَمَيْتُ الحَجَرَ',
        translation: 'Saya melempar batu'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['رَمَى', 'رَمَيَا', 'رَمَوْا'],
          muannats: ['رَمَتْ', 'رَمَتَا', 'رَمَيْنَ']
        },
        khitob: {
          mudzakkar: ['رَمَيْتَ', 'رَمَيْتُمَا', 'رَمَيْتُمْ'],
          muannats: ['رَمَيْتِ', 'رَمَيْتُمَا', 'رَمَيْتُنَّ']
        },
        takallum: ['رَمَيْتُ', 'رَمَيْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَرْمِي', 'يَرْمِيَانِ', 'يَرْمُوْنَ'],
          muannats: ['تَرْمِي', 'تَرْمِيَانِ', 'يَرْمِيْنَ']
        },
        khitob: {
          mudzakkar: ['تَرْمِي', 'تَرْمِيَانِ', 'تَرْمُوْنَ'],
          muannats: ['تَرْمِيْنَ', 'تَرْمِيَانِ', 'تَرْمِيْنَ']
        },
        takallum: ['أَرْمِي', 'نَرْمِي']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِرْمِ', 'اِرْمِيَا', 'اِرْمُوْا'],
          muannats: ['اِرْمِي', 'اِرْمِيَا', 'اِرْمِيْنَ']
        }
      }
    }
  }
]; 