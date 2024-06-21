import { useContext } from "react";
import { MainConatiner } from "./styledComponents";
import ThemeContext from "../../context/ThemeContext";
import Header from "../Header";
import {ResponsiveContainer, Text} from './styledComponents'

const Cart = () => {
    const {isDarkMode} = useContext(ThemeContext)

    return (
        <>
            <Header/>
            <MainConatiner isdarkmode={isDarkMode}> 
                <ResponsiveContainer>
                    <Text isdarkmode={isDarkMode}> 
                        In a bustling city park, a lone jogger pounded the pavement, earbuds sealing him off 
                        from the symphony of urban sounds. Sunlight dappled through the leaves of towering oak trees,
                        casting dancing shadows on his path. A cool breeze carried the scent of freshly cut grass and 
                        the distant rumble of traffic. As he rounded a corner, a playful squirrel darted across his path, 
                        momentarily breaking his focus but eliciting a smile. He continued his run, invigorated by the 
                        fresh air and the quiet determination that fueled his every stride.
                    </Text>
                    <Text isdarkmode={isDarkMode}>
                        On a windswept cliff overlooking a churning sea, a weathered lighthouse stood sentinel. Its once pristine 
                        white paint was now streaked with salt and rust, a testament to years of battling the elements. Inside, a 
                        lone keeper meticulously polished the brass lamp, casting a warm glow that defied the wild storm raging outside. 
                        The rhythmic crash of waves against the rocks formed a constant counterpoint to the steady tick of the clock. 
                        He paused occasionally to peer through the thick glass window, his gaze sweeping the tempestuous horizon, 
                        a silent guardian ensuring the safety of unseen ships.
                    </Text>

                    <Text isdarkmode={isDarkMode}>
                        The cozy bookstore overflowed with stories, each book a portal waiting to be unlocked. Sunlight streamed 
                        through dusty windows, illuminating the worn spines lining the shelves. A gentle silence hung in the air, 
                        punctuated only by the soft rustle of turning pages and the occasional sigh of contentment. A young girl,
                        perched on a creaky floorboard with a book cradled in her lap, was lost in a world of adventure. Her brow 
                        furrowed in concentration one moment, then broke into a wide grin the next. Outside, the city hummed with activity, but here, within these walls, imagination reigned supreme.
                    </Text>
                </ResponsiveContainer>
            </MainConatiner>
        </>
    )
}


export default Cart