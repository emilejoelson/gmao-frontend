import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TBaseResponse } from '../utils/definitions/response';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse) => {
      const errorMessage = this.getErrorMessage(error.status);

      console.error(`${operation} failed:`, error);

      return of({
        error:
          error.error &&
          typeof error.error?.message === 'string' &&
          error.error?.message?.length
            ? error.error?.message
            : errorMessage,
        result: result as T,
      } as TBaseResponse<T>);
    };
  }

  private getErrorMessage(statusCode: number): string {
    switch (statusCode) {
      case 400:
        return 'BAD_REQUEST_ERROR_400';
      case 401:
        return 'UNAUTHORIZED_ERROR_401';
      case 403:
        return 'FORBIDDEN_ERROR_403';
      case 404:
        return 'REQUEST_NOT_FOUND_ERROR_404';
      case 500:
        return 'UNEXPECTED_ERROR_500';
      default:
        return 'UNKNOWN_ERROR';
    }
  }

  translateError(errorMessage: string): string {
    const errorTranslations: { [key: string]: string } = {
      'user.already.exists.error': 'Cet utilisateur existe déjà.',
      'invalid.ice.value':
        "Cette ICE n'est pas validée. Il doit contenir 15 caractères",
      'organization.name.is.unique':
        "Ce nom d'organisation est déjà affecté à un utilisateur",
      'invitation.already.sent': 'Cette invitation a été déjà envoyé',
      'no.such.element.exception':
        "On arrive pas à trouver cette donnée comptable ou ce secteur d'activité",
      'invalid.credentials': 'Email ou mot de passe incorrect.',
      'L\'email est obligatoire': 'L\'email est obligatoire',
      'Format d\'email invalide': 'Format d\'email invalide',
      'Le mot de passe est obligatoire': 'Le mot de passe est obligatoire',
      'Le refresh token est obligatoire': 'Le refresh token est obligatoire',
      'BAD_REQUEST_ERROR_400': 'Requête invalide',
      'UNAUTHORIZED_ERROR_401': 'Non autorisé',
      'FORBIDDEN_ERROR_403': 'Accès interdit',
      'REQUEST_NOT_FOUND_ERROR_404': 'Ressource non trouvée',
      'UNEXPECTED_ERROR_500': 'Erreur serveur inattendue',
      'UNKNOWN_ERROR': 'Une erreur inconnue est survenue',
    };
    return (
      errorTranslations[errorMessage] ||
      'Une erreur est survenue. Veuillez réessayer.'
    );
  }
}