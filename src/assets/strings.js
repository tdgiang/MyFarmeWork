import { colors } from 'assets';
import images from './image';

export const local = {
  NoInternetComponent: {
    no_internet_connection: 'No Internet Connection',
    pls_check_your_internet_connection: 'Please check your internet connection',
  },
  welcome: {},

  login: {},

  name: {
    what_your_name: "What's your name?",
    first_name: 'First name',
    last_name: 'Last name',
  },

  email: {
    email_header_title: 'And, your email?',
    email_address: 'Email address',
    error_invalid_email_title: 'Invalid email',
    error_invalid_email_subtitle: 'Please check if your email has been entered correctly.',
    receive_email:
      "I'd like to receive promotional communications, including discounts, surveys, inspiration, and love from app via email, SMS and phone.",
  },

  password: {
    password_header_title: 'Create a password',
    password_subtitle:
      'Your password must include at least one symbol and be 6 or more characters long.',
    password: 'Password',
  },

  forgotPassword: {
    forgot_header_title: 'Forgot your password?',
    forgot_subtitle: 'Enter your email to find your account.',
    email_address: 'Email address',
  },

  phoneNumberScreen: {
    label_enter_phone_number: 'Enter your phone number',
    text_hint_policy:
      'By tapping "Send confirmation code" above, we will send you an SMS to confirm your phone number. Message & data rates may apply.',
    text_button_continue: 'Send confirmation code',
  },

  ConfirmationCodeScreen: {
    didnt_get_a_code: "I didn't get a code",
    send_sms_again: 'Send SMS again in',
    enter_the_code_was_sent_to: 'Enter the code that was sent to',
  },

  VersionChecker: {
    title: 'Update Available !',
    version: 'Version:',
    description: 'A newer version of RNBase is available. Update now to continue using RNBase and take advantage of the latest features and security upgrades!',
    updateAction: 'Update Now'
  },
  LOAI_TO_TRINH: [
    {
      id: '5e3e84ff8f0a289dd1515db6',
      name: 'Tờ trình chủ trương 01',
      value: 'TT01'
    },
    {
      id: '5e3e84fff13bb249772e090b',
      name: 'Tờ trình chủ trương 02',
      value: 'TT02'
    },
    {
      id: '5e3e84fffb23fc44e35599a8',
      name: 'Tờ trình chủ trương 03',
      value: 'TT03'
    },
    {
      id: '5e3e84ffcc9a4e7d399b5c66',
      name: 'Tờ trình chủ trương 04',
      value: 'TT04'
    },
    {
      id: '5e3e84ff809b6059a09f4e0e',
      name: 'Tờ trình chủ trương 05',
      value: 'TT05'
    },
    {
      id: '5e3e84ff1c20c6eddb27b8e0',
      name: 'Tờ trình chủ trương 06',
      value: 'TT06'
    },
    {
      id: '5e3e84ff8ed1431651364cd6',
      name: 'Tờ trình chủ trương 07',
      value: 'TT07'
    }
  ],
  PHONG_BAN: [
    {
      id: '5e3e826e1fbba9b6bc0084be',
      name: 'Trung tâm Viettel Huyện Sóc Sơn',
      value: '5e3e826e18a3dd1cda95a289'
    },
    {
      id: '5e3e826e9eb90c9426e34225',
      name: 'Trung tâm Viettel Huyện Đan Phượng',
      value: '5e3e826e4252577e3062bf5e'
    },
    {
      id: '5e3e826ed0a73cd2710296bc',
      name: 'Trung tâm Viettel Huyện Sóc Trăng',
      value: '5e3e826e94b7a7d0f2457474'
    },
    {
      id: '5e3e826e999fc6048575e2de',
      name: 'Trung tâm Viettel Thành phố Biên Hòa ',
      value: '5e3e826ebac6a53d80f6e3d7'
    },
    {
      id: '5e3e826e25b340b04055ba46',
      name: 'Trung tâm Viettel Thành phố Hà Giang ',
      value: '5e3e826ed035652829926192'
    }
  ],
  PHONG_BAN_KIEM_SOAT_CP: [
    {
      id: '5e3e8742c06c9e9bb3dc09cb',
      name: 'Trung tâm Viettel Huyện Sóc Trăng',
      value: '5e3e8742b7957b88b37082b5'
    },
    {
      id: '5e3e874260a6e8dc22f841f0',
      name: 'Trung tâm Viettel Huyện Sóc Sơn',
      value: '5e3e874246060291fa5e56d6'
    },
    {
      id: '5e3e8742e7ad2f882f85d98d',
      name: 'Trung tâm Viettel Thành phố Bạc Liêu ',
      value: '5e3e87424cceb7afd28dfb62'
    },
    {
      id: '5e3e874230750e28b1ae7e0d',
      name: 'Trung tâm Viettel Thành phố Bắc Kạn',
      value: '5e3e87427709be002144edc1'
    },
    {
      id: '5e3e8742e6a640a9f00c0c0e',
      name: 'Trung tâm Viettel Thành phố Bến Tre',
      value: '5e3e8742da81e95e1c84e39a'
    },
    {
      id: '5e3e8742349d40f5dd027ddd',
      name: 'Trung tâm Viettel Thành phố Đồng Xoài',
      value: '5e3e87428c3f79c0159ee41a'
    },
    {
      id: '5e3e87427c5ebe433c7bdee0',
      name: 'Trung tâm Viettel Thành phố Cao Bằng',
      value: '5e3e8742d381d493267f2b07'
    }
  ],
  NGUOI_YEU_CAU: [
    {
      id: '5e3e874260a6e8dc22f841f0',
      name: 'Phạm Hoàng Minh Anh',
      value: '5e3e874246060291fa5e56d6'
    },
    {
      id: '5e3e8742c06c9e9bb3dc09cb',
      name: 'Đỗ Hùng Vĩnh',
      value: '5e3e8742b7957b88b37082b5'
    },
    {
      id: '5e3e8742e7ad2f882f85d98d',
      name: 'Nguyễn An Nhiên',
      value: '5e3e87424cceb7afd28dfb62'
    },
    {
      id: '5e3e874230750e28b1ae7e0d',
      name: 'Phạm Hoàng Anh',
      value: '5e3e87427709be002144edc1'
    },
    {
      id: '5e3e8742e6a640a9f00c0c0e',
      name: 'Đoàn Hoàng Hà',
      value: '5e3e8742da81e95e1c84e39a'
    },
    {
      id: '5e3e8742349d40f5dd027ddd',
      name: 'Nguyễn Hồ Phương',
      value: '5e3e87428c3f79c0159ee41a'
    },
  ],
  TRANG_THAI_DUYET: [
    {
      id: '0',
      name: 'Chưa duyệt'
    },
    {
      id: '1',
      name: 'Đã duyệt'
    },
    {
      id: '2',
      name: 'Từ chối'
    }
  ],
  TRANG_THAI_DUYET_TO_TRINH: [
    {
      value: '',
      name: ''
    },
    {
      value: '0',
      name: 'Chưa duyệt'
    },
    {
      value: '1',
      name: 'Đã duyệt'
    },
    {
      value: '2',
      name: 'Từ chối'
    }
  ],
  TRANG_THAI_HACH_TOAN: [
    {
      value: '', name: '', key: ''
    },
    {
      key: '0', name: 'Chưa hạch toán', value: 'N'
    },
    {
      key: '1', name: 'Đã hạch toán', value: 'Y'
    }
  ],
  TRANG_THAI_KY_FILTER: [
    {
      value: '',
      name: ''
    },
    {
      value: '0',
      name: 'Chưa ký'
    },
    {
      value: '1',
      name: 'Văn thư từ chối'
    },
    {
      value: '2',
      name: 'Lãnh đạo từ chối'
    },
    {
      value: '3',
      name: 'Đã phê duyệt'
    },
    {
      value: '4',
      name: 'Hủy luồng'
    },
    {
      value: '5',
      name: 'Đã ban hành'
    },
    {
      value: '10',
      name: 'Chờ ký'
    }
  ],
  TRANG_THAI_KY: [
    {
      value: '',
      name: ''
    },
    {
      value: '0',
      name: 'Chưa ký',
      color: '#FFC107'
    },
    {
      value: '1',
      name: 'Văn thư từ chối',
      color: '#A60014'
    },
    {
      value: '2',
      name: 'Lãnh đạo từ chối',
      color: '#A60014'
    },
    {
      value: '3',
      name: 'Đã phê duyệt',
      color: '#1777F1'
    },
    {
      value: '4',
      name: 'Hủy luồng',
      color: '#A60014'
    },
    {
      value: '5',
      name: 'Đã ban hành',
      color: '#1777F1'
    },
    {
      value: '10',
      name: 'Chờ ký',
      color: '#FFC107'
    }
  ],
  DO_UU_TIEN: [
    {
      value: '',
      name: ''
    },
    {
      value: '1',
      name: 'Bình thường'
    },
    {
      value: '2',
      name: 'Khẩn'
    },
    {
      value: '3',
      name: 'Thượng khẩn'
    },
    {
      value: '4',
      name: 'Hoả tốc'
    }
  ],
  LINH_VUC: [
    { value: '1', name: 'Hành Chính' },
    { value: '10', name: 'Xây dựng' },
    { value: '110', name: 'Call Center' },
    { value: '123', name: 'Investment' },
    { value: '137', name: 'Enterprise Customer (ECD}' },
    { value: '158', name: 'Selling Control' },
    { value: '171', name: 'IT Center' },
    { value: '184', name: 'Network Operation Center (NOC}' },
    { value: '197', name: 'Pháp chế' },
    { value: '2', name: 'Kỹ Thuật' },
    { value: '217', name: 'Truyền dẫn' },
    { value: '3', name: 'Kinh Doanh' },
    { value: '4', name: 'Tài Chính' },
    { value: '5', name: 'Thanh Tra' },
    { value: '517', name: 'Lĩnh vực khác' },
    { value: '537', name: 'Quản lý tài sản' },
    { value: '550', name: 'Kế hoạch Hành chính' },
    { value: '597', name: 'Kiểm toán nội bộ' },
    { value: '6', name: 'Nhân Sự' },
    { value: '610', name: 'Ngành tổ chức lao động' },
    { value: '623', name: 'Ngành chính trị' },
    { value: '636', name: 'Cơ điện' },
    { value: '649', name: 'Đào tạo' },
    { value: '662', name: 'Sản xuất thiết bị' },
    { value: '675', name: 'Đầu tư' },
    { value: '688', name: 'KCS' },
    { value: '7', name: 'Kế hoạch' },
    { value: '701', name: 'Truyền hình' },
    { value: '714', name: 'Bóng đá' },
    { value: '727', name: 'Văn phòng' },
    { value: '740', name: 'Đầu tư tài chính' },
    { value: '757', name: 'Quy hoạch thiết kế tối ưu' },
    { value: '77', name: 'Hành chính' },
    { value: '777', name: 'VAS' },
    { value: '797', name: 'Hệ thống' },
    { value: '817', name: 'Khác' },
    { value: '857', name: 'Công văn ngoài' },
    { value: '897', name: 'Quảng cáo & Truyền thông' },
    { value: '917', name: 'Công nghệ thông tin' },
    { value: '957', name: 'Sáng kiến ý tưởng' },
  ],
  TRANG_THAI_TAI_LIEU: [
    {
      id: 'DR',
      name: 'Nháp',
      color: '#949494'
    },
    {
      id: 'CO',
      name: 'Hoàn thành',
      color: '#FFC107'
    },
  ],
  TRANG_THAI_TAI_LIEU_TO_TRINH: [
    {
      value: '',
      name: ''
    },
    {
      value: 'DR',
      name: 'Nháp'
    },
    {
      // value: 'PO',
      value: 'CO',
      name: 'Hoàn thành'
    }
  ],
  TRANG_THAI_TAI_LIEU_VOFFICE: [
    {
      value: '',
      name: ''
    },
    {
      value: 'DR',
      name: 'Nháp'
    },
    {
      // value: 'PO',
      value: 'CO',
      name: 'Hoàn thành'
    }
  ],
  TRANG_THAI_CHI_FILTER: [
    {
      value: '', name: ''
    },
    {
      value: '0', name: 'Chưa chi'
    },
    {
      value: '1', name: 'Chi chưa đủ'
    },
    {
      value: '2', name: 'Chi đủ'
    }
  ],
  TRANG_THAI_CHI: [
    {
      value: '', name: ''
    },
    {
      value: '0', name: 'Chưa chi'
    },
    {
      value: '1', name: 'Chi chưa đủ'
    },
    {
      value: '2', name: 'Chi đủ'
    }
  ],
  TRANG_THAI_DUYET_ADVANCE_REQUEST: [
    {
      value: '',
      name: ''
    },
    {
      value: '0',
      name: 'Chưa duyệt'
    },
    {
      value: '1',
      name: 'Đã duyệt'
    },
    {
      value: '2',
      name: 'Từ chối'
    }

  ],

  APPROVE_STATUS_INVOICE_GROUP_FILTER: [
    {
      value: null,
      name: ''
    },
    {
      value: 'DR',
      name: 'Chưa duyệt'
    },
    {
      value: 'RQ',
      name: 'Đề nghị duyệt'
    },
    {
      value: 'PO',
      name: 'Đã duyệt'
    },
    {
      value: 'DN',
      name: 'Từ chối'
    }

  ],

  LOAI_DE_NGHI: [
    { value: 0, name: 'Chuyển tiền cho đối tác' },
    { value: 1, name: 'Chuyển tiền nội bộ', },
    { value: 2, name: 'Chuyển tiền lương nội bộ' },
    { value: 3, name: 'Thanh toán tiền lương' },
    { value: 4, name: 'Chuyển tiền tạm ứng' },
    { value: 5, name: 'Khác', },
  ],
  HINH_THUC_CHI_TRA: [
    { value: 'UNC', name: 'Uỷ nhiệm chi ' },
    { value: 'TM', name: 'Tiền mặt', },
    { value: 'LC', name: 'LC' },
    { value: 'CMTND', name: 'CMTND' },
  ],
  TRANG_THAI_TAI_LIEU_ADVANCE_REQUEST: [
    {
      value: '',
      name: ''
    },
    {
      value: 'DR',
      name: 'Nháp'
    },
    {
      value: 'CO',
      name: 'Hoàn thành'
    }
  ],
  APINVOICE_GROUP_STATEMENT_TYPE: [
    { value: 0, name: 'Thanh toán cho đối tác', id: '0' },
    { value: 1, name: 'Hoàn ứng', id: '1' },
    { value: 2, name: 'Trực tiếp', id: '2' },
    { value: 3, name: 'Nhân công (chi phí)', id: '3' },
    { value: 4, name: 'Nhân công (đầu tư)', id: '4' },
    { value: 5, name: 'Nhân công (dở dang)', id: '5' },
  ],

  UNIT: [
    { value: 0, name: 'Viettel Hà Nội', id: '0' },
    { value: 1, name: 'Viettel HCM', id: '1' },
    { value: 2, name: 'Viettel Đà Nẵng', id: '2' },
  ]
};

