export default function TabButton({children, onSelect, isSelected}){
    // document.querySelector('button').addEventListener('click',()=>{});
    // function handleClick(){
    //     console.log("Hello world!")
    // }

    // só se usa o nome da função, sem os () pq a função tá sendo passada como um valor, 
    // nesse caso ela só vai ser executada pelo próprio react quando o evento for inicializado
    return( 
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}