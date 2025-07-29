import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { NEWS_DATA } from '../../constants/data';

export const NewsSection = () => (
    <Section background="bg-gradient-to-br from-gray-50 to-blue-50">
        <SectionHeader
            title="Últimas Novedades"
            subtitle="Mantente informado sobre nuestras actividades"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_DATA.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}
        </div>
    </Section>
);

const NewsCard = ({ news }) => (
    <Card className="overflow-hidden group h-full flex flex-col">
        <div className="relative overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-white opacity-50" />
            </div>
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                {news.category}
            </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <div className="text-sm text-gray-500 mb-2">{news.date}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {news.title}
            </h3>
            {news.excerpt && (
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{news.excerpt}</p>
            )}
            <div className="mt-auto">
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    </Card>
);