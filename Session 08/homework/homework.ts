abstract class Account {
    id: number;
    userName: string;
    private password: string;
    isLogin: boolean = false;
    role: string;
    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
    }
    abstract login(): void;
    logout(): void {
        if (this.isLogin === true) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        } else {
            console.log("Chưa đăng nhập");

        }
    }
}

class UserAccount extends Account {
    status: string = "Active";
    constructor(id: number, userName: string, password: string) {
        super(id, userName, password, "User")
    }
    login(): void {
        if (this.status === "Active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

let userAccounts: UserAccount[] = [];
class AdminAccount extends Account {
    constructor(id: number, userName: string, password: string) {
        super(id, userName, password, "Admin")
    }
    login(): void {
        console.log("Đăng nhập thành công");
    }
    banUser(userId: number): void {
        let banUserAcc = userAccounts.find((account) => account.id === userId);
        if (banUserAcc) {
            banUserAcc.status = "banned"
            console.log(`Khóa tài khoản id: ${userId}`);
        } else {
            console.log(`Không tìm thấy id: ${userId}`);
        }
    }
}

let adminAcc = new AdminAccount(1, "admin", "12345")
let userAcc1 = new UserAccount(1, "user1", "12345")
userAccounts.push(userAcc1);
userAcc1.logout()
userAcc1.login()
userAcc1.logout()
adminAcc.banUser(1)