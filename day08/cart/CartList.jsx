import CartItem from "./CartItem";

const CartList = ({data,onDel,onDelAll,onEdit,hap}) => {
    return (
        <div className="con2">
            <p>
                <button  className="btn"onClick={onDelAll}>전체삭제</button>
                <span className="total">
                {/*     총금액 :  {data.reduce((acc, curr)=>{
                        return acc + curr.total
                    }, 0 )
                    } */}
                    총금액: {hap}
                </span>
            </p>        
            <ul className="list">
                {data.map(item => <CartItem item={item} key={item.id} onDel={onDel} onEdit={onEdit}/>)}
            </ul>
        </div>
    );
};

export default CartList;