export const quyTitle = [
  'QI', 'QII', 'QIII', 'QIV'
]

export const fileTypeIcon = [
  { icon: images.ic_doc, type: 0 },
  { icon: images.ic_xlsx, type: 1 },
  { icon: images.ic_pdf, type: 2 },
  { icon: images.ic_jpg, type: 3 },
]

export const TRANG_THAI_TO_TRING = [
  {
    title: 'Hoàn thành',
    color: colors.colorf39
  },
  {
    title: 'Đã duyệt',
    color: colors.colorMain
  },
  {
    title: 'Nhập',
    color: colors.color949
  },
  {
    title: 'Từ chối',
    color: colors.color504
  },
];
export const TYPE_ITEM_DIALOGSEARCH = {
  TEXTINPUT: 0,
  PICKER: 1,
  AUTOCOMPLETESEARCH: 2,
  DATEPICKER: 3,
  CHECKBOX: 4
}
export const PAGE_LIMIT = {
  PAGE_INVOICE: 10,
  PAGE_DETAIL_INVOICE: 10,
  PAGE_PARTNER: 10,
  PAGE_VOFFICE: 10
}
export const TYPE_INVOICE = [
  { name: 'Hóa đơn GTGT' },
  { name: 'Chứng từ thanh toán' }
]
export const TYPE_GOODS_SERVIVE = [
  { name: 'Hàng hóa – dịch vụ thông thường', id: 'OH' },
  { name: 'Điện nước', id: 'EW' },
  { name: 'Thuê vị trí', id: 'LO' },
  { name: 'Nhân công', id: 'NC' }
]
export const ID_TYPE_SERVICE = {
  OH: 0,
  EW: 1,
  LO: 2,
  LC: 3
}
export const ARRAY_TYPE_GOODS_SERVIVE = {
  OH: 'Hàng hóa – dịch vụ thông thường',
  EW: 'Điện nước',
  LO: 'Thuê vị trí',
  LC: 'Nhân công'
}
export const PAYMENT_METHOD = [
  { name: 'Chuyển khoản đến ngân hàng', id: 'UNC' },
  { name: 'Chuyển khoản đến kho bạc', id: 'UNCKB' },
  { name: 'Tiền mặt', id: 'TM' },
  { name: 'Qua L/C', id: 'LC' },
  { name: 'Chuyển tiền theo CMND', id: 'CMTND' }
]
export const TYPE_PAYMENT_METHOD = {
  UNC: 'Ủy nhiệm chi',
  TM: 'Tiền mặt',
  LC: 'LC',
  CMTND: 'CMTND'
}

