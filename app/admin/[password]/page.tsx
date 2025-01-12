import { authenticateQuery } from '@/features/admin/utils/authenticateQuery';
import { VoiceRecorder } from '@/features/admin/voice-recorder/voice-recorder';

const Page = async ({ params }: { params: { password: string } }) => {
  authenticateQuery(params.password);

  return (
    <>
      <h1>Admin Page</h1>
      <hr />
      <VoiceRecorder />
    </>
  );
};

export default Page;
