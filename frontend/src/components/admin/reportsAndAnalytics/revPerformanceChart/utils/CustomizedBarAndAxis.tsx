// this is for my customized bar:

export const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  const { expected, paid } = payload;

  const fillHeight = (paid / expected) * height;

  // ✅ Move these OUTSIDE the return statement
  const r = Math.min(8, (width * 0.7) / 2, fillHeight / 2);
  const gx = x;
  const gy = y + (height - fillHeight);
  const gw = width;
  const gb = y + height;

  const path = `
    M ${gx + r} ${gy}
    L ${gx + gw - r} ${gy}
    A ${r} ${r} 0 0 1 ${gx + gw} ${gy + r}
    L ${gx + gw} ${gb}
    L ${gx} ${gb}
    L ${gx} ${gy + r}
    A ${r} ${r} 0 0 1 ${gx + r} ${gy}
    Z
  `;

  return (
    <g>
      {/* Light gray background bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#E9EBEF"
        rx={0}
        ry={0}
      />

      {/* ✅ Green filled portion with only top rounded */}
      <path d={path} fill="#188038" />
    </g>
  );
};




// this is for my customized axis:
export const CustomizedAxisTick = (props:any)=>{
  const {x,y,payload} = props;

  const words = payload.value.split(" ");

  return(
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fontSize={10}>
          {words.map((word:string,index:any)=>(
            <tspan key={index} x="0" dy={`${index * 1}em`}>
              {word}
            </tspan>
          ))}
      </text>
    </g>
  )
}