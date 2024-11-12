import { useParams } from 'next/navigation';
import { ReactElement } from 'react';

const LabelTypePage = (): ReactElement => {
    const params = useParams();
    const type = params?.type as string;

    return (
        <div className="mx-auto h-lvh w-4/5 mt-20">
            <h1 className="text-h4 text-neutral-800 font-semibold mb-8">
                {type === 'emoji' && '이모지 라벨 시작하기'}
                {type === 'text' && '텍스트 라벨 시작하기'}
                {type === 'custom' && '처음부터 라벨 만들기'}
                {type === 'csv' && 'CSV로 라벨 만들기'}
            </h1>
            <p className="text-neutral-600">
                {type === 'emoji' &&
                    '주로 사용하는 이모지 라벨로 시작해보세요!'}
                {type === 'text' && '이모지 없이 텍스트로 라벨을 만들어보세요!'}
                {type === 'custom' && '처음부터 새로운 라벨을 만들어보세요!'}
                {type === 'csv' &&
                    'CSV 파일을 업로드하여 라벨을 빠르게 만들어보세요!'}
            </p>
        </div>
    );
};

export default LabelTypePage;
