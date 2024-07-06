import p1 from "../assets/1.jpg";
import p2 from "../assets/2.jpg";
import p3 from "../assets/3.jpg";
import p4 from "../assets/4.jpg";
import p5 from "../assets/5.jpg";
import p6 from "../assets/6.jpg";
import p7 from "../assets/7.jpg";
import p8 from "../assets/8.jpg";
import p9 from "../assets/9.jpg";
import p10 from "../assets/10.jpg";
import p11 from "../assets/11.jpg";
import p12 from "../assets/12.jpg";
import p13 from "../assets/13.jpg";
import p14 from "../assets/14.jpg";
import p15 from "../assets/15.jpg";
import p16 from "../assets/16.jpg";
import p18 from "../assets/18.jpg";
import p19 from "../assets/19.jpg";
import p20 from "../assets/20.jpg";
import p23 from "../assets/23.jpg";
import p24 from "../assets/24.jpg";
import p25 from "../assets/25.jpg";


/* cards */
import a1 from "../assets/card/1-a.jpg";
import a2 from "../assets/card/2-a.jpg";
import b2 from "../assets/card/2-b.jpg";
import a3 from "../assets/card/3-a.jpg";
import b3 from "../assets/card/3-b.jpg";
import a4 from "../assets/card/4-a.jpg";
import b4 from "../assets/card/4-b.jpg";
import a5 from "../assets/card/5-a.jpg";
import b5 from "../assets/card/5-b.jpg";
import a6 from "../assets/card/6-a.jpg";
import a7 from "../assets/card/7-a.jpg";
import a8 from "../assets/card/8-a.jpg";
import b8 from "../assets/card/8-b.jpg";
import c8 from "../assets/card/8-c.jpg";
import a9 from "../assets/card/9-a.jpg";
import a10 from "../assets/card/10-a.jpg";
import a11 from "../assets/card/11-b.jpg";
import b11 from "../assets/card/11-a.jpg";
import a12 from "../assets/card/12-a.jpg";
import b12 from "../assets/card/12-b.jpg";
import a13 from "../assets/card/13-a.jpg";
import a14 from "../assets/card/14-a.jpg";
import a15 from "../assets/card/15-a.jpg";
import b15 from "../assets/card/15-b.jpg";
import a16 from "../assets/card/16-a.jpg";

import a18 from "../assets/card/18-a.jpg";
import b18 from "../assets/card/18-b.jpg";
import a19 from "../assets/card/19-a.jpg";
import a20 from "../assets/card/20-a.jpg";
import b20 from "../assets/card/20-b.jpg";
import a23 from "../assets/card/23-a.jpg";
import a24 from "../assets/card/24-a.jpg";
import b24 from "../assets/card/24-b.jpg";
import a25 from "../assets/card/25-a.jpg";





 const pics = [
    {   no:1,
        pic:p1,
        a:a1,
        double: true
    },
    {   no:2,
        pic:p2,
        double:false,
        a:a2,
        b:b2
    },
    {   
        no: 3,
        pic: p3,
        a: a3,
        b: b3,
        double: true
    },
    {   
        no: 4,
        pic: p4,
        double: true,
        a: a4,
        b:b4
    },{   
        no: 5,
        pic: p5,
        a: a5,
        b: b5,
        double: true
    },
    {   
        no: 6,
        pic: p6,
        double: true,
        a: a6
    },
    {   
        no: 7,
        pic: p7,
        a: a7,
        double: true
    },
    {   
        no: 8,
        pic: p8,
        double: true,
        a: a8,
        b: b8,
        c: c8
    },
    {   
        no: 9,
        pic: p9,
        double: true,
        a: a9
    },
    {   
        no: 10,
        pic: p10,
        double: true,
        a: a10,
    },
    {   
        no: 11,
        pic: p11,
        double: true,
        a: a11,
        b: b11
    },
    {   
        no: 12,
        pic: p12,
        double: true,
        a: a12,
        b: b12
    },
    {   
        no: 13,
        pic: p13,
        double: true,
        a: a13,
    },
    {   
        no: 14,
        pic: p14,
        double: true,
        a: a14,
    },
    {   
        no: 15,
        pic: p15,
        double: true,
        a: a15,
        b: b15
    },
    {   
        no: 16,
        pic: p16,
        double: true,
        a: a16
    },
/*     {   
        no: 17,
        pic: p17,
        double: true,
        a: a17
    }, */
    {   
        no: 18,
        pic: p18,
        double: false,
        a: a18,
        b:b18
    },
    {   
        no: 19,
        pic: p19,
        double: true,
        a: a19
    },
    {   
        no: 20,
        pic: p20,
        double: true,
        a: a20,
        b:b20
    },
/*     {   
        no: 21,
        pic: p21,
        double: true,
        a: a21,
    },
    {   
        no: 22,
        pic: p22,
        double: true,
        a: a22,
    } */
        {   
            no: 23,
            pic: p23,
            double: true,
            a: a23,
        },{   
            no: 24,
            pic: p24,
            double: true,
            a: a24,
            b: b24
        },{   
            no: 25,
            pic: p25,
            double: true,
            a: a25,
        },
];

const canvasSizes = [
    {   
        no:1,
        a:{
            x1:1080,
            y1:667,
            x2:1080,
            y2:1670
         },
         b:{
            x1:800,
            y1:367,
            x2:1100,
            y2:1625
         }
    },{
        no:2,
        a:{
            x1:1090,
            y1:675,
            x2:1100,
            y2:1665
        },b:{
            x1:1090,
            y1:675,
            x2:1100,
            y2:1665
        }
    },
    {
        no:3,
        a:{
            x1:1090,
            y1:675,
            x2:1100,
            y2:1665
        },b:{
            x1:1090,
            y1:675,
            x2:1100,
            y2:1665
        }
    },
    {
        no:4,
        a:{
            x1:1090,
            y1:675,
            x2:1100,
            y2:1665
        },b:{
            x1:1090,
            y1:675,
            x2:1100,
            y2:1665
        }
    },
    {
        no:5,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        },b:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        },c:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:6,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:7,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:8,
        a:{
            x1:1090,
            y1:610,
            x2:1100,
            y2:1625
        }
    },
    {
        no:9,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:10,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        },b:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:11,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:12,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:13,
        a:{
            x1:1090,
            y1:590,
            x2:1100,
            y2:1625
        },b:{
            x1:1090,
            y1:590,
            x2:1100,
            y2:1625
        }
    },
    {
        no:14,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        },b:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:15,
        a:{
            x1:1090,
            y1:590,
            x2:1100,
            y2:1625
        },b:{
            x1:1090,
            y1:610,
            x2:1100,
            y2:1625
        }
    },
    {
        no:16,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:17,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:18,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        },b:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:19,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:20,
        a:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        },b:{
            x1:1090,
            y1:560,
            x2:1100,
            y2:1625
        }
    },
    {
        no:21,
        a:{
            x1:1090,
            y1:620,
            x2:1100,
            y2:1625
        }
    },
    {
        no:22,
        a:{
            x1:1090,
            y1:680,
            x2:1100,
            y2:1625
        }
    }

]
export {canvasSizes}
export default  pics;