import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 w-10/12 mx-auto border-b 2'>
            <h1 className="text-4xl font-bold">Knowledge Cafa</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;