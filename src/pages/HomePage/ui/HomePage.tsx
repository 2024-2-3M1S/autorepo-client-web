const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center text-center py-20 bg-gray-50 mt-20 px-8 w-lvw">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                Github Repo의 모든 것
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
                깃허브 프로젝트 초기세팅 이제 편하고 빠르게 하자!
                <br />
                3분 1초를 통해서 초기세팅을 빠르고 간편하게 시작해보세요!
            </p>
            <div className="flex space-x-4 mb-20">
                <button className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-700">
                    바로 시작하기
                </button>
                <button className="px-6 py-3 border border-neutral-900 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100">
                    템플릿 구성하기
                </button>
            </div>
            <div className="flex space-x-8 max-w-4xl my-10">
                <img
                    src="/image1.png"
                    alt="Image 1"
                    className="w-40 h-40 object-cover rounded-md"
                />
                <img
                    src="/image1.png"
                    alt="Image 2"
                    className="w-40 h-40 object-cover rounded-md"
                />
                <img
                    src="/image1.png"
                    alt="Image 3"
                    className="w-40 h-40 object-cover rounded-md"
                />
                <img
                    src="/image1.png"
                    alt="Image 4"
                    className="w-40 h-40 object-cover rounded-md"
                />
            </div>
        </div>
    );
};

export default HomePage;
