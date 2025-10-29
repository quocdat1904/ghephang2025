
import { Truck, Home, Package, Users } from 'lucide-react';

export const servicesData = [
  {
    id: 'ghep-hang',
    icon: Users,
    title: 'Dịch vụ xe tải ghép hàng Đà Nẵng Quảng Nam',
    description: 'Tối ưu chi phí vận chuyển bằng cách chia sẻ không gian xe với các khách hàng khác.',
    features: [
      'Giá cước siêu tiết kiệm',
      'Lịch trình linh hoạt mỗi ngày',
      'Phù hợp hàng hóa nhỏ, lẻ, cồng kềnh',
      'Giao nhận hàng hóa tận nơi an toàn'
    ],
    price: 'Chỉ từ 50.000đ',
    color: 'from-blue-500 to-blue-600',
    content: {
        heading: 'Giải pháp ghép hàng Đà Nẵng - Quảng Nam tối ưu',
        paragraphs: [
            'Dịch vụ xe tải ghép hàng của Vận Tải Dũng Ánh là lựa chọn hàng đầu cho các cá nhân và doanh nghiệp muốn gửi hàng hóa tuyến Đà Nẵng - Quảng Nam và ngược lại với chi phí thấp nhất. Chúng tôi nhận ghép mọi loại hàng hóa, từ những kiện hàng nhỏ lẻ đến những mặt hàng cồng kềnh, quá khổ.',
            'Với lịch trình xe chạy liên tục trong ngày, hàng hóa của bạn sẽ được vận chuyển nhanh chóng, an toàn và giao đến tận tay người nhận. Đội ngũ tài xế giàu kinh nghiệm, thông thạo địa hình sẽ đảm bảo hàng của bạn luôn được bảo quản tốt nhất trong suốt quá trình vận chuyển.'
        ],
        cta: 'Bạn cần gửi hàng lẻ? Hãy liên hệ ngay để có giá tốt nhất!'
    }
  },
  {
    id: 'chuyen-nha',
    icon: Home,
    title: 'Dịch vụ chuyển nhà, dọn trọ trọn gói',
    description: 'Dịch vụ chuyển nhà, dọn phòng trọ trọn gói, nhanh chóng và chuyên nghiệp.',
    features: [
      'Tháo lắp, đóng gói đồ đạc miễn phí',
      'Đội ngũ bốc xếp chuyên nghiệp, cẩn thận',
      'Vận chuyển an toàn bằng xe tải chuyên dụng',
      'Hỗ trợ sắp xếp tại địa điểm mới'
    ],
    price: 'Khảo sát báo giá',
    color: 'from-green-500 to-green-600',
    content: {
        heading: 'Chuyển nhà, dọn trọ nhẹ nhàng và nhanh chóng',
        paragraphs: [
            'Hiểu được những vất vả khi chuyển nơi ở, Vận Tải Dũng Ánh cung cấp dịch vụ chuyển nhà, dọn trọ trọn gói giúp bạn tiết kiệm thời gian và công sức. Chúng tôi sẽ đảm nhận mọi công đoạn từ tháo dỡ, bọc lót, đóng gói đồ đạc cho đến bốc xếp và vận chuyển đến nhà mới.',
            'Đội ngũ nhân viên của chúng tôi được đào tạo bài bản, làm việc cẩn thận, đảm bảo mọi tài sản của bạn được di chuyển một cách an toàn tuyệt đối. Hãy để chúng tôi san sẻ gánh nặng chuyển nhà cùng bạn.'
        ],
        cta: 'Sắp chuyển nhà? Gọi ngay để được tư vấn và khảo sát miễn phí!'
    }
  },
  {
    id: 'thue-xe-nguyen-chuyen',
    icon: Truck,
    title: 'Dịch vụ cho thuê xe tải nguyên chuyến',
    description: 'Dành cho khách hàng cần vận chuyển lượng hàng lớn, cần sự riêng tư và chủ động.',
    features: [
      'Hoàn toàn chủ động về thời gian',
      'Không gian xe riêng biệt, đảm bảo an toàn',
      'Bảo mật tuyệt đối cho hàng hóa giá trị cao',
      'Đa dạng tải trọng xe từ 1 đến 5 tấn'
    ],
    price: 'Giá tốt nhất',
    color: 'from-purple-500 to-purple-600',
    content: {
        heading: 'Chủ động và linh hoạt với xe tải nguyên chuyến',
        paragraphs: [
            'Khi bạn có một lượng hàng hóa lớn hoặc các mặt hàng cần được vận chuyển riêng biệt, dịch vụ cho thuê xe tải nguyên chuyến là giải pháp hoàn hảo. Bạn sẽ được toàn quyền sử dụng không gian xe, chủ động quyết định thời gian và lộ trình vận chuyển.',
            'Chúng tôi cung cấp đa dạng các loại xe tải với tải trọng khác nhau, phù hợp với mọi nhu cầu vận chuyển hàng hóa, chuyển kho xưởng, hay giao hàng cho đối tác. Dịch vụ đảm bảo tính riêng tư, an toàn và tốc độ nhanh nhất.'
        ],
        cta: 'Có lô hàng lớn cần vận chuyển? Liên hệ để thuê xe nguyên chuyến ngay!'
    }
  }
];
