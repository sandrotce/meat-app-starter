class Order {
  public address : string;
  public numero: number;
  public optionAddress: string;
  public paymentOption: string;
  public OderItems : OrderItem[] = []

}

class OrderItem{
  constructor(public quantity:number, public meduId:string){}
}

export {Order, OrderItem}
