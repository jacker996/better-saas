import { getMDXComponents } from '@/components/mdx-components';
import { routing } from '@/i18n/routing';
import { getDocsPage, getDocsPages } from '@/lib/fumadoc/docs';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const page = getDocsPage(slug || [], locale);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const params: { locale: string; slug?: string[] }[] = [];

  for (const locale of routing.locales) {
    const pages = getDocsPages(locale);
    for (const page of pages) {
      const slug = page.slugs.slice(1);
      params.push({
        locale,
        slug: slug.length > 0 ? slug : undefined,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const page = getDocsPage(slug || [], locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
