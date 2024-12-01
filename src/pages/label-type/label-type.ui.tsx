'use client';

import { useParams } from 'next/navigation';
import { ReactElement, useRef, useState } from 'react';
import { FiDownload, FiGithub, FiPlus, FiRefreshCw } from 'react-icons/fi';

import { Label } from '@/types/label';
import { generateRandomColor } from '@/utils/color';

const DEFAULT_LABELS: Record<string, Label[]> = {
    emoji: [
        { name: '🐛 bug', description: '버그 리포트', color: '#d73a4a' },
        { name: '✨ feature', description: '새로운 기능', color: '#0075ca' },
        { name: '📝 docs', description: '문서 작업', color: '#0075ca' },
        { name: '♻️ refactor', description: '코드 리팩토링', color: '#2b67c6' },
        { name: '🎨 style', description: '코드 스타일 변경', color: '#bf55ec' },
        { name: '⚡ performance', description: '성능 개선', color: '#f1c40f' },
    ],
    text: [
        { name: 'bug', description: '버그 리포트', color: '#d73a4a' },
        { name: 'feature', description: '새로운 기능', color: '#0075ca' },
        { name: 'documentation', description: '문서 관련', color: '#0075ca' },
        { name: 'enhancement', description: '개선사항', color: '#a2eeef' },
        { name: 'help wanted', description: '도움 필요', color: '#008672' },
        { name: 'question', description: '질문', color: '#d876e3' },
    ],
    custom: [
        { name: 'Label preview', description: '라벨 미리보기', color: '#000' },
    ],
    csv: [],
};

const LabelTypePage = (): ReactElement => {
    const params = useParams();
    const type = params?.type as string;
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [labels, setLabels] = useState<Label[]>(() => [
        ...(DEFAULT_LABELS[type] || []),
    ]);

    const handleAddNewRow = () => {
        setLabels((prev) => [
            ...prev,
            { name: '', description: '', color: generateRandomColor() },
        ]);
    };

    const updateLabel = (index: number, field: keyof Label, value: string) => {
        setLabels((prev) =>
            prev.map((label, i) =>
                i === index ? { ...label, [field]: value } : label,
            ),
        );
    };

    const handleExportCSV = () => {
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            labels
                .map(
                    (label) =>
                        `${label.name},${label.description},${label.color}`,
                )
                .join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'labels.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mx-auto mt-10 w-11/12 max-w-5xl">
            <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                {type === 'emoji' && '이모지 라벨 시작하기'}
                {type === 'text' && '텍스트 라벨 시작하기'}
                {type === 'custom' && '처음부터 라벨 만들기'}
                {type === 'csv' && 'CSV로 라벨 만들기'}
            </h1>

            <div className="overflow-hidden rounded-md border border-gray-300">
                <div className="grid grid-cols-12 gap-4 border-b bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-700">
                    <div className="col-span-2">라벨 미리보기</div>
                    <div className="col-span-2">이름</div>
                    <div className="col-span-5">설명</div>
                    <div className="col-span-2">색상</div>
                    <div className="col-span-1 text-right">액션</div>
                </div>

                {labels.map((label, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-12 items-center gap-4 border-b px-6 py-4 last:border-0"
                    >
                        <div className="col-span-2">
                            <span
                                className="inline-block rounded-full px-3 py-1 text-sm font-medium"
                                style={{
                                    backgroundColor: label.color,
                                    color: '#fff',
                                }}
                            >
                                {label.name || 'Label preview'}
                            </span>
                        </div>
                        <div className="col-span-2">
                            <input
                                type="text"
                                value={label.name}
                                onChange={(e) =>
                                    updateLabel(index, 'name', e.target.value)
                                }
                                placeholder="라벨 이름"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="col-span-5">
                            <input
                                type="text"
                                value={label.description}
                                onChange={(e) =>
                                    updateLabel(
                                        index,
                                        'description',
                                        e.target.value,
                                    )
                                }
                                placeholder="설명"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="col-span-2 flex items-center gap-2">
                            <input
                                type="color"
                                value={label.color}
                                onChange={(e) =>
                                    updateLabel(index, 'color', e.target.value)
                                }
                                className="size-10 border border-gray-300"
                            />
                            <input
                                type="text"
                                value={label.color}
                                onChange={(e) =>
                                    updateLabel(index, 'color', e.target.value)
                                }
                                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <button
                                onClick={() =>
                                    updateLabel(
                                        index,
                                        'color',
                                        generateRandomColor(),
                                    )
                                }
                                className="rounded-md border border-gray-300 p-2 hover:bg-gray-50 active:bg-gray-100"
                            >
                                <FiRefreshCw className="text-gray-500" />
                            </button>
                        </div>
                        <div className="col-span-1 text-right">
                            <button
                                onClick={() =>
                                    setLabels((prev) =>
                                        prev.filter((_, i) => i !== index),
                                    )
                                }
                                className="text-red-500 hover:text-red-700"
                            >
                                삭제
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex gap-3">
                <button
                    onClick={handleAddNewRow}
                    className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    <FiPlus /> 새 라벨
                </button>
                <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    <FiDownload /> CSV로 추출
                </button>
                <button className="flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
                    <FiGithub /> GitHub에 추가
                </button>
            </div>
        </div>
    );
};

export default LabelTypePage;
