// 用标签联合类型 定义支付方式

// Cash 不包含其他额外信息
// PayPal 包含了给定的邮件地址
// Credit card 包含了卡号和安全码

// 对于以上每一种支付方式，我们都创建一个ts接口

interface Cash {
    kind: 'cash';
}

interface PayPal {
    kind: 'paypal';
    email: string;
}

interface CreditCard {
    kind: 'credit';
    cardNumber: string;
    securityCode: string;
}

// 每种类型都包含一个 kind 属性，这就是【可辨识属性(discriminant)】

type PaymentMethod = Cash | PayPal | CreditCard;  // payment类型是刚才定义的三种类型的联合类型，这样我们就明确了程序中任何一种支付方式都必须是这三种方式之一

function describePaymentMethod(method: PaymentMethod) {
    switch (method.kind) {   // 在每个case从句中，ts编译器会自动把联合类型收窄为它的一个成员类型
        case 'cash':
            return 'cash';
        case 'paypal':
            return `PayPal(${method.email})`;
        case 'credit':
            return `Credit card (${method.cardNumber})`
    }
}
// 本质上，编译器跟踪了程序的控制流来收窄标签联合类型