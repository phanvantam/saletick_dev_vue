var app = new Vue({
	el: '#profile',
    data: {
		show: {
			about: true, 
			study: false,
			product: false
		},
		info: {
			avatar: "",
			fullname: 'NGÔ HỒNG SƠN',
			sologan: 'Muốn làm giầu thì phải kiên trì(Hoàn thành mục tiêu)',
			email: 'ngoson919597@gmail.com',
			phone: '0392 999 601',
			company: 'Công ty cổ phần Vtechome',
			position: 'Lập trình viên web frontend, Back-End',
			location: '38 liền kề 10 khu đô thị Văn Khê,Hà Đông, Hà Nội',
			website: 'livefb.vn',
			github: 'github.com/ngoson919597'
		},
		language: [
			{name: 'php', lv: 2},
			{name: 'laravel', lv: 2},
			{name: 'Mysql - SQL', lv: 2},
			{name: 'Javascript', lv: 2},
			{name: 'vue js', lv: 1},
			{name: 'Bootstrap', lv: 2},
			{name: 'HTML - CSS', lv: 2},
			{name: 'Git', lv: 2},
		],
		show_timeline: 0,
		study: [
			{
				time: '3/2019 - 6/2020',
				content: 'Học lập trình web tại trung tâm Vietpro'
			},
			{
				time: '08-2020 - Hiện tại',
				content: 'Lập trình viên web Front-end, Back-End tại công ty cổ phần Vteckhome'
			}
		],
		products: [
			[
				{
					label: 'Tên',
					value : '<a href="https://livefb.vn/dang-nhap" target="__self">Quản lý và đăng livestream trên facebook</a>',
				},
				{
					label: 'Mô tả',
					value: 'Product mới của công ty. <br />Hỗ trợ quản lý Khách hàng, quản lý video, quản lý tài khoản liên kết facebook, quản lý mã kích hoạt...'
				},
				{
					label: 'Vai trò',
					value: '- Phát triển module <br />+ Quản lý sản phẩm <br />+ Chia gói dịch vụ, phân quyền user <br />+ Các tác vụ tài khoản(Log in/up ...) <br />- Phát triển front-end <br />- Tìm hiểu và kết nối API với các sàn TMĐT'
				},
				{
					label: 'Công nghệ',	
					value: 'Laravel - php'
				},
				{
					label: 'Thời gian',
					value: '2020 - 2021'
				},
			]
		]
	},
    methods: {
		checkShow(type) {
			for(let k in this.show) {
				if(k !== type) {
					this.show[k] = false;
				}
			}
			this.show[type] = true;
		},

	}
})