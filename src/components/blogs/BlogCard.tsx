'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IBlog } from './interface';

export default function BlogCard({ title, slug, date, tags, image }: IBlog) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blogs/${slug}`)}
      className="cursor-pointer"
    >
      <Card>
        <CardHeader className="flex-col items-start p-4 gap-2">
          <h4 className="font-bold text-2xl">{title}</h4>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Chip key={tag} variant="bordered" size="sm">
                {tag}
              </Chip>
            ))}
          </div>
          <small className="text-default-500">{date}</small>
        </CardHeader>
        <CardBody className="overflow-visible p-4 pt-0">
          <Image
            alt="Card background"
            className="w-full aspect-video rounded-lg"
            src={image}
            width={160}
            height={90}
          />
        </CardBody>
      </Card>
    </div>
  );
}
