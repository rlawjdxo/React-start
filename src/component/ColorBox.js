import { ColorConsumer } from "../contexts/Color";

const ColorBox = () => {
    return (
        <ColorConsumer>
            {({ state }) => (
                <div>
                    <div style={{ width: '64px', height: '64px', background: state.color }} />
                    <div style={{ width: '32px', height: '32px', background: state.subColor }} />
                </div>
            )}
        </ColorConsumer>
    );
};
export default ColorBox;