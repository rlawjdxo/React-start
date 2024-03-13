import React, { useRef, useState, useCallback, onToggle } from 'react'

const Student = () => {
  const nextNo = useRef(1);
  const refName = useRef();
  const [student, setStudent] = useState ({no: nextNo.current, name: '',dept:'전기', year:'1', isBreak:false});
  const {name, dept, year, isBreak } = student; //비구조 할당

  const onChange = useCallback((e)=>{
    setStudent({
      ...student,
      [e.target.name]:e.target.value,
    })
  }, [student]);

  const onSubmit = useCallback((e)=>{
    e.preventDefault(); //submit 이벤트 방지

    if(refName.current.value ===''){
      alert('이름 입력');
      refName.current.focus();
      return;
    }

    if(!window.confirm(`${student.no}번 학생 등록`)) return;

    alert(`${ JSON.stringify({student}, null, 4)} \n등록 완`);

    nextNo.current = nextNo.current + 1; //번호가 1증가 값이 변경되어도 렌더링 x
    refName.current.focus();

  setStudent({ no: nextNo.current, name: '', dept: '전기', year: '1', isBreak: false }); 
}, [student]);

return (
  <form className='form' onSubmit={onSubmit} style={{width:500}}>
    <div className='line'>
        <input type='text' name='name' ref={refName} value={name} placeholder='이름' onChange={onChange}/>
    </div>
    <div className='line'>
      <select name='dept' onChange={onChange} value={dept}>
          <option value="컴정">컴공과</option>
          <option value="전기">전기과</option>
          <option value="토목">토목과</option>
      </select>
    </div>
    <div className='line'>
      <input type='radio' onChange={ onChange } name='year' value="1" checked={ year==='1' && true }/> 1학년
      <input type='radio' onChange={ onChange } name='year' value="1" checked={ year==='2' && true }/> 2학년
      <input type='radio' onChange={ onChange } name='year' value="1" checked={ year==='3' && true }/> 3학년
      <input type='radio' onChange={ onChange } name='year' value="1" checked={ year==='4' && true }/> 4학년
    </div>
    <div className='line'>
      <input type='checkbox' onClick={ onToggle } checked={isBreak} readOnly/>휴학중
    </div>
    <div className='buttons'>
      <button className='button sky'>저장</button>
      <button className='button sky'>취소</button>
    </div>
  </form>
)

}


export default Student