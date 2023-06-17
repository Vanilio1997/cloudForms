
interface IIconProps{
   height?: string
   weight?: string
   imageUrl?: string;
}

export const Icon = ({height = '12px',weight='12px',imageUrl}:IIconProps) => {
    return (
        <img src={imageUrl} width={weight} height={height} alt="logo"/>
    );
};