export const ID_PAYMENT_METHOD = {
  UNC: 0,
  TM: 1,
  LO: 2,
  CMTND: 3
}
export const CURRENCY_PAY = [
  { name: 'VND', id: 'UNC' },
  { name: 'USD', id: 'TM' },
]

export const dataparallel = [
  {value: 0, name: ''},
  {value: 1, name: 'Nhóm 1'},
  {value: 2, name: 'Nhóm 2'},
  {value: 3, name: 'Nhóm 3'},
  {value: 4, name: 'Nhóm 4'},
  {value: 5, name: 'Nhóm 5'},
  {value: 6, name: 'Nhóm 6'},
  {value: 7, name: 'Nhóm 7'},
  {value: 8, name: 'Nhóm 8'},
  {value: 9, name: 'Nhóm 9'},
  {value: 10, name: 'Nhóm 10'}
  ]

export const dataUser = [
  { userName: '171660', fullName: 'Hung TQ24' },
  { userName: '249383', fullName :'Hương NL15'},
  { userName: '195262', fullName :'Ngọc TH1'},
  { userName: '061714', fullName: 'Bùi Thị Thanh Hương' },
  { userName: '184817', fullName: 'Nguyễn Thị Hoa' },
  { userName: '190266', fullName: 'Nguyễn Thị Nguyệt' },
  { userName: '112599', fullName: 'Nguyễn Thành Đông' },
]

