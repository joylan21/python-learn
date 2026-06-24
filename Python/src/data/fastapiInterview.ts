import type { Category } from './types';
import { fastapiSection2 } from './fastapiInterview2';
import { fastapiSection3 } from './fastapiInterview3';
import { fastapiSection4 } from './fastapiInterview4';
import { fastapiSection5 } from './fastapiInterview5';
import { fastapiSection6 } from './fastapiInterview6';
import { fastapiSection7 } from './fastapiInterview7';

export const fastapiInterview: Category = {
  id: 'interview-fastapi',
  title: 'FastAPI',
  isInterviewCategory: true,
  subsections: [
    {
      id: 'fastapi-basics',
      title: '1. FastAPI Basics (1–30)',
      methods: [
        { id: 'fa-1', name: '1. What is FastAPI?', description: 'A modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-2', name: '2. Why is FastAPI faster than Flask/Django?', description: 'It is built on Starlette (for web routing) and Pydantic (for data validation), utilizing async/await natively, making it one of the fastest Python frameworks.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-3', name: '3. What is ASGI?', description: 'Asynchronous Server Gateway Interface. It provides a standard interface between async-capable Python web servers, frameworks, and applications.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-4', name: '4. Difference between ASGI and WSGI?', description: 'WSGI is synchronous and handles requests one by one. ASGI handles multiple requests concurrently using async operations.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-5', name: '5. What server runs FastAPI apps?', description: 'An ASGI server, most commonly Uvicorn or Hypercorn.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-6', name: '6. What is Uvicorn?', description: 'A lightning-fast ASGI web server implementation, using uvloop and httptools.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-7', name: '7. What is Starlette?', description: 'A lightweight ASGI framework/toolkit. FastAPI uses it under the hood for routing and web fundamentals.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-8', name: '8. What is Pydantic?', description: 'A data validation and settings management library using Python type annotations.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-9', name: '9. Why does FastAPI use Pydantic?', description: 'To automatically validate data, serialize requests/responses, and generate OpenAPI schemas based on Python type hints.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-10', name: '10. What is type hinting in FastAPI?', description: 'Using Python type annotations (e.g., `id: int`) to declare variable types. FastAPI uses them for validation, conversion, and documentation.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-11', name: '11. What is path operation?', description: 'A function bound to a specific HTTP method and URL path, executing when that endpoint is hit.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-12', name: '12. What is a route?', description: 'A URL path mapped to a specific path operation function.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-13', name: '13. What is a decorator in FastAPI?', description: 'The syntax (like `@app.get("/")`) used to register a function as a path operation handler for a specific route and HTTP method.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-14', name: '14. What is @app.get()?', description: 'A decorator to handle HTTP GET requests (used to read data).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-15', name: '15. What is @app.post()?', description: 'A decorator to handle HTTP POST requests (used to create data).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-16', name: '16. What is @app.put()?', description: 'A decorator to handle HTTP PUT requests (used to update data entirely).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-17', name: '17. What is @app.delete()?', description: 'A decorator to handle HTTP DELETE requests (used to remove data).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-18', name: '18. What is request body?', description: 'Data sent by the client to your API. Declared in FastAPI by creating a Pydantic model parameter in the function.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-19', name: '19. What is response model?', description: 'A parameter in the decorator (`response_model=Model`) that defines the shape and type of data returned, automatically filtering out extra fields.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-20', name: '20. What is JSON serialization?', description: 'The process of converting Python objects (like dicts or Pydantic models) into a JSON string to be sent over HTTP.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-21', name: '21. What is dependency injection?', description: 'A pattern where a component receives its dependencies from outside rather than creating them. FastAPI has a powerful built-in DI system.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-22', name: '22. What is automatic docs generation?', description: 'FastAPI automatically generates interactive API documentation based on OpenAPI standards without extra code.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-23', name: '23. What is Swagger UI?', description: 'An interactive web interface provided by default at `/docs` allowing you to test your API directly from the browser.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-24', name: '24. What is ReDoc?', description: 'An alternative, read-only documentation interface provided by default at `/redoc`.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-25', name: '25. What is OpenAPI schema?', description: 'A standard specification for describing RESTful APIs. FastAPI generates an OpenAPI JSON document detailing all routes and models automatically.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-26', name: '26. What is status code handling?', description: 'Setting appropriate HTTP response codes. Can be set default via `status_code` in the decorator, or dynamically using `Response`.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-27', name: '27. What is response_model parameter?', description: 'Ensures the returned data strictly matches a Pydantic model, providing automatic validation and field filtering.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-28', name: '28. What is query parameter?', description: 'Parameters appended to the URL after `?`. Function parameters that are not path parameters are interpreted as query parameters.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-29', name: '29. What is path parameter?', description: 'Variables embedded directly in the URL path (e.g., `/users/{user_id}`).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' },
        { id: 'fa-30', name: '30. What is header parameter?', description: 'Data sent in HTTP headers. Handled in FastAPI using the `Header()` function from `fastapi`.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: '' }
      ]
    },
    fastapiSection2,
    fastapiSection3,
    fastapiSection4,
    fastapiSection5,
    fastapiSection6,
    fastapiSection7
  ]
};
