import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { getAllPromptsRoute } from './routes/getAllPromps';
import { uploadVideoRoute } from './routes/uploadVideo';
import { createTranscriptionRoute } from './routes/createTranscription';
import { generateAiCompletionRoute } from './routes/generateAICompletion';

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server running on port 3333')
})