export const FakeData = {
  THONG_TIN_CHUNG: {
    mauSoHD: '01GTKT/001',
    kyHieu: 'AA/20E',
    soHoaDon: 212152,
    maSoThue: '0134566780012',
    tenNguoiBan: 'Nguyễn Văn B',
    diaChi: 'Nguyễn Trãi, Thanh Xuân, Hà Đông',
    content: 'Nội dung tên hàng hóa/ dịch vụ',
    KIEU_HOA_DON: [
      {
        id: '5e3e84ff8f0a289dd1515db6',
        name: 'Tờ trình quản lý chi phí',
        value: 'TT01'
      },
      {
        id: '5e3e84fff13bb249772e090b',
        name: 'Tờ trình quản lý chất lượng',
        value: 'TT02'
      },
    ],
    LOAI_HANG_HOA_DICH_VU: [
      {
        id: '5e3e84ff8f0a289dd1515db6',
        name: 'Hàng hóa - dịch vụ thông thường',
      },
      {
        id: '5e3e84fff13bb249772e090b',
        name: 'Hàng hóa - dịch vụ cao cấp',
      },
    ]
  },
  THONG_TIN_SO_TIEN: {
    tienTe: [
      {
        id: '5e3e84fff13bb249772e090b',
        name: 'VND',
      },
      {
        id: '5e3e84fff13bb249772e40b',
        name: 'USD',
      },
    ],
    tyGia: '',
  },
  THONG_TIN_QUAN_TRI: {
    phuongThucThanhToan: [
      {
        id: '5e3e84fff13bb249772e090b',
        name: 'Ủy nhiệm chi',
      },
      {
        id: '5e3e84fff13bb249772e40b',
        name: 'Thanh toán qua Airpay',
      },
      {
        id: '5e3e84fff13bb249772e05b',
        name: 'Ví điện tử Momo',
      },
      {
        id: '5e3e84fff13bb249772e096',
        name: 'Thanh toán trực tiếp',
      },
    ]
  }
}

