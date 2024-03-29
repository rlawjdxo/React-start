//색상 선택 컴포넌트 만들기

import { ColorConsumer } from "../contexts/Color";

//이번에는 Context의 actions에 넣어 준 함수를 호출하는 컴포넌트를 아래와 같이 만들어 본다
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: 'flex' }}>
                        {colors.map(color => (
                            <div key={color} style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault(); //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                                    actions.setSubColor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};
export default SelectColors;