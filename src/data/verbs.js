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
    type: 'mutal',
    subtype: 'mitsal_wawi',
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
  },
  {
    id: 'dakhala',
    word: 'دَخَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'masuk',
    meaning_en: 'to enter',
    frequency: 80,
    examples: [
      {
        arabic: 'دَخَلَ الطَّالِبُ الفَصْلَ',
        translation: 'Siswa masuk kelas'
      },
      {
        arabic: 'دَخَلْتُ المَسْجِدَ',
        translation: 'Saya masuk masjid'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['دَخَلَ', 'دَخَلاَ', 'دَخَلُوْا'],
          muannats: ['دَخَلَتْ', 'دَخَلَتَا', 'دَخَلْنَ']
        },
        khitob: {
          mudzakkar: ['دَخَلْتَ', 'دَخَلْتُمَا', 'دَخَلْتُمْ'],
          muannats: ['دَخَلْتِ', 'دَخَلْتُمَا', 'دَخَلْتُنَّ']
        },
        takallum: ['دَخَلْتُ', 'دَخَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَدْخُلُ', 'يَدْخُلاَنِ', 'يَدْخُلُوْنَ'],
          muannats: ['تَدْخُلُ', 'تَدْخُلاَنِ', 'يَدْخُلْنَ']
        },
        khitob: {
          mudzakkar: ['تَدْخُلُ', 'تَدْخُلاَنِ', 'تَدْخُلُوْنَ'],
          muannats: ['تَدْخُلِيْنَ', 'تَدْخُلاَنِ', 'تَدْخُلْنَ']
        },
        takallum: ['أَدْخُلُ', 'نَدْخُلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُدْخُلْ', 'اُدْخُلاَ', 'اُدْخُلُوْا'],
          muannats: ['اُدْخُلِي', 'اُدْخُلاَ', 'اُدْخُلْنَ']
        }
      }
    }
  },
  {
    id: 'dharaba',
    word: 'ضَرَبَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'memukul',
    meaning_en: 'to hit',
    frequency: 75,
    examples: [
      {
        arabic: 'ضَرَبَ اللهُ مَثَلاً',
        translation: 'Allah membuat perumpamaan'
      },
      {
        arabic: 'ضَرَبَ الوَلَدُ الكُرَةَ',
        translation: 'Anak itu memukul bola'
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
    id: 'kharaja',
    word: 'خَرَجَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'keluar',
    meaning_en: 'to exit',
    frequency: 80,
    examples: [
      {
        arabic: 'خَرَجَ الطَّالِبُ مِنَ المَدْرَسَةِ',
        translation: 'Siswa keluar dari sekolah'
      },
      {
        arabic: 'خَرَجْتُ مِنَ البَيْتِ',
        translation: 'Saya keluar dari rumah'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['خَرَجَ', 'خَرَجَا', 'خَرَجُوْا'],
          muannats: ['خَرَجَتْ', 'خَرَجَتَا', 'خَرَجْنَ']
        },
        khitob: {
          mudzakkar: ['خَرَجْتَ', 'خَرَجْتُمَا', 'خَرَجْتُمْ'],
          muannats: ['خَرَجْتِ', 'خَرَجْتُمَا', 'خَرَجْتُنَّ']
        },
        takallum: ['خَرَجْتُ', 'خَرَجْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَخْرُجُ', 'يَخْرُجَانِ', 'يَخْرُجُوْنَ'],
          muannats: ['تَخْرُجُ', 'تَخْرُجَانِ', 'يَخْرُجْنَ']
        },
        khitob: {
          mudzakkar: ['تَخْرُجُ', 'تَخْرُجَانِ', 'تَخْرُجُوْنَ'],
          muannats: ['تَخْرُجِيْنَ', 'تَخْرُجَانِ', 'تَخْرُجْنَ']
        },
        takallum: ['أَخْرُجُ', 'نَخْرُجُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُخْرُجْ', 'اُخْرُجَا', 'اُخْرُجُوْا'],
          muannats: ['اُخْرُجِي', 'اُخْرُجَا', 'اُخْرُجْنَ']
        }
      }
    }
  },
  {
    id: 'sajada',
    word: 'سَجَدَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'sujud',
    meaning_en: 'to prostrate',
    frequency: 75,
    examples: [
      {
        arabic: 'سَجَدَ المُسْلِمُ لِلهِ',
        translation: 'Muslim itu sujud kepada Allah'
      },
      {
        arabic: 'سَجَدْنَا فِي الصَّلاَةِ',
        translation: 'Kami sujud dalam shalat'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['سَجَدَ', 'سَجَدَا', 'سَجَدُوْا'],
          muannats: ['سَجَدَتْ', 'سَجَدَتَا', 'سَجَدْنَ']
        },
        khitob: {
          mudzakkar: ['سَجَدْتَ', 'سَجَدْتُمَا', 'سَجَدْتُمْ'],
          muannats: ['سَجَدْتِ', 'سَجَدْتُمَا', 'سَجَدْتُنَّ']
        },
        takallum: ['سَجَدْتُ', 'سَجَدْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَسْجُدُ', 'يَسْجُدَانِ', 'يَسْجُدُوْنَ'],
          muannats: ['تَسْجُدُ', 'تَسْجُدَانِ', 'يَسْجُدْنَ']
        },
        khitob: {
          mudzakkar: ['تَسْجُدُ', 'تَسْجُدَانِ', 'تَسْجُدُوْنَ'],
          muannats: ['تَسْجُدِيْنَ', 'تَسْجُدَانِ', 'تَسْجُدْنَ']
        },
        takallum: ['أَسْجُدُ', 'نَسْجُدُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُسْجُدْ', 'اُسْجُدَا', 'اُسْجُدُوْا'],
          muannats: ['اُسْجُدِي', 'اُسْجُدَا', 'اُسْجُدْنَ']
        }
      }
    }
  },
  {
    id: 'adhina',
    word: 'أَذِنَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'mengizinkan',
    meaning_en: 'to permit',
    frequency: 70,
    examples: [
      {
        arabic: 'أَذِنَ المُدَرِّسُ لِلطَّالِبِ',
        translation: 'Guru mengizinkan siswa'
      },
      {
        arabic: 'أَذِنَ اللهُ لَنَا',
        translation: 'Allah mengizinkan kita'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['أَذِنَ', 'أَذِنَا', 'أَذِنُوْا'],
          muannats: ['أَذِنَتْ', 'أَذِنَتَا', 'أَذِنَّ']
        },
        khitob: {
          mudzakkar: ['أَذِنْتَ', 'أَذِنْتُمَا', 'أَذِنْتُمْ'],
          muannats: ['أَذِنْتِ', 'أَذِنْتُمَا', 'أَذِنْتُنَّ']
        },
        takallum: ['أَذِنْتُ', 'أَذِنَّا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَأْذَنُ', 'يَأْذَنَانِ', 'يَأْذَنُوْنَ'],
          muannats: ['تَأْذَنُ', 'تَأْذَنَانِ', 'يَأْذَنَّ']
        },
        khitob: {
          mudzakkar: ['تَأْذَنُ', 'تَأْذَنَانِ', 'تَأْذَنُوْنَ'],
          muannats: ['تَأْذَنِيْنَ', 'تَأْذَنَانِ', 'تَأْذَنَّ']
        },
        takallum: ['آذَنُ', 'نَأْذَنُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِئْذَنْ', 'اِئْذَنَا', 'اِئْذَنُوْا'],
          muannats: ['اِئْذَنِي', 'اِئْذَنَا', 'اِئْذَنَّ']
        }
      }
    }
  },
  {
    id: 'dhahika',
    word: 'ضَحِكَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'tertawa',
    meaning_en: 'to laugh',
    frequency: 70,
    examples: [
      {
        arabic: 'ضَحِكَ الطِّفْلُ كَثِيْرًا',
        translation: 'Anak itu tertawa banyak'
      },
      {
        arabic: 'لِمَاذَا تَضْحَكُ؟',
        translation: 'Kenapa kamu tertawa?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['ضَحِكَ', 'ضَحِكَا', 'ضَحِكُوْا'],
          muannats: ['ضَحِكَتْ', 'ضَحِكَتَا', 'ضَحِكْنَ']
        },
        khitob: {
          mudzakkar: ['ضَحِكْتَ', 'ضَحِكْتُمَا', 'ضَحِكْتُمْ'],
          muannats: ['ضَحِكْتِ', 'ضَحِكْتُمَا', 'ضَحِكْتُنَّ']
        },
        takallum: ['ضَحِكْتُ', 'ضَحِكْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَضْحَكُ', 'يَضْحَكَانِ', 'يَضْحَكُوْنَ'],
          muannats: ['تَضْحَكُ', 'تَضْحَكَانِ', 'يَضْحَكْنَ']
        },
        khitob: {
          mudzakkar: ['تَضْحَكُ', 'تَضْحَكَانِ', 'تَضْحَكُوْنَ'],
          muannats: ['تَضْحَكِيْنَ', 'تَضْحَكَانِ', 'تَضْحَكْنَ']
        },
        takallum: ['أَضْحَكُ', 'نَضْحَكُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِضْحَكْ', 'اِضْحَكَا', 'اِضْحَكُوْا'],
          muannats: ['اِضْحَكِي', 'اِضْحَكَا', 'اِضْحَكْنَ']
        }
      }
    }
  },
  {
    id: 'saada',
    word: 'سَاعَدَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'membantu',
    meaning_en: 'to help',
    frequency: 75,
    examples: [
      {
        arabic: 'سَاعَدَ الرَّجُلُ جَارَهُ',
        translation: 'Pria itu membantu tetangganya'
      },
      {
        arabic: 'كَيْفَ أُسَاعِدُكَ؟',
        translation: 'Bagaimana saya bisa membantumu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['سَاعَدَ', 'سَاعَدَا', 'سَاعَدُوْا'],
          muannats: ['سَاعَدَتْ', 'سَاعَدَتَا', 'سَاعَدْنَ']
        },
        khitob: {
          mudzakkar: ['سَاعَدْتَ', 'سَاعَدْتُمَا', 'سَاعَدْتُمْ'],
          muannats: ['سَاعَدْتِ', 'سَاعَدْتُمَا', 'سَاعَدْتُنَّ']
        },
        takallum: ['سَاعَدْتُ', 'سَاعَدْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يُسَاعِدُ', 'يُسَاعِدَانِ', 'يُسَاعِدُوْنَ'],
          muannats: ['تُسَاعِدُ', 'تُسَاعِدَانِ', 'يُسَاعِدْنَ']
        },
        khitob: {
          mudzakkar: ['تُسَاعِدُ', 'تُسَاعِدَانِ', 'تُسَاعِدُوْنَ'],
          muannats: ['تُسَاعِدِيْنَ', 'تُسَاعِدَانِ', 'تُسَاعِدْنَ']
        },
        takallum: ['أُسَاعِدُ', 'نُسَاعِدُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['سَاعِدْ', 'سَاعِدَا', 'سَاعِدُوْا'],
          muannats: ['سَاعِدِي', 'سَاعِدَا', 'سَاعِدْنَ']
        }
      }
    }
  },
  {
    id: 'shaara',
    word: 'شَعَرَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'merasa',
    meaning_en: 'to feel',
    frequency: 80,
    examples: [
      {
        arabic: 'شَعَرَ بِالأَلَمِ',
        translation: 'Dia merasa sakit'
      },
      {
        arabic: 'بِمَاذَا تَشْعُرُ؟',
        translation: 'Apa yang kamu rasakan?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['شَعَرَ', 'شَعَرَا', 'شَعَرُوْا'],
          muannats: ['شَعَرَتْ', 'شَعَرَتَا', 'شَعَرْنَ']
        },
        khitob: {
          mudzakkar: ['شَعَرْتَ', 'شَعَرْتُمَا', 'شَعَرْتُمْ'],
          muannats: ['شَعَرْتِ', 'شَعَرْتُمَا', 'شَعَرْتُنَّ']
        },
        takallum: ['شَعَرْتُ', 'شَعَرْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَشْعُرُ', 'يَشْعُرَانِ', 'يَشْعُرُوْنَ'],
          muannats: ['تَشْعُرُ', 'تَشْعُرَانِ', 'يَشْعُرْنَ']
        },
        khitob: {
          mudzakkar: ['تَشْعُرُ', 'تَشْعُرَانِ', 'تَشْعُرُوْنَ'],
          muannats: ['تَشْعُرِيْنَ', 'تَشْعُرَانِ', 'تَشْعُرْنَ']
        },
        takallum: ['أَشْعُرُ', 'نَشْعُرُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُشْعُرْ', 'اُشْعُرَا', 'اُشْعُرُوْا'],
          muannats: ['اُشْعُرِي', 'اُشْعُرَا', 'اُشْعُرْنَ']
        }
      }
    }
  },
  {
    id: 'washala',
    word: 'وَصَلَ',
    type: 'mutal',
    subtype: 'mitsal_wawi',
    meaning: 'sampai',
    meaning_en: 'to arrive',
    frequency: 75,
    examples: [
      {
        arabic: 'وَصَلَ المُسَافِرُ إِلَى المَطَارِ',
        translation: 'Musafir itu sampai di bandara'
      },
      {
        arabic: 'مَتَى تَصِلُ إِلَى البَيْتِ؟',
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
    id: 'intaha',
    word: 'اِنْتَهَى',
    type: 'mutal',
    subtype: 'naqish_yai',
    meaning: 'selesai',
    meaning_en: 'to finish',
    frequency: 75,
    examples: [
      {
        arabic: 'اِنْتَهَى الدَّرْسُ',
        translation: 'Pelajaran telah selesai'
      },
      {
        arabic: 'مَتَى يَنْتَهِي العَمَلُ؟',
        translation: 'Kapan pekerjaan selesai?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['اِنْتَهَى', 'اِنْتَهَيَا', 'اِنْتَهَوْا'],
          muannats: ['اِنْتَهَتْ', 'اِنْتَهَتَا', 'اِنْتَهَيْنَ']
        },
        khitob: {
          mudzakkar: ['اِنْتَهَيْتَ', 'اِنْتَهَيْتُمَا', 'اِنْتَهَيْتُمْ'],
          muannats: ['اِنْتَهَيْتِ', 'اِنْتَهَيْتُمَا', 'اِنْتَهَيْتُنَّ']
        },
        takallum: ['اِنْتَهَيْتُ', 'اِنْتَهَيْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَنْتَهِي', 'يَنْتَهِيَانِ', 'يَنْتَهُوْنَ'],
          muannats: ['تَنْتَهِي', 'تَنْتَهِيَانِ', 'يَنْتَهِيْنَ']
        },
        khitob: {
          mudzakkar: ['تَنْتَهِي', 'تَنْتَهِيَانِ', 'تَنْتَهُوْنَ'],
          muannats: ['تَنْتَهِيْنَ', 'تَنْتَهِيَانِ', 'تَنْتَهِيْنَ']
        },
        takallum: ['أَنْتَهِي', 'نَنْتَهِي']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِنْتَهِ', 'اِنْتَهِيَا', 'اِنْتَهُوْا'],
          muannats: ['اِنْتَهِي', 'اِنْتَهِيَا', 'اِنْتَهِيْنَ']
        }
      }
    }
  },
  {
    id: 'hawala',
    word: 'حَاوَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'mencoba',
    meaning_en: 'to try',
    frequency: 75,
    examples: [
      {
        arabic: 'حَاوَلَ الطَّالِبُ حَلَّ المَسْأَلَةِ',
        translation: 'Siswa mencoba memecahkan masalah'
      },
      {
        arabic: 'أُحَاوِلُ أَنْ أَتَعَلَّمَ اللُّغَةَ العَرَبِيَّةَ',
        translation: 'Saya mencoba belajar bahasa Arab'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['حَاوَلَ', 'حَاوَلاَ', 'حَاوَلُوْا'],
          muannats: ['حَاوَلَتْ', 'حَاوَلَتَا', 'حَاوَلْنَ']
        },
        khitob: {
          mudzakkar: ['حَاوَلْتَ', 'حَاوَلْتُمَا', 'حَاوَلْتُمْ'],
          muannats: ['حَاوَلْتِ', 'حَاوَلْتُمَا', 'حَاوَلْتُنَّ']
        },
        takallum: ['حَاوَلْتُ', 'حَاوَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يُحَاوِلُ', 'يُحَاوِلاَنِ', 'يُحَاوِلُوْنَ'],
          muannats: ['تُحَاوِلُ', 'تُحَاوِلاَنِ', 'يُحَاوِلْنَ']
        },
        khitob: {
          mudzakkar: ['تُحَاوِلُ', 'تُحَاوِلاَنِ', 'تُحَاوِلُوْنَ'],
          muannats: ['تُحَاوِلِيْنَ', 'تُحَاوِلاَنِ', 'تُحَاوِلْنَ']
        },
        takallum: ['أُحَاوِلُ', 'نُحَاوِلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['حَاوِلْ', 'حَاوِلاَ', 'حَاوِلُوْا'],
          muannats: ['حَاوِلِي', 'حَاوِلاَ', 'حَاوِلْنَ']
        }
      }
    }
  },
  {
    id: 'wajada',
    word: 'وَجَدَ',
    type: 'mutal',
    subtype: 'mitsal_wawi',
    meaning: 'menemukan',
    meaning_en: 'to find',
    frequency: 85,
    examples: [
      {
        arabic: 'وَجَدَ الطَّالِبُ كِتَابَهُ',
        translation: 'Siswa menemukan bukunya'
      },
      {
        arabic: 'أَيْنَ وَجَدْتَ المِفْتَاحَ؟',
        translation: 'Di mana kamu menemukan kunci itu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['وَجَدَ', 'وَجَدَا', 'وَجَدُوْا'],
          muannats: ['وَجَدَتْ', 'وَجَدَتَا', 'وَجَدْنَ']
        },
        khitob: {
          mudzakkar: ['وَجَدْتَ', 'وَجَدْتُمَا', 'وَجَدْتُمْ'],
          muannats: ['وَجَدْتِ', 'وَجَدْتُمَا', 'وَجَدْتُنَّ']
        },
        takallum: ['وَجَدْتُ', 'وَجَدْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَجِدُ', 'يَجِدَانِ', 'يَجِدُوْنَ'],
          muannats: ['تَجِدُ', 'تَجِدَانِ', 'يَجِدْنَ']
        },
        khitob: {
          mudzakkar: ['تَجِدُ', 'تَجِدَانِ', 'تَجِدُوْنَ'],
          muannats: ['تَجِدِيْنَ', 'تَجِدَانِ', 'تَجِدْنَ']
        },
        takallum: ['أَجِدُ', 'نَجِدُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['جِدْ', 'جِدَا', 'جِدُوْا'],
          muannats: ['جِدِي', 'جِدَا', 'جِدْنَ']
        }
      }
    }
  },
  {
    id: 'bahatha',
    word: 'بَحَثَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'mencari',
    meaning_en: 'to search',
    frequency: 80,
    examples: [
      {
        arabic: 'بَحَثَ الطَّالِبُ عَنِ المَعْلُوْمَاتِ',
        translation: 'Siswa mencari informasi'
      },
      {
        arabic: 'عَمَّ تَبْحَثُ؟',
        translation: 'Apa yang kamu cari?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['بَحَثَ', 'بَحَثَا', 'بَحَثُوْا'],
          muannats: ['بَحَثَتْ', 'بَحَثَتَا', 'بَحَثْنَ']
        },
        khitob: {
          mudzakkar: ['بَحَثْتَ', 'بَحَثْتُمَا', 'بَحَثْتُمْ'],
          muannats: ['بَحَثْتِ', 'بَحَثْتُمَا', 'بَحَثْتُنَّ']
        },
        takallum: ['بَحَثْتُ', 'بَحَثْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَبْحَثُ', 'يَبْحَثَانِ', 'يَبْحَثُوْنَ'],
          muannats: ['تَبْحَثُ', 'تَبْحَثَانِ', 'يَبْحَثْنَ']
        },
        khitob: {
          mudzakkar: ['تَبْحَثُ', 'تَبْحَثَانِ', 'تَبْحَثُوْنَ'],
          muannats: ['تَبْحَثِيْنَ', 'تَبْحَثَانِ', 'تَبْحَثْنَ']
        },
        takallum: ['أَبْحَثُ', 'نَبْحَثُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِبْحَثْ', 'اِبْحَثَا', 'اِبْحَثُوْا'],
          muannats: ['اِبْحَثِي', 'اِبْحَثَا', 'اِبْحَثْنَ']
        }
      }
    }
  },
  {
    id: 'naqala',
    word: 'نَقَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'memindahkan',
    meaning_en: 'to move, to transfer',
    frequency: 75,
    examples: [
      {
        arabic: 'نَقَلَ الرَّجُلُ الأَثَاثَ إِلَى البَيْتِ الجَدِيْدِ',
        translation: 'Pria itu memindahkan perabotan ke rumah baru'
      },
      {
        arabic: 'نَقَلْتُ الكِتَابَ مِنَ المَكْتَبِ',
        translation: 'Saya memindahkan buku dari meja'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['نَقَلَ', 'نَقَلاَ', 'نَقَلُوْا'],
          muannats: ['نَقَلَتْ', 'نَقَلَتَا', 'نَقَلْنَ']
        },
        khitob: {
          mudzakkar: ['نَقَلْتَ', 'نَقَلْتُمَا', 'نَقَلْتُمْ'],
          muannats: ['نَقَلْتِ', 'نَقَلْتُمَا', 'نَقَلْتُنَّ']
        },
        takallum: ['نَقَلْتُ', 'نَقَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَنْقُلُ', 'يَنْقُلاَنِ', 'يَنْقُلُوْنَ'],
          muannats: ['تَنْقُلُ', 'تَنْقُلاَنِ', 'يَنْقُلْنَ']
        },
        khitob: {
          mudzakkar: ['تَنْقُلُ', 'تَنْقُلاَنِ', 'تَنْقُلُوْنَ'],
          muannats: ['تَنْقُلِيْنَ', 'تَنْقُلاَنِ', 'تَنْقُلْنَ']
        },
        takallum: ['أَنْقُلُ', 'نَنْقُلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُنْقُلْ', 'اُنْقُلاَ', 'اُنْقُلُوْا'],
          muannats: ['اُنْقُلِي', 'اُنْقُلاَ', 'اُنْقُلْنَ']
        }
      }
    }
  },
  {
    id: 'athaa',
    word: 'أَعْطَى',
    type: 'mutal',
    subtype: 'naqish_yai',
    meaning: 'memberi',
    meaning_en: 'to give',
    frequency: 85,
    examples: [
      {
        arabic: 'أَعْطَى المُدَرِّسُ الكِتَابَ لِلطَّالِبِ',
        translation: 'Guru memberikan buku kepada siswa'
      },
      {
        arabic: 'مَاذَا أَعْطَيْتَ لَهُ؟',
        translation: 'Apa yang kamu berikan kepadanya?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['أَعْطَى', 'أَعْطَيَا', 'أَعْطَوْا'],
          muannats: ['أَعْطَتْ', 'أَعْطَتَا', 'أَعْطَيْنَ']
        },
        khitob: {
          mudzakkar: ['أَعْطَيْتَ', 'أَعْطَيْتُمَا', 'أَعْطَيْتُمْ'],
          muannats: ['أَعْطَيْتِ', 'أَعْطَيْتُمَا', 'أَعْطَيْتُنَّ']
        },
        takallum: ['أَعْطَيْتُ', 'أَعْطَيْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يُعْطِي', 'يُعْطِيَانِ', 'يُعْطُوْنَ'],
          muannats: ['تُعْطِي', 'تُعْطِيَانِ', 'يُعْطِيْنَ']
        },
        khitob: {
          mudzakkar: ['تُعْطِي', 'تُعْطِيَانِ', 'تُعْطُوْنَ'],
          muannats: ['تُعْطِيْنَ', 'تُعْطِيَانِ', 'تُعْطِيْنَ']
        },
        takallum: ['أُعْطِي', 'نُعْطِي']
      },
      amr: {
        khitob: {
          mudzakkar: ['أَعْطِ', 'أَعْطِيَا', 'أَعْطُوْا'],
          muannats: ['أَعْطِي', 'أَعْطِيَا', 'أَعْطِيْنَ']
        }
      }
    }
  },
  {
    id: 'akhadha',
    word: 'أَخَذَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'mengambil',
    meaning_en: 'to take',
    frequency: 85,
    examples: [
      {
        arabic: 'أَخَذَ الطَّالِبُ الكِتَابَ مِنَ المَكْتَبَةِ',
        translation: 'Siswa mengambil buku dari perpustakaan'
      },
      {
        arabic: 'مَاذَا أَخَذْتَ مِنَ السُّوْقِ؟',
        translation: 'Apa yang kamu ambil dari pasar?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['أَخَذَ', 'أَخَذَا', 'أَخَذُوْا'],
          muannats: ['أَخَذَتْ', 'أَخَذَتَا', 'أَخَذْنَ']
        },
        khitob: {
          mudzakkar: ['أَخَذْتَ', 'أَخَذْتُمَا', 'أَخَذْتُمْ'],
          muannats: ['أَخَذْتِ', 'أَخَذْتُمَا', 'أَخَذْتُنَّ']
        },
        takallum: ['أَخَذْتُ', 'أَخَذْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَأْخُذُ', 'يَأْخُذَانِ', 'يَأْخُذُوْنَ'],
          muannats: ['تَأْخُذُ', 'تَأْخُذَانِ', 'يَأْخُذْنَ']
        },
        khitob: {
          mudzakkar: ['تَأْخُذُ', 'تَأْخُذَانِ', 'تَأْخُذُوْنَ'],
          muannats: ['تَأْخُذِيْنَ', 'تَأْخُذَانِ', 'تَأْخُذْنَ']
        },
        takallum: ['آخُذُ', 'نَأْخُذُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['خُذْ', 'خُذَا', 'خُذُوْا'],
          muannats: ['خُذِي', 'خُذَا', 'خُذْنَ']
        }
      }
    }
  },
  {
    id: 'istakhdama',
    word: 'اِسْتَخْدَمَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'menggunakan',
    meaning_en: 'to use',
    frequency: 85,
    examples: [
      {
        arabic: 'اِسْتَخْدَمَ الطَّالِبُ القَلَمَ',
        translation: 'Siswa menggunakan pena'
      },
      {
        arabic: 'كَيْفَ تَسْتَخْدِمُ هَذَا البَرْنَامَجَ؟',
        translation: 'Bagaimana kamu menggunakan program ini?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['اِسْتَخْدَمَ', 'اِسْتَخْدَمَا', 'اِسْتَخْدَمُوْا'],
          muannats: ['اِسْتَخْدَمَتْ', 'اِسْتَخْدَمَتَا', 'اِسْتَخْدَمْنَ']
        },
        khitob: {
          mudzakkar: ['اِسْتَخْدَمْتَ', 'اِسْتَخْدَمْتُمَا', 'اِسْتَخْدَمْتُمْ'],
          muannats: ['اِسْتَخْدَمْتِ', 'اِسْتَخْدَمْتُمَا', 'اِسْتَخْدَمْتُنَّ']
        },
        takallum: ['اِسْتَخْدَمْتُ', 'اِسْتَخْدَمْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَسْتَخْدِمُ', 'يَسْتَخْدِمَانِ', 'يَسْتَخْدِمُوْنَ'],
          muannats: ['تَسْتَخْدِمُ', 'تَسْتَخْدِمَانِ', 'يَسْتَخْدِمْنَ']
        },
        khitob: {
          mudzakkar: ['تَسْتَخْدِمُ', 'تَسْتَخْدِمَانِ', 'تَسْتَخْدِمُوْنَ'],
          muannats: ['تَسْتَخْدِمِيْنَ', 'تَسْتَخْدِمَانِ', 'تَسْتَخْدِمْنَ']
        },
        takallum: ['أَسْتَخْدِمُ', 'نَسْتَخْدِمُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِسْتَخْدِمْ', 'اِسْتَخْدِمَا', 'اِسْتَخْدِمُوْا'],
          muannats: ['اِسْتَخْدِمِي', 'اِسْتَخْدِمَا', 'اِسْتَخْدِمْنَ']
        }
      }
    }
  },
  {
    id: 'ghayyara',
    word: 'غَيَّرَ',
    type: 'sahih',
    subtype: 'mudoaf',
    meaning: 'mengubah',
    meaning_en: 'to change',
    frequency: 80,
    examples: [
      {
        arabic: 'غَيَّرَ الرَّجُلُ مَلاَبِسَهُ',
        translation: 'Pria itu mengganti pakaiannya'
      },
      {
        arabic: 'لِمَاذَا غَيَّرْتَ رَأْيَكَ؟',
        translation: 'Kenapa kamu mengubah pendapatmu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['غَيَّرَ', 'غَيَّرَا', 'غَيَّرُوْا'],
          muannats: ['غَيَّرَتْ', 'غَيَّرَتَا', 'غَيَّرْنَ']
        },
        khitob: {
          mudzakkar: ['غَيَّرْتَ', 'غَيَّرْتُمَا', 'غَيَّرْتُمْ'],
          muannats: ['غَيَّرْتِ', 'غَيَّرْتُمَا', 'غَيَّرْتُنَّ']
        },
        takallum: ['غَيَّرْتُ', 'غَيَّرْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يُغَيِّرُ', 'يُغَيِّرَانِ', 'يُغَيِّرُوْنَ'],
          muannats: ['تُغَيِّرُ', 'تُغَيِّرَانِ', 'يُغَيِّرْنَ']
        },
        khitob: {
          mudzakkar: ['تُغَيِّرُ', 'تُغَيِّرَانِ', 'تُغَيِّرُوْنَ'],
          muannats: ['تُغَيِّرِيْنَ', 'تُغَيِّرَانِ', 'تُغَيِّرْنَ']
        },
        takallum: ['أُغَيِّرُ', 'نُغَيِّرُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['غَيِّرْ', 'غَيِّرَا', 'غَيِّرُوْا'],
          muannats: ['غَيِّرِي', 'غَيِّرَا', 'غَيِّرْنَ']
        }
      }
    }
  },
  {
    id: 'talaba',
    word: 'طَلَبَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'meminta',
    meaning_en: 'to request',
    frequency: 85,
    examples: [
      {
        arabic: 'طَلَبَ الطَّالِبُ المُسَاعَدَةَ',
        translation: 'Siswa meminta bantuan'
      },
      {
        arabic: 'مَاذَا طَلَبْتَ مِنْهُ؟',
        translation: 'Apa yang kamu minta darinya?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['طَلَبَ', 'طَلَبَا', 'طَلَبُوْا'],
          muannats: ['طَلَبَتْ', 'طَلَبَتَا', 'طَلَبْنَ']
        },
        khitob: {
          mudzakkar: ['طَلَبْتَ', 'طَلَبْتُمَا', 'طَلَبْتُمْ'],
          muannats: ['طَلَبْتِ', 'طَلَبْتُمَا', 'طَلَبْتُنَّ']
        },
        takallum: ['طَلَبْتُ', 'طَلَبْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَطْلُبُ', 'يَطْلُبَانِ', 'يَطْلُبُوْنَ'],
          muannats: ['تَطْلُبُ', 'تَطْلُبَانِ', 'يَطْلُبْنَ']
        },
        khitob: {
          mudzakkar: ['تَطْلُبُ', 'تَطْلُبَانِ', 'تَطْلُبُوْنَ'],
          muannats: ['تَطْلُبِيْنَ', 'تَطْلُبَانِ', 'تَطْلُبْنَ']
        },
        takallum: ['أَطْلُبُ', 'نَطْلُبُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُطْلُبْ', 'اُطْلُبَا', 'اُطْلُبُوْا'],
          muannats: ['اُطْلُبِي', 'اُطْلُبَا', 'اُطْلُبْنَ']
        }
      }
    }
  },
  {
    id: 'qaabala',
    word: 'قَابَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'bertemu',
    meaning_en: 'to meet',
    frequency: 80,
    examples: [
      {
        arabic: 'قَابَلَ الطَّالِبُ المُدَرِّسَ',
        translation: 'Siswa bertemu dengan guru'
      },
      {
        arabic: 'مَتَى قَابَلْتَ صَدِيْقَكَ؟',
        translation: 'Kapan kamu bertemu temanmu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['قَابَلَ', 'قَابَلاَ', 'قَابَلُوْا'],
          muannats: ['قَابَلَتْ', 'قَابَلَتَا', 'قَابَلْنَ']
        },
        khitob: {
          mudzakkar: ['قَابَلْتَ', 'قَابَلْتُمَا', 'قَابَلْتُمْ'],
          muannats: ['قَابَلْتِ', 'قَابَلْتُمَا', 'قَابَلْتُنَّ']
        },
        takallum: ['قَابَلْتُ', 'قَابَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يُقَابِلُ', 'يُقَابِلاَنِ', 'يُقَابِلُوْنَ'],
          muannats: ['تُقَابِلُ', 'تُقَابِلاَنِ', 'يُقَابِلْنَ']
        },
        khitob: {
          mudzakkar: ['تُقَابِلُ', 'تُقَابِلاَنِ', 'تُقَابِلُوْنَ'],
          muannats: ['تُقَابِلِيْنَ', 'تُقَابِلاَنِ', 'تُقَابِلْنَ']
        },
        takallum: ['أُقَابِلُ', 'نُقَابِلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['قَابِلْ', 'قَابِلاَ', 'قَابِلُوْا'],
          muannats: ['قَابِلِي', 'قَابِلاَ', 'قَابِلْنَ']
        }
      }
    }
  },
  {
    id: 'ittasala',
    word: 'اِتَّصَلَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'menghubungi',
    meaning_en: 'to contact',
    frequency: 80,
    examples: [
      {
        arabic: 'اِتَّصَلَ الرَّجُلُ بِصَدِيْقِهِ',
        translation: 'Pria itu menghubungi temannya'
      },
      {
        arabic: 'لِمَاذَا لَمْ تَتَّصِلْ بِي؟',
        translation: 'Kenapa kamu tidak menghubungiku?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['اِتَّصَلَ', 'اِتَّصَلاَ', 'اِتَّصَلُوْا'],
          muannats: ['اِتَّصَلَتْ', 'اِتَّصَلَتَا', 'اِتَّصَلْنَ']
        },
        khitob: {
          mudzakkar: ['اِتَّصَلْتَ', 'اِتَّصَلْتُمَا', 'اِتَّصَلْتُمْ'],
          muannats: ['اِتَّصَلْتِ', 'اِتَّصَلْتُمَا', 'اِتَّصَلْتُنَّ']
        },
        takallum: ['اِتَّصَلْتُ', 'اِتَّصَلْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَتَّصِلُ', 'يَتَّصِلاَنِ', 'يَتَّصِلُوْنَ'],
          muannats: ['تَتَّصِلُ', 'تَتَّصِلاَنِ', 'يَتَّصِلْنَ']
        },
        khitob: {
          mudzakkar: ['تَتَّصِلُ', 'تَتَّصِلاَنِ', 'تَتَّصِلُوْنَ'],
          muannats: ['تَتَّصِلِيْنَ', 'تَتَّصِلاَنِ', 'تَتَّصِلْنَ']
        },
        takallum: ['أَتَّصِلُ', 'نَتَّصِلُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِتَّصِلْ', 'اِتَّصِلاَ', 'اِتَّصِلُوْا'],
          muannats: ['اِتَّصِلِي', 'اِتَّصِلاَ', 'اِتَّصِلْنَ']
        }
      }
    }
  },
  {
    id: 'rakiba',
    word: 'رَكِبَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'menaiki',
    meaning_en: 'to ride',
    frequency: 75,
    examples: [
      {
        arabic: 'رَكِبَ الطَّالِبُ الحَافِلَةَ',
        translation: 'Siswa menaiki bus'
      },
      {
        arabic: 'رَكِبْتُ السَّيَّارَةَ',
        translation: 'Saya menaiki mobil'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['رَكِبَ', 'رَكِبَا', 'رَكِبُوْا'],
          muannats: ['رَكِبَتْ', 'رَكِبَتَا', 'رَكِبْنَ']
        },
        khitob: {
          mudzakkar: ['رَكِبْتَ', 'رَكِبْتُمَا', 'رَكِبْتُمْ'],
          muannats: ['رَكِبْتِ', 'رَكِبْتُمَا', 'رَكِبْتُنَّ']
        },
        takallum: ['رَكِبْتُ', 'رَكِبْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَرْكَبُ', 'يَرْكَبَانِ', 'يَرْكَبُوْنَ'],
          muannats: ['تَرْكَبُ', 'تَرْكَبَانِ', 'يَرْكَبْنَ']
        },
        khitob: {
          mudzakkar: ['تَرْكَبُ', 'تَرْكَبَانِ', 'تَرْكَبُوْنَ'],
          muannats: ['تَرْكَبِيْنَ', 'تَرْكَبَانِ', 'تَرْكَبْنَ']
        },
        takallum: ['أَرْكَبُ', 'نَرْكَبُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِرْكَبْ', 'اِرْكَبَا', 'اِرْكَبُوْا'],
          muannats: ['اِرْكَبِي', 'اِرْكَبَا', 'اِرْكَبْنَ']
        }
      }
    }
  },
  {
    id: 'nazhzhafa',
    word: 'نَظَّفَ',
    type: 'sahih',
    subtype: 'mudoaf',
    meaning: 'membersihkan',
    meaning_en: 'to clean',
    frequency: 75,
    examples: [
      {
        arabic: 'نَظَّفَ الْعَامِلُ الْمَكْتَبَ',
        translation: 'Pekerja membersihkan kantor'
      },
      {
        arabic: 'نَظَّفْتُ غُرْفَتِي',
        translation: 'Saya membersihkan kamar saya'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['نَظَّفَ', 'نَظَّفَا', 'نَظَّفُوْا'],
          muannats: ['نَظَّفَتْ', 'نَظَّفَتَا', 'نَظَّفْنَ']
        },
        khitob: {
          mudzakkar: ['نَظَّفْتَ', 'نَظَّفْتُمَا', 'نَظَّفْتُمْ'],
          muannats: ['نَظَّفْتِ', 'نَظَّفْتُمَا', 'نَظَّفْتُنَّ']
        },
        takallum: ['نَظَّفْتُ', 'نَظَّفْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يُنَظِّفُ', 'يُنَظِّفَانِ', 'يُنَظِّفُوْنَ'],
          muannats: ['تُنَظِّفُ', 'تُنَظِّفَانِ', 'يُنَظِّفْنَ']
        },
        khitob: {
          mudzakkar: ['تُنَظِّفُ', 'تُنَظِّفَانِ', 'تُنَظِّفُوْنَ'],
          muannats: ['تُنَظِّفِيْنَ', 'تُنَظِّفَانِ', 'تُنَظِّفْنَ']
        },
        takallum: ['أُنَظِّفُ', 'نُنَظِّفُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['نَظِّفْ', 'نَظِّفَا', 'نَظِّفُوْا'],
          muannats: ['نَظِّفِي', 'نَظِّفَا', 'نَظِّفْنَ']
        }
      }
    }
  },
  {
    id: 'istathaa',
    word: 'اِسْتَطَاعَ',
    type: 'mutal',
    subtype: 'ajwaf_wawi',
    meaning: 'mampu',
    meaning_en: 'to be able',
    frequency: 85,
    examples: [
      {
        arabic: 'اِسْتَطَاعَ الطَّالِبُ حَلَّ المَسْأَلَةِ',
        translation: 'Siswa mampu memecahkan masalah'
      },
      {
        arabic: 'هَلْ تَسْتَطِيعُ المَجِيءَ غَدًا؟',
        translation: 'Apakah kamu bisa datang besok?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['اِسْتَطَاعَ', 'اِسْتَطَاعَا', 'اِسْتَطَاعُوْا'],
          muannats: ['اِسْتَطَاعَتْ', 'اِسْتَطَاعَتَا', 'اِسْتَطَعْنَ']
        },
        khitob: {
          mudzakkar: ['اِسْتَطَعْتَ', 'اِسْتَطَعْتُمَا', 'اِسْتَطَعْتُمْ'],
          muannats: ['اِسْتَطَعْتِ', 'اِسْتَطَعْتُمَا', 'اِسْتَطَعْتُنَّ']
        },
        takallum: ['اِسْتَطَعْتُ', 'اِسْتَطَعْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَسْتَطِيعُ', 'يَسْتَطِيعَانِ', 'يَسْتَطِيعُوْنَ'],
          muannats: ['تَسْتَطِيعُ', 'تَسْتَطِيعَانِ', 'يَسْتَطِعْنَ']
        },
        khitob: {
          mudzakkar: ['تَسْتَطِيعُ', 'تَسْتَطِيعَانِ', 'تَسْتَطِيعُوْنَ'],
          muannats: ['تَسْتَطِيعِيْنَ', 'تَسْتَطِيعَانِ', 'تَسْتَطِعْنَ']
        },
        takallum: ['أَسْتَطِيعُ', 'نَسْتَطِيعُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِسْتَطِعْ', 'اِسْتَطِيعَا', 'اِسْتَطِيعُوْا'],
          muannats: ['اِسْتَطِيعِي', 'اِسْتَطِيعَا', 'اِسْتَطِعْنَ']
        }
      }
    }
  },
  {
    id: 'samaha',
    word: 'سَمَحَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'mengizinkan',
    meaning_en: 'to permit',
    frequency: 80,
    examples: [
      {
        arabic: 'سَمَحَ المُدِيرُ لِلمُوَظَّفِ بِالخُرُوجِ',
        translation: 'Direktur mengizinkan pegawai untuk keluar'
      },
      {
        arabic: 'هَلْ تَسْمَحُ لِي؟',
        translation: 'Apakah kamu mengizinkan saya?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['سَمَحَ', 'سَمَحَا', 'سَمَحُوْا'],
          muannats: ['سَمَحَتْ', 'سَمَحَتَا', 'سَمَحْنَ']
        },
        khitob: {
          mudzakkar: ['سَمَحْتَ', 'سَمَحْتُمَا', 'سَمَحْتُمْ'],
          muannats: ['سَمَحْتِ', 'سَمَحْتُمَا', 'سَمَحْتُنَّ']
        },
        takallum: ['سَمَحْتُ', 'سَمَحْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَسْمَحُ', 'يَسْمَحَانِ', 'يَسْمَحُوْنَ'],
          muannats: ['تَسْمَحُ', 'تَسْمَحَانِ', 'يَسْمَحْنَ']
        },
        khitob: {
          mudzakkar: ['تَسْمَحُ', 'تَسْمَحَانِ', 'تَسْمَحُوْنَ'],
          muannats: ['تَسْمَحِيْنَ', 'تَسْمَحَانِ', 'تَسْمَحْنَ']
        },
        takallum: ['أَسْمَحُ', 'نَسْمَحُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اِسْمَحْ', 'اِسْمَحَا', 'اِسْمَحُوْا'],
          muannats: ['اِسْمَحِي', 'اِسْمَحَا', 'اِسْمَحْنَ']
        }
      }
    }
  },
  {
    id: 'waafaqa',
    word: 'وَافَقَ',
    type: 'mutal',
    subtype: 'mitsal_wawi',
    meaning: 'menyetujui',
    meaning_en: 'to agree',
    frequency: 80,
    examples: [
      {
        arabic: 'وَافَقَ المُدِيرُ عَلَى الطَّلَبِ',
        translation: 'Direktur menyetujui permintaan'
      },
      {
        arabic: 'هَلْ تُوَافِقُ عَلَى هَذَا؟',
        translation: 'Apakah kamu setuju dengan ini?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['وَافَقَ', 'وَافَقَا', 'وَافَقُوْا'],
          muannats: ['وَافَقَتْ', 'وَافَقَتَا', 'وَافَقْنَ']
        },
        khitob: {
          mudzakkar: ['وَافَقْتَ', 'وَافَقْتُمَا', 'وَافَقْتُمْ'],
          muannats: ['وَافَقْتِ', 'وَافَقْتُمَا', 'وَافَقْتُنَّ']
        },
        takallum: ['وَافَقْتُ', 'وَافَقْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يُوَافِقُ', 'يُوَافِقَانِ', 'يُوَافِقُوْنَ'],
          muannats: ['تُوَافِقُ', 'تُوَافِقَانِ', 'يُوَافِقْنَ']
        },
        khitob: {
          mudzakkar: ['تُوَافِقُ', 'تُوَافِقَانِ', 'تُوَافِقُوْنَ'],
          muannats: ['تُوَافِقِيْنَ', 'تُوَافِقَانِ', 'تُوَافِقْنَ']
        },
        takallum: ['أُوَافِقُ', 'نُوَافِقُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['وَافِقْ', 'وَافِقَا', 'وَافِقُوْا'],
          muannats: ['وَافِقِي', 'وَافِقَا', 'وَافِقْنَ']
        }
      }
    }
  },
  {
    id: 'rafadha',
    word: 'رَفَضَ',
    type: 'sahih',
    subtype: 'salim',
    meaning: 'menolak',
    meaning_en: 'to refuse',
    frequency: 80,
    examples: [
      {
        arabic: 'رَفَضَ المُدِيرُ الطَّلَبَ',
        translation: 'Direktur menolak permintaan'
      },
      {
        arabic: 'لِمَاذَا رَفَضْتَ العَرْضَ؟',
        translation: 'Kenapa kamu menolak tawaran itu?'
      }
    ],
    tasrif: {
      madhi: {
        ghoib: {
          mudzakkar: ['رَفَضَ', 'رَفَضَا', 'رَفَضُوْا'],
          muannats: ['رَفَضَتْ', 'رَفَضَتَا', 'رَفَضْنَ']
        },
        khitob: {
          mudzakkar: ['رَفَضْتَ', 'رَفَضْتُمَا', 'رَفَضْتُمْ'],
          muannats: ['رَفَضْتِ', 'رَفَضْتُمَا', 'رَفَضْتُنَّ']
        },
        takallum: ['رَفَضْتُ', 'رَفَضْنَا']
      },
      mudhari: {
        ghoib: {
          mudzakkar: ['يَرْفُضُ', 'يَرْفُضَانِ', 'يَرْفُضُوْنَ'],
          muannats: ['تَرْفُضُ', 'تَرْفُضَانِ', 'يَرْفُضْنَ']
        },
        khitob: {
          mudzakkar: ['تَرْفُضُ', 'تَرْفُضَانِ', 'تَرْفُضُوْنَ'],
          muannats: ['تَرْفُضِيْنَ', 'تَرْفُضَانِ', 'تَرْفُضْنَ']
        },
        takallum: ['أَرْفُضُ', 'نَرْفُضُ']
      },
      amr: {
        khitob: {
          mudzakkar: ['اُرْفُضْ', 'اُرْفُضَا', 'اُرْفُضُوْا'],
          muannats: ['اُرْفُضِي', 'اُرْفُضَا', 'اُرْفُضْنَ']
        }
      }
    }
  }
]; 