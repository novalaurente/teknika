import { Question } from './lib/interface';
import { client } from './lib/sanity';
import DisplayQuestions from './components/DisplayQuestions';

async function getData() {
  const query = `*[_type == "question"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Question[];

  return (
    <div>
      <DisplayQuestions data={data} />
    </div>
  );
}