export const TIEN_TE = [
  {
    type: 'Tiền trước thuế',
    deNghi: '1.000.000',
    duocDuyet: '1.000.000'
  },
  {
    type: 'Tiền thuế',
    deNghi: '100.000',
    duocDuyet: '100.000'
  },
  {
    type: 'Tổng tiền',
    deNghi: '1.000.000',
    duocDuyet: '1.000.000'
  }
]

export const emailRegex = /^([^<>()[\]\\.,;:\s@"]+((?:\.[a-zA-Z0-9_]+)*)+([^ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]))@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,3}$/;

export const iconStatement = [
  {
    key: 'save',
    value: 'Lưu',
    active: require('../assets/images/menu/save.png'),
    disable: require('../assets/images/menu/saved.png'),
    press: require('../assets/images/menu/savep.png')
  },
  {
    key: 'co',
    value: 'CO',
    active: require('../assets/images/menu/co.png'),
    disable: require('../assets/images/menu/cod.png'),
    press: require('../assets/images/menu/cop.png')
  },
  {
    key: 'ra',
    value: 'RA',
    active: require('../assets/images/menu/ra.png'),
    disable: require('../assets/images/menu/rad.png'),
    press: require('../assets/images/menu/rap.png')
  },
  {
    key: 'attack',
    value: 'Đính kèm',
    active: require('../assets/images/menu/attack.png'),
    disable: require('../assets/images/menu/attackd.png'),
    press: require('../assets/images/menu/attackp.png')
  },
  {
    key: 'submit',
    value: 'Trình ký',
    active: require('../assets/images/menu/submit.png'),
    disable: require('../assets/images/menu/submitd.png'),
    press: require('../assets/images/menu/submitp.png')
  },
  {
    key: 'print',
    value: 'Phiếu In',
    active: require('../assets/images/menu/print.png'),
    disable: require('../assets/images/menu/printd.png'),
    press: require('../assets/images/menu/printp.png')
  },
]

