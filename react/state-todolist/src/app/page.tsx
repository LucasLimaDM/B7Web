"use client"

import { itemList } from '@/types/itemList';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
const font = Poppins({weight: '500', subsets: ['latin']});

function Page() {
    
    const [itemsList, setItemsList] = useState<itemList[]>([    
        {
            nameItem: 'Fazer bolo',
            textItem: 'Preparar bolos sem ovo para esposa',
            checked: false
        },
        {
            nameItem: 'Cuidar da emília',
            textItem: 'Por ração para cachorrinha Emília',
            checked: false
        }

    ])
    const [nameItem, setNameItem] = useState('')
    const [textItem, setTextItem] = useState('')
    const [checked, setChecked] = useState(false)
    const [showError, setShowError] = useState(false)
    
    function createItemsList(nameItem: string, textItem: string, checked: boolean ){
        setItemsList([
            ...itemsList,
            {
                nameItem: nameItem,
                textItem: textItem,
                checked: false
            }
        ])
    }

    function cleanFields(){
        setNameItem('');
        setTextItem('');
    }

    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>){
        setNameItem(e.target.value);
        console.log(e)
        if(e.target.value.trim()) setShowError(false);

    }

    function deleteItem(index: number) {
    console.log('index :', index);
        const deletedList = itemsList.filter((item, key) => key !== index)

        console.log(deletedList)
        setItemsList(deletedList)
    }

    function editItem(index: number){
        itemsList.map((item, key) => {
            if(key === index){
                setNameItem(item.nameItem)
                setTextItem(item.textItem)
            }
        })

        deleteItem(index);
    }

    function checkItem(index: number){
        const newList: itemList[] = [];
        itemsList.map((item, key) => {
            if(key === index){
                item.checked = !item.checked;
            }

            newList.push(item)
        })

        setItemsList(newList);
    }

    function handleAddButton(){
        if(nameItem.trim() != ''){
            createItemsList(nameItem.trim(), textItem.trim(), false);
            cleanFields();
        } else {
            setShowError(true);
        }
    }

    return ( 
        <div className={font.className + ' flex flex-col items-center justify-center '}>

            <div className='text-2xl w-full p-5'>To Do List Especial</div>

            <div className=' border rounded-md border-slate-200'>

                <p className='text-xl p-3'>Nova Tarefa</p>
                <input 
                    type="text"
                    className='w-3/4 outline-none p-2 text-lg bg-slate-50 ml-4 mt-4'
                    value={nameItem}
                    onChange={e => handleChangeName(e)}
                    placeholder='Nome da tarefa'
                />
                <input 
                    type="text"
                    className='w-3/4 outline-none px-2 p-2 bg-slate-50 ml-4 mb-4'
                    value={textItem}
                    onChange={e => setTextItem(e.target.value)}
                    placeholder='Descrição da tarefa'
                />
                

                <div className='flex justify-end mb-3'>

                    <button className='bg-red-500 p-2 text-white rounded-md px-3 mx-3' onClick={cleanFields}>Cancelar</button>
                    <button className='bg-green-500 p-2 text-white rounded-md px-3 mx-3' onClick={handleAddButton}>Adicionar</button>
                </div>

                {showError && 

                    <div className='p-4 text-red-700'>Atenção! Você precisa preencher ao menos o nome para criar uma tarefa</div>

                }

            </div>

            


            <div className='w-full'>

                {
                    itemsList.map((item, index) => (
                        <div key={index} className={ (item.checked ? 'line-through ' : ' ') + '  flex justify-around mt-2 p-5 mx-6 hover:bg-gray-50'}>
                            <div className='flex-1'>
                                <div className='text-xl'>{item.nameItem}</div>
                                <div className="text-md">{item.textItem}</div>
                            </div>
                                <div className="flex justify-center items-center gap-4 relative">
                                    <button className='' onClick={e => editItem(index)}>
                                    <Image
                                        src="/pencil.svg"
                                        alt="edit"
                                        width={30}
                                        height={30}
                                        
                                    />
                                    </button>

                                    <button className='' onClick={() => deleteItem(index)}><Image
                                        src="/close.svg"
                                        alt="edit"
                                        width={20}
                                        height={20}
                                    /></button>

                                    <div className={(item.checked ? 'bg-green-500' : '')  + ' w-4 h-4 border border-gray-500 rounded ml-2 p-2 relative cursor-pointer'} onClick={e => checkItem(index)}>

                                        
                                        {item.checked &&
                                        
                                            <Image
                                                src="/correct.svg"
                                                alt="done"
                                                width={16}
                                                height={16}
                                                className={(item.checked ? '' : '') + 'absolute top-0 right-0 cursor-pointer'}
                                            />

                                        }

                                    </div>

                                    
                                </div>

                                

                            

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Page;