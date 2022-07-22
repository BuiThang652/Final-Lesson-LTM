let questions = [
  {
    numb: 1,
    question:
      "Một lớp học có 40 học sinh, trong đó số học sinh nam chiếm 40%. Hỏi lớp đó có bao nhiêu học sinh nữ?",
    answer: "24 học sinh",
    options: ["16 học sinh", "18 học sinh", "20 học sinh", "24 học sinh"],
  },
  {
    numb: 2,
    question:
      "Một người đi xe máy trên quãng đường AB dài 120km với vận tốc 50km/giờ. Hỏi sau bao lâu thì người đó đi hết quãng đường AB?",
    answer: "2,5 giờ",
    options: ["3 giờ", "3.2 giờ", "2.2 giờ", "2,5 giờ"],
  },
  {
    numb: 3,
    question:
      "Một mảnh đất hình chữ nhật có chiều dài 45m và chiều rộng 28m. Hỏi diện tích của mảnh đất bằng bao nhiêu ha?",
    answer: "0,126ha",
    options: ["12,6ha", "1,26ha", "0,126ha", "0,0126ha"],
  },
  {
    numb: 4,
    question: "Tỉ số phần trăm giữa hai số 18 và 72 là:",
    answer: "25%",
    options: ["30%", "20%", "35%", "25%"],
  },
  {
    numb: 5,
    question: "Số thập phân “hai mươi sáu phẩy chín mươi ba” được viết là:",
    answer: "26,93",
    options: ["26,93", "2693", "269,3", "2,693"],
  },
  {
    numb: 6,
    question:
      "4,2 lít dầu nặng 11,4kg. Hỏi có bao nhiêu lít dầu nếu khối lượng của chúng bằng 28,5kg?",
    answer: "10,5 lít",
    options: ["10,5 lít", "12,46 lít", "13,8 lít", "22,4 lít"],
  },
  {
    numb: 7,
    question:
      "Chiều cao của hình thang có diện tích bằng 80cm2 và tổng độ dài hai đáy bằng 50cm là:",
    answer: "3,2cm",
    options: ["4,2cm", "3,8cm", "3,5cm", "3,2cm"],
  },
  {
    numb: 8,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["32km", "25km", "48km", "55km"],
  },
  {
    numb: 9,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["55km", "48km", "32km", "25km"],
  },
  {
    numb: 10,
    question: "Tỉ số phần trăm giữa hai số 15 và 40 là:",
    answer: "37,5%",
    options: ["37,5%", "42,15%", "32,54%", "28,95%"],
  },
  {
    numb: 11,
    question: "Số thích hợp để điền vào chỗ chấm 84 tạ 5 yến = …tấn là:",
    answer: "8,45",
    options: ["845", "8,45", "84,5", "8450"],
  },
  {
    numb: 12,
    question: "số sách là 28 quyển. Hỏi có tất cả bao nhiêu quyển sách?",
    answer: "48 quyển",
    options: ["54 quyển", "48 quyển", "36 quyển", "24 quyển"],
  },
  {
    numb: 13,
    question:
      "Một người đi quãng đường AB với vận tốc 36km/giờ hết 3 giờ 15 phút. Độ dài quãng đường AB là:",
    answer: "117km",
    options: ["85km", "96km", "108km", "117km"],
  },
  {
    numb: 14,
    question: "Chu vi của đường tròn có bán kính bằng 6dm là:",
    answer: "37,68dm",
    options: ["37,68dm", "18,84dm", "9,42dm", "9,42dm"],
  },
  {
    numb: 15,
    question: "Phân số 12/5 được viết dưới dạng số thập phân là:",
    answer: "2,4",
    options: ["1,2", "3,6", "2,4", "4,8"],
  },
  {
    numb: 16,
    question:
      "Một lớp học có 40 học sinh, trong đó số học sinh nam chiếm 40%. Hỏi lớp đó có bao nhiêu học sinh nữ?",
    answer: "24 học sinh",
    options: ["16 học sinh", "18 học sinh", "20 học sinh", "24 học sinh"],
  },
  {
    numb: 17,
    question:
      "Một người đi xe máy trên quãng đường AB dài 120km với vận tốc 50km/giờ. Hỏi sau bao lâu thì người đó đi hết quãng đường AB?",
    answer: "2,5 giờ",
    options: ["3 giờ", "3.2 giờ", "2.2 giờ", "2,5 giờ"],
  },
  {
    numb: 18,
    question:
      "Một mảnh đất hình chữ nhật có chiều dài 45m và chiều rộng 28m. Hỏi diện tích của mảnh đất bằng bao nhiêu ha?",
    answer: "0,126ha",
    options: ["12,6ha", "1,26ha", "0,126ha", "0,0126ha"],
  },
  {
    numb: 19,
    question: "Tỉ số phần trăm giữa hai số 18 và 72 là:",
    answer: "25%",
    options: ["30%", "20%", "35%", "25%"],
  },
  {
    numb: 20,
    question: "Số thập phân “hai mươi sáu phẩy chín mươi ba” được viết là:",
    answer: "26,93",
    options: ["26,93", "2693", "269,3", "2,693"],
  },
  {
    numb: 21,
    question:
      "4,2 lít dầu nặng 11,4kg. Hỏi có bao nhiêu lít dầu nếu khối lượng của chúng bằng 28,5kg?",
    answer: "10,5 lít",
    options: ["10,5 lít", "12,46 lít", "13,8 lít", "22,4 lít"],
  },
  {
    numb: 22,
    question:
      "Chiều cao của hình thang có diện tích bằng 80cm2 và tổng độ dài hai đáy bằng 50cm là:",
    answer: "3,2cm",
    options: ["4,2cm", "3,8cm", "3,5cm", "3,2cm"],
  },
  {
    numb: 23,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["32km", "25km", "48km", "55km"],
  },
  {
    numb: 24,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["55km", "48km", "32km", "25km"],
  },
  {
    numb: 25,
    question: "Tỉ số phần trăm giữa hai số 15 và 40 là:",
    answer: "37,5%",
    options: ["37,5%", "42,15%", "32,54%", "28,95%"],
  },
  {
    numb: 26,
    question: "Số thích hợp để điền vào chỗ chấm 84 tạ 5 yến = …tấn là:",
    answer: "8,45",
    options: ["845", "8,45", "84,5", "8450"],
  },
  {
    numb: 27,
    question: "số sách là 28 quyển. Hỏi có tất cả bao nhiêu quyển sách?",
    answer: "48 quyển",
    options: ["54 quyển", "48 quyển", "36 quyển", "24 quyển"],
  },
  {
    numb: 28,
    question:
      "Một người đi quãng đường AB với vận tốc 36km/giờ hết 3 giờ 15 phút. Độ dài quãng đường AB là:",
    answer: "117km",
    options: ["85km", "96km", "108km", "117km"],
  },
  {
    numb: 29,
    question: "Chu vi của đường tròn có bán kính bằng 6dm là:",
    answer: "37,68dm",
    options: ["37,68dm", "18,84dm", "9,42dm", "9,42dm"],
  },
  {
    numb: 30,
    question: "Phân số 12/5 được viết dưới dạng số thập phân là:",
    answer: "2,4",
    options: ["1,2", "3,6", "2,4", "4,8"],
  },
  {
    numb: 31,
    question:
      "Một lớp học có 40 học sinh, trong đó số học sinh nam chiếm 40%. Hỏi lớp đó có bao nhiêu học sinh nữ?",
    answer: "24 học sinh",
    options: ["16 học sinh", "18 học sinh", "20 học sinh", "24 học sinh"],
  },
  {
    numb: 32,
    question:
      "Một người đi xe máy trên quãng đường AB dài 120km với vận tốc 50km/giờ. Hỏi sau bao lâu thì người đó đi hết quãng đường AB?",
    answer: "2,5 giờ",
    options: ["3 giờ", "3.2 giờ", "2.2 giờ", "2,5 giờ"],
  },
  {
    numb: 33,
    question:
      "Một mảnh đất hình chữ nhật có chiều dài 45m và chiều rộng 28m. Hỏi diện tích của mảnh đất bằng bao nhiêu ha?",
    answer: "0,126ha",
    options: ["12,6ha", "1,26ha", "0,126ha", "0,0126ha"],
  },
  {
    numb: 34,
    question: "Tỉ số phần trăm giữa hai số 18 và 72 là:",
    answer: "25%",
    options: ["30%", "20%", "35%", "25%"],
  },
  {
    numb: 35,
    question: "Số thập phân “hai mươi sáu phẩy chín mươi ba” được viết là:",
    answer: "26,93",
    options: ["26,93", "2693", "269,3", "2,693"],
  },
  {
    numb: 36,
    question:
      "4,2 lít dầu nặng 11,4kg. Hỏi có bao nhiêu lít dầu nếu khối lượng của chúng bằng 28,5kg?",
    answer: "10,5 lít",
    options: ["10,5 lít", "12,46 lít", "13,8 lít", "22,4 lít"],
  },
  {
    numb: 37,
    question:
      "Chiều cao của hình thang có diện tích bằng 80cm2 và tổng độ dài hai đáy bằng 50cm là:",
    answer: "3,2cm",
    options: ["4,2cm", "3,8cm", "3,5cm", "3,2cm"],
  },
  {
    numb: 38,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["32km", "25km", "48km", "55km"],
  },
  {
    numb: 39,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["55km", "48km", "32km", "25km"],
  },
  {
    numb: 40,
    question: "Tỉ số phần trăm giữa hai số 15 và 40 là:",
    answer: "37,5%",
    options: ["37,5%", "42,15%", "32,54%", "28,95%"],
  },
  {
    numb: 41,
    question: "Số thích hợp để điền vào chỗ chấm 84 tạ 5 yến = …tấn là:",
    answer: "8,45",
    options: ["845", "8,45", "84,5", "8450"],
  },
  {
    numb: 42,
    question: "số sách là 28 quyển. Hỏi có tất cả bao nhiêu quyển sách?",
    answer: "48 quyển",
    options: ["54 quyển", "48 quyển", "36 quyển", "24 quyển"],
  },
  {
    numb: 43,
    question:
      "Một người đi quãng đường AB với vận tốc 36km/giờ hết 3 giờ 15 phút. Độ dài quãng đường AB là:",
    answer: "117km",
    options: ["85km", "96km", "108km", "117km"],
  },
  {
    numb: 44,
    question: "Chu vi của đường tròn có bán kính bằng 6dm là:",
    answer: "37,68dm",
    options: ["37,68dm", "18,84dm", "9,42dm", "9,42dm"],
  },
  {
    numb: 45,
    question: "Phân số 12/5 được viết dưới dạng số thập phân là:",
    answer: "2,4",
    options: ["1,2", "3,6", "2,4", "4,8"],
  },
  {
    numb: 46,
    question:
      "Một lớp học có 40 học sinh, trong đó số học sinh nam chiếm 40%. Hỏi lớp đó có bao nhiêu học sinh nữ?",
    answer: "24 học sinh",
    options: ["16 học sinh", "18 học sinh", "20 học sinh", "24 học sinh"],
  },
  {
    numb: 47,
    question:
      "Một người đi xe máy trên quãng đường AB dài 120km với vận tốc 50km/giờ. Hỏi sau bao lâu thì người đó đi hết quãng đường AB?",
    answer: "2,5 giờ",
    options: ["3 giờ", "3.2 giờ", "2.2 giờ", "2,5 giờ"],
  },
  {
    numb: 48,
    question:
      "Một mảnh đất hình chữ nhật có chiều dài 45m và chiều rộng 28m. Hỏi diện tích của mảnh đất bằng bao nhiêu ha?",
    answer: "0,126ha",
    options: ["12,6ha", "1,26ha", "0,126ha", "0,0126ha"],
  },
  {
    numb: 49,
    question: "Tỉ số phần trăm giữa hai số 18 và 72 là:",
    answer: "25%",
    options: ["30%", "20%", "35%", "25%"],
  },
  {
    numb: 50,
    question: "Số thập phân “hai mươi sáu phẩy chín mươi ba” được viết là:",
    answer: "26,93",
    options: ["26,93", "2693", "269,3", "2,693"],
  },
  {
    numb: 51,
    question:
      "4,2 lít dầu nặng 11,4kg. Hỏi có bao nhiêu lít dầu nếu khối lượng của chúng bằng 28,5kg?",
    answer: "10,5 lít",
    options: ["10,5 lít", "12,46 lít", "13,8 lít", "22,4 lít"],
  },
  {
    numb: 52,
    question:
      "Chiều cao của hình thang có diện tích bằng 80cm2 và tổng độ dài hai đáy bằng 50cm là:",
    answer: "3,2cm",
    options: ["4,2cm", "3,8cm", "3,5cm", "3,2cm"],
  },
  {
    numb: 53,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["32km", "25km", "48km", "55km"],
  },
  {
    numb: 54,
    question:
      "Một đội công nhân đã sửa được 8km đường và đạt 32% kế hoạch đề ra. Đoạn đường mà đội công nhân phải sửa dài:",
    answer: "25km",
    options: ["55km", "48km", "32km", "25km"],
  },
  {
    numb: 55,
    question: "Tỉ số phần trăm giữa hai số 15 và 40 là:",
    answer: "37,5%",
    options: ["37,5%", "42,15%", "32,54%", "28,95%"],
  },
  {
    numb: 56,
    question: "Số thích hợp để điền vào chỗ chấm 84 tạ 5 yến = …tấn là:",
    answer: "8,45",
    options: ["845", "8,45", "84,5", "8450"],
  },
  {
    numb: 57,
    question: "số sách là 28 quyển. Hỏi có tất cả bao nhiêu quyển sách?",
    answer: "48 quyển",
    options: ["54 quyển", "48 quyển", "36 quyển", "24 quyển"],
  },
  {
    numb: 58,
    question:
      "Một người đi quãng đường AB với vận tốc 36km/giờ hết 3 giờ 15 phút. Độ dài quãng đường AB là:",
    answer: "117km",
    options: ["85km", "96km", "108km", "117km"],
  },
  {
    numb: 59,
    question: "Chu vi của đường tròn có bán kính bằng 6dm là:",
    answer: "37,68dm",
    options: ["37,68dm", "18,84dm", "9,42dm", "9,42dm"],
  },
  {
    numb: 60,
    question: "Phân số 12/5 được viết dưới dạng số thập phân là:",
    answer: "2,4",
    options: ["1,2", "3,6", "2,4", "4,8"],
  }
];
