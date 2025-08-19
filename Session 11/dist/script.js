//Xây dựng lớp thành viên
class Member {
    memberId;
    name;
    contact;
    borrowedItems = [];
    constructor(id, name, contact) {
        this.memberId = id;
        this.name = name;
        this.contact = contact;
    }
    getDetails() {
        return `Member id: ${this.memberId}
                Name: ${this.name}
                Contact: ${this.contact}
                Borrowed items: ${this.borrowedItems.toString()}`;
    }
}
//Xây dựng lớp LibraryItem
class LibraryItem {
    id;
    title;
    isAvailable = true;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    borrowItem() {
        this.isAvailable = false;
    }
    returnItem() { }
    getLoanPeriod() {
        return 0;
    }
}
//Xây dựng các lớp con của LibraryItem
class Book extends LibraryItem {
    author;
    constructor(id, title, author) {
        super(id, title);
        this.author = author;
    }
    calculateLateFee(daysOverdue) {
        return 1;
    }
    getItemType() {
        return "Book";
    }
}
class Magazine extends LibraryItem {
    author;
    constructor(id, title, author) {
        super(id, title);
        this.author = author;
    }
    calculateLateFee(daysOverdue) {
        return 1;
    }
    getItemType() {
        return "Magazine";
    }
}
//Xây dựng lớp Loan
class Loan {
    loanId;
    member;
    item;
    dueDate;
    isReturned = false;
    constructor(id, member, item, dueDate) {
        this.loanId = id;
        this.member = member;
        this.item = item;
        this.dueDate = dueDate;
    }
    getDetails() {
        return `Loan id: ${this.loanId}
                Member: ${this.member.getDetails()}
                Item id: ${this.item.id}
                Item title: ${this.item.title}
                Due date: ${this.dueDate}`;
    }
}
//Xây dựng lớp Library
class Library {
    items = [];
    members = [];
    loans = [];
    addItem(item) {
        //Đẩy vào mảng tài liệu
        this.items.push(item);
    }
    addMember(name, contact) {
        //Khởi tạo thành viên mới
        let newMember = new Member(this.members.length, name, contact);
        //Đẩy thành viên vào mảng
        this.members.push(newMember);
        return newMember;
        //Trả về
    }
    borrowItem(memberId, itemId) {
        //Tìm thành viên có id được nhập
        let member = this.members.find((member) => member.memberId === memberId);
        //Tìm tài liệu có id được nhập
        let item = this.items.find((item) => item.id === itemId);
        if (member && item && item.isAvailable) {
            //Khởi tạo lượt mượn
            let dateString = String(prompt("Nhập ngày hết hạn trả:"));
            let dueDate = new Date(dateString);
            let loan = new Loan(this.loans.length, member, item, dueDate);
            item.borrowItem();
            //Đẩy vào mảng lượt mượn
            this.loans.push(loan);
            //Trả về kết quả
            return loan;
        }
        return null;
    }
    // returnItem(itemId: number): number { }
    listAvailableItems() {
        let availableItems = this.items.filter((item) => item.isAvailable);
        console.log(availableItems);
    }
    listMemberLoans(memberId) {
        let memberLoans = this.loans.filter((loan) => loan.member.memberId === memberId);
        console.log(memberLoans);
    }
    // calculateTotalLateFees(): number { }
    getItemTypeCount() {
        let bookCount = 0;
        let magazineCount = 0;
        this.items.forEach((item) => {
            if (item.getItemType() === "Sách") {
                bookCount++;
            }
            else {
                magazineCount++;
            }
        });
        console.log(` Số lượng sách: ${bookCount}
                    Số lượng tạp chí: ${magazineCount}`);
    }
    updateItemTitle(itemId, newTitle) {
        let updateIndex = this.items.findIndex((item) => item.id === itemId);
        if (this.items[updateIndex]) {
            this.items[updateIndex].title = newTitle;
        }
    }
    findEntityById(collection, id) {
        return collection.find((item) => {
            if ("id" in item) {
                return item.id === id;
            }
            if ("memberId" in item) {
                return item.memberId === id;
            }
        });
    }
}
//Xây dựng menu
function main() {
    let choice;
    let library = new Library();
    let memberId;
    do {
        choice = prompt(`
    1. Thêm thành viên mới.
    2. Thêm tài liệu mới (cho chọn loại: Sách, Tạp chí).
    3. Mượn tài liệu (chọn thành viên, chọn tài liệu).
    4. Trả tài liệu (hiển thị phí phạt nếu có).
    5. Hiển thị danh sách tài liệu có sẵn (sử dụng filter).
    6. Hiển thị danh sách tài liệu đang mượn của một thành viên (sử dụng filter).
    7. Tính và hiển thị tổng phí phạt đã thu (sử dụng reduce).
    8. Thống kê số lượng từng loại tài liệu (sử dụng reduce hoặc map).
    9. Cập nhật tiêu đề một tài liệu (sử dụng findIndex).
    10. Tìm kiếm thành viên hoặc tài liệu theo ID (sử dụng hàm generic đã tạo).
    11. Thoát chương trình.
    Lựa chọn của bạn: 
    `);
        switch (choice) {
            case '1':
                //Yêu cầu nhập tên
                let memberName = String(prompt("Nhập tên thành viên mới:"));
                //Yêu cầu nhập SĐT
                let memberContact = String(prompt("Nhập liên hệ thành viên mới:"));
                library.addMember(memberName, memberContact);
                break;
            case '2':
                //Nhập thông tin tài liệu
                let itemTitle;
                let item;
                let itemType = String(prompt("Nhập loại tài liệu (Sách, Tạp chí):"));
                switch (itemType) {
                    case 'Sách':
                        itemTitle = String(prompt("Nhập tiêu đề tài liệu:"));
                        //Khởi tạo tài liệu
                        item = new Book(library.items.length, itemTitle, itemType);
                        //Đẩy vào mảng tài liệu
                        library.addItem(item);
                        break;
                    case 'Tạp chí':
                        itemTitle = String(prompt("Nhập tiêu đề tài liệu:"));
                        //Khởi tạo tài liệu
                        item = new Magazine(library.items.length, itemTitle, itemType);
                        //Đẩy vào mảng tài liệu
                        library.addItem(item);
                        break;
                    default:
                        console.log("Loại tài liệu không hợp lệ");
                }
                break;
            case '3':
                //Nhập id thành viên và tài liệu
                memberId = Number(prompt("Nhập id thành viên"));
                let titleId = Number(prompt("Nhập id tài liệu"));
                library.borrowItem(memberId, titleId);
                break;
            case '4': break;
            case '5':
                library.listAvailableItems();
                break;
            case '6':
                memberId = Number(prompt("Nhập id thành viên cần xem danh sách mượn:"));
                library.listMemberLoans(memberId);
                break;
            case '7': break;
            case '8':
                library.getItemTypeCount();
                break;
            case '9':
                //Nhập id và tiêu đề mới
                let newTitle = String(prompt("Nhập tiêu đề tài liệu:"));
                let itemId = Number(prompt("Nhập id tài liệu:"));
                library.updateItemTitle(itemId, newTitle);
                break;
            case '10':
                break;
            case '11':
                console.log("Thoát chương trình");
                break;
            default: console.log("Lựa chọn không hợp lệ");
        }
    } while (choice != '11');
}
main();
export {};
//# sourceMappingURL=script.js